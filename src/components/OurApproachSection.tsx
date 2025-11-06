import { Lightbulb, Palette, Zap } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const OurApproachSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll tracking with manual sticky control
  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const sticky = stickyRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const containerTop = containerRect.top;
      const containerBottom = containerTop + containerHeight;
      
      // Check if we should be sticky - stay sticky until container fully scrolls past
      const shouldBeSticky = containerTop <= 0 && containerBottom > window.innerHeight;
      setIsSticky(shouldBeSticky);
      
      // Calculate progress
      // Progress goes from 0 (sticky starts) to 1 (all cards revealed, sticky ends)
      let progress = 0;
      if (containerTop <= 0) {
        // Sticky phase: container is scrolling through viewport
        // Progress = 0 when containerTop = 0 (sticky starts)
        // Progress = 1 when containerBottom = window.innerHeight (sticky ends, all cards revealed)
        const viewportHeight = window.innerHeight;
        const totalScrollRange = containerHeight - viewportHeight; // How much we need to scroll
        const scrolled = -containerTop; // How much we've scrolled (containerTop is negative)
        progress = Math.min(1, Math.max(0, scrolled / totalScrollRange));
      }
      
      setScrollProgress(progress);
      
      // Debug: Log when progress changes significantly
      if (Math.abs(progress - (window as any).lastProgress || 0) > 0.1) {
        console.log('Progress changed:', {
          progress: progress.toFixed(3),
          containerTop: containerTop.toFixed(2),
          isSticky: shouldBeSticky
        });
        (window as any).lastProgress = progress;
      }
    };

    let rafId: number;
    const raf = () => {
      updateProgress();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Create reactive motion value
  const progressMotion = useMotionValue(0);
  const springProgress = useSpring(progressMotion, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    progressMotion.set(scrollProgress);
  }, [scrollProgress, progressMotion]);

  const features = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Vision & Creativity",
      description: "Every project starts with a bold idea — a creative vision that captures imagination and sets the stage for unforgettable experiences."
    },
    {
      number: "02",
      icon: Palette,
      title: "Design & Storytelling",
      description: "We refine concepts through meticulous design and compelling storytelling, ensuring each narrative resonates deeply with audiences."
    },
    {
      number: "03",
      icon: Zap,
      title: "Technology & Execution",
      description: "Advanced technology meets precision execution to bring visions to life, creating experiences that stay with people long after the spotlight fades."
    }
  ];

  return (
    <section className="relative bg-black" style={{ position: "relative", overflow: "visible" }}>
      {/* Debug display */}
      <div className="fixed top-20 right-4 z-[9999] bg-white/10 text-white p-2 rounded text-xs font-mono">
        <div>Progress: {scrollProgress.toFixed(3)}</div>
        <div>Sticky: {isSticky ? 'YES' : 'NO'}</div>
      </div>

      {/* Scroll Container - Creates scroll space for all 3 cards */}
      <div 
        ref={containerRef}
        style={{ height: "300vh", position: "relative" }}
      >
        {/* Sticky Container - Header + Cards stay fixed */}
        <div 
          ref={stickyRef}
          className="sticky top-0 h-screen flex flex-col bg-black"
          style={{ 
            position: "sticky",
            zIndex: 10,
          }}
        >
          {/* Header - Always at top of sticky container */}
          <div 
            className="text-center pt-20 pb-6 flex-shrink-0"
            style={{ 
              minHeight: "140px",
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Creativity meets clarity.
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex-1 flex items-center justify-center relative min-h-0">
            <div className="relative w-full max-w-7xl px-4" style={{ height: "650px" }}>
              {features.map((feature, index) => {
                // Define transition points - longer, smoother transitions with better overlap
                let fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd;
                
                if (index === 0) {
                  // First card: visible from start, longer fade out
                  fadeInStart = 0;
                  fadeInEnd = 0;
                  fadeOutStart = 0.15; // Start fading at 15%
                  fadeOutEnd = 0.40;   // Fully faded at 40% (25% transition range)
                } else if (index === 2) {
                  // Last card: slower, more dramatic reveal
                  fadeInStart = 0.50;  // Start fading in at 50% (delayed to give card 2 more time)
                  fadeInEnd = 0.80;    // Fully visible at 80% (30% transition range - slower reveal)
                  fadeOutStart = 0.92; // Start fading out at 92%
                  fadeOutEnd = 1.0;    // Fully faded at 100%
                } else {
                  // Middle card: longer visibility period
                  fadeInStart = 0.10;  // Start fading in at 10% (early overlap with card 1)
                  fadeInEnd = 0.35;    // Fully visible at 35% (25% transition range)
                  fadeOutStart = 0.55;  // Start fading out at 55% (gives 20% of scroll for full visibility)
                  fadeOutEnd = 0.75;   // Fully faded at 75% (20% transition range)
                }

                // Calculate opacity with optimized cubic ease-in-out for smoother reveals
                let opacity = 0;
                if (index === 0) {
                  if (scrollProgress <= fadeOutStart) {
                    opacity = 1;
                  } else if (scrollProgress <= fadeOutEnd) {
                    // Smooth fade out with cubic ease-in-out
                    const t = (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
                    // Cubic ease-in-out: smooth start, smooth end
                    const eased = t < 0.5 
                      ? 4 * t * t * t 
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    opacity = 1 - eased;
                  } else {
                    opacity = 0;
                  }
                } else if (index === 2) {
                  if (scrollProgress < fadeInStart) {
                    opacity = 0;
                  } else if (scrollProgress <= fadeInEnd) {
                    // Smooth fade in with ease-out for dramatic reveal
                    const t = (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
                    // Use ease-out for smoother, more natural reveal
                    const eased = 1 - Math.pow(1 - t, 3); // Cubic ease-out
                    opacity = eased;
                  } else if (scrollProgress <= fadeOutStart) {
                    opacity = 1;
                  } else {
                    // Smooth fade out near end
                    const t = (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
                    const eased = t < 0.5 
                      ? 4 * t * t * t 
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    opacity = 1 - eased;
                  }
                } else {
                  if (scrollProgress < fadeInStart) {
                    opacity = 0;
                  } else if (scrollProgress <= fadeInEnd) {
                    // Smooth fade in with cubic ease-in-out
                    const t = (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
                    const eased = t < 0.5 
                      ? 4 * t * t * t 
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    opacity = eased;
                  } else if (scrollProgress <= fadeOutStart) {
                    opacity = 1;
                  } else if (scrollProgress <= fadeOutEnd) {
                    // Smooth fade out with cubic ease-in-out
                    const t = (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
                    const eased = t < 0.5 
                      ? 4 * t * t * t 
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    opacity = 1 - eased;
                  } else {
                    opacity = 0;
                  }
                }

                // Calculate Y position, scale, and blur with optimized cubic ease-in-out
                let y = 0;
                let scale = 1;
                let blur = 0;
                
                // Helper function for cubic ease-in-out
                const cubicEaseInOut = (t: number) => {
                  return t < 0.5 
                    ? 4 * t * t * t 
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };
                
                // Helper function for ease-out (for reveals)
                const easeOut = (t: number) => {
                  return 1 - Math.pow(1 - t, 3); // Cubic ease-out
                };
                
                if (index === 0) {
                  if (scrollProgress <= fadeOutStart) {
                    y = 0;
                    scale = 1;
                  } else if (scrollProgress <= fadeOutEnd) {
                    const t = (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
                    const eased = cubicEaseInOut(t);
                    y = -40 * eased; // Reduced movement for smoother effect
                    scale = 1 - (0.08 * eased); // Subtle scale down
                  } else {
                    y = -40;
                    scale = 0.92;
                  }
                } else if (index === 2) {
                  // Third card: more dramatic, slower reveal with blur effect
                  if (scrollProgress < fadeInStart) {
                    y = 60; // Start further down
                    scale = 0.85; // Start smaller for more dramatic effect
                    blur = 10; // Start with blur
                  } else if (scrollProgress <= fadeInEnd) {
                    const t = (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
                    const eased = easeOut(t); // Use ease-out for smoother reveal
                    y = 60 - (60 * eased);
                    scale = 0.85 + (0.15 * eased); // Scale from 0.85 to 1.0
                    blur = 10 - (10 * eased); // Blur from 10px to 0px
                  } else {
                    y = 0;
                    scale = 1;
                    blur = 0;
                  }
                } else {
                  if (scrollProgress < fadeInStart) {
                    y = 40;
                    scale = 0.92;
                  } else if (scrollProgress <= fadeInEnd) {
                    const t = (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
                    const eased = cubicEaseInOut(t);
                    y = 40 - (40 * eased);
                    scale = 0.92 + (0.08 * eased);
                  } else if (scrollProgress <= fadeOutStart) {
                    y = 0;
                    scale = 1;
                  } else if (scrollProgress <= fadeOutEnd) {
                    const t = (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
                    const eased = cubicEaseInOut(t);
                    y = -40 * eased;
                    scale = 1 - (0.08 * eased);
                  } else {
                    y = -40;
                    scale = 0.92;
                  }
                }

                return (
                  <motion.div
                  key={index}
                    animate={{
                      opacity,
                      y,
                      scale,
                      filter: `blur(${blur}px)`,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.25, 0.1, 0.25, 1] // Smoother easing for reveals
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: features.length - index,
                    }}
                    className="pointer-events-none"
                  >
                    <div className="grid md:grid-cols-12 gap-12 items-center h-full">
                      <div className="md:col-span-7 space-y-6">
                      <div className="flex items-center gap-6 mb-6">
                          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/30">
                          {feature.number}
                        </span>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg bg-card/50 border border-white/50 flex items-center justify-center">
                              <feature.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                        <div className="relative p-12 rounded-2xl border border-white/50 bg-card/30 backdrop-blur-sm h-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-2xl bg-white/5"></div>
                          <div className="relative z-10 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                              <feature.icon className="w-16 h-16 text-white" />
                            </div>
                          </div>
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
                        }}></div>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
