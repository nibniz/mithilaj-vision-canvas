import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
}: AnimatedTextProps) => {
  const text = typeof children === "string" ? children : String(children);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={item} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

