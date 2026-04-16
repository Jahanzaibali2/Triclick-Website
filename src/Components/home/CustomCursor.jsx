import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!dot || !circle || !window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    const speed = 0.12;
    let rafId;

    const moveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveHandler);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={circleRef} className="custom-cursor-circle" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
