import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

const GradientText = ({
  children,
  className = "",
  gradient = "from-white via-white/80 to-white",
  animate = true,
}: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
      animate={
        animate
          ? {
              backgroundPosition: ["0%", "100%", "0%"],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }
          : {}
      }
      style={
        animate
          ? {
              backgroundSize: "200% 100%",
            }
          : {}
      }
    >
      {children}
    </motion.span>
  );
};

export default GradientText;

