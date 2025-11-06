import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

const ImageReveal = ({
  src,
  alt,
  className = "",
  direction = "up",
}: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  const getDirectionValues = () => {
    switch (direction) {
      case "left":
        return { x: -100, y: 0 };
      case "right":
        return { x: 100, y: 0 };
      case "down":
        return { x: 0, y: 100 };
      default:
        return { x: 0, y: -100 };
    }
  };

  const { x, y } = getDirectionValues();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, x, y }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ opacity }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
      
      {/* Reveal mask effect */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ x: "0%" }}
        animate={inView ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        style={{ originX: 0 }}
      />
    </div>
  );
};

export default ImageReveal;

