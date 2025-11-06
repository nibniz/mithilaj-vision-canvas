import { useRef, useEffect, RefObject } from "react";

interface MagneticOptions {
  strength?: number;
  range?: number;
}

export const useMagnetic = (options: MagneticOptions = {}): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);
  const { strength = 0.3, range = 50 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < range) {
        const moveX = x * strength;
        const moveY = y * strength;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, range]);

  return ref;
};

