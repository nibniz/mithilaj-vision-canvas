import { ReactNode } from "react";

interface ScrollSnapSectionProps {
  children: ReactNode;
  className?: string;
}

const ScrollSnapSection = ({ children, className = "" }: ScrollSnapSectionProps) => {
  return (
    <section
      className={`snap-start snap-always min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export default ScrollSnapSection;

