/**
 * Utility functions for image optimization
 */

/**
 * Detects if the browser supports WebP format
 * @returns {Promise<boolean>} True if WebP is supported
 */
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  });
};

/**
 * Gets the appropriate image format based on browser support
 * @param {string} originalPath - Original image path
 * @param {string} webpPath - WebP version path (optional)
 * @returns {Promise<string>} Best format path
 */
export const getOptimalImageFormat = async (originalPath, webpPath) => {
  if (!webpPath) {
    return originalPath;
  }
  const webPSupported = await supportsWebP();
  return webPSupported ? webpPath : originalPath;
};

/**
 * Preloads an image
 * @param {string} src - Image source URL
 * @returns {Promise<void>}
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

