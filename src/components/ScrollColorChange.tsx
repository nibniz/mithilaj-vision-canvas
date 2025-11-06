import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollColorChange = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Calculate background color based on scroll progress
  const getBackgroundColor = () => {
    if (scrollProgress < 0.3) {
      return "rgba(0, 0, 0, 1)"; // Black
    } else if (scrollProgress < 0.6) {
      const factor = (scrollProgress - 0.3) / 0.3;
      return `rgba(${Math.floor(factor * 10)}, ${Math.floor(factor * 10)}, ${Math.floor(factor * 10)}, 1)`;
    } else {
      return "rgba(10, 10, 10, 1)"; // Slightly lighter black
    }
  };

  return { scrollProgress, getBackgroundColor };
};

