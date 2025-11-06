import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "word" | "character";
}

const SplitText = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.02,
  by = "word",
}: SplitTextProps) => {
  const text = typeof children === "string" ? children : String(children);

  const items = by === "word" ? text.split(" ") : text.split("");

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
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
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
      style={{ perspective: 1000 }}
    >
      {items.map((itemText, index) => (
        <motion.span
          key={index}
          variants={item}
          className={by === "word" ? "inline-block mr-1" : "inline-block"}
          style={{ transformStyle: "preserve-3d" }}
        >
          {itemText}
          {by === "word" && index < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;

