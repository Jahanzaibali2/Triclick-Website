import React, { useState, useEffect } from "react";
import { getOptimalImageFormat, preloadImage } from "../../utils/imageOptimizer";

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading support
 * - WebP format detection with fallback
 * - Proper dimensions to prevent layout shift
 * - Loading state handling
 * 
 * @param {string} src - Image source (required)
 * @param {string} webpSrc - WebP version (optional)
 * @param {string} alt - Alt text (required)
 * @param {string} className - CSS classes
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} loading - "lazy" | "eager" (default: "lazy")
 * @param {string} fetchPriority - "high" | "low" | "auto" (default: "auto")
 * @param {object} style - Inline styles
 * @param {object} ...props - Other img attributes
 */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  style = {},
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Get optimal format (WebP if supported)
        const optimalSrc = webpSrc
          ? await getOptimalImageFormat(src, webpSrc)
          : src;

        if (isMounted) {
          // Preload the image
          await preloadImage(optimalSrc);
          if (isMounted) {
            setImageSrc(optimalSrc);
            setIsLoading(false);
          }
        }
      } catch {
        if (isMounted) {
          // Fallback to original if WebP fails
          if (webpSrc) {
            setImageSrc(src);
            setIsLoading(false);
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }
      }
    };

    // Load image immediately if eager, otherwise browser native lazy loading handles it
    if (loading === "eager" || !loading) {
      loadImage();
    } else {
      // For lazy loading, use native browser lazy loading
      // The browser will handle when to load based on the loading="lazy" attribute
      loadImage();
    }

    return () => {
      isMounted = false;
    };
  }, [src, webpSrc, loading]);

  // Build style object with dimensions
  const imageStyle = {
    ...style,
    ...(width && height
      ? {
          aspectRatio: `${width} / ${height}`,
          maxWidth: "100%",
          height: "auto",
        }
      : {}),
  };

  if (hasError) {
    return (
      <div
        className={className}
        style={{
          width: width || "100%",
          height: height || "200px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...imageStyle,
        }}
      >
        <span style={{ color: "#999" }}>Image failed to load</span>
      </div>
    );
  }

  if (isLoading && loading === "eager") {
    return (
      <div
        className={className}
        style={{
          width: width || "100%",
          height: height || "200px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...imageStyle,
        }}
      >
        <span style={{ color: "#999" }}>Loading...</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      style={imageStyle}
      {...props}
    />
  );
};

export default OptimizedImage;

