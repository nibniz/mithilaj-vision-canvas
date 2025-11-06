import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRipple } from "@/hooks/use-ripple";
import { useMagnetic } from "@/hooks/use-magnetic";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

const RippleButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "default",
  size = "md",
  magnetic = true,
}: RippleButtonProps) => {
  const { ripples, addRipple } = useRipple();
  const magneticRef = magnetic ? useMagnetic({ strength: 0.3, range: 80 }) : { current: null };

  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-6 text-lg",
  };

  const variantClasses = {
    default: "bg-white text-black hover:bg-white/90",
    outline: "border border-white/50 hover:bg-white/10 text-foreground",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addRipple(e);
    onClick?.();
  };

  return (
    <motion.button
      type={type}
      ref={magnetic ? (magneticRef as React.Ref<HTMLButtonElement>) : undefined}
      className={`relative overflow-hidden ${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300 border border-white/20 ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
};

export default RippleButton;

