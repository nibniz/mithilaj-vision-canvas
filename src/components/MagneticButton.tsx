import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const MagneticButton = ({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "md",
}: MagneticButtonProps) => {
  const magneticRef = useMagnetic({ strength: 0.3, range: 80 });

  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-6 text-lg",
  };

  const variantClasses = {
    default: "bg-white text-black hover:bg-white/90",
    outline: "border border-white/50 hover:bg-white/10 text-foreground",
  };

  return (
    <motion.button
      ref={magneticRef as React.Ref<HTMLButtonElement>}
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300 border border-white/20 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;

