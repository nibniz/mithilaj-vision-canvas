import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const AnimatedInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  className = "",
}: AnimatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={false}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          className="w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-white/50 transition-colors duration-300"
        />
        <motion.label
          htmlFor={name}
          className="absolute left-4 text-foreground/60 pointer-events-none"
          initial={false}
          animate={{
            top: isFocused || hasValue ? 8 : 18,
            fontSize: isFocused || hasValue ? "0.75rem" : "1rem",
            color: isFocused ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.2 }}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>
      </motion.div>
      
      {/* Focus indicator line */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedInput;

