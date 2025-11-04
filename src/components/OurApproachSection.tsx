import { Lightbulb, Palette, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OurApproachSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

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
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Creativity meets clarity.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/30 via-white/50 to-white/30 opacity-50 hidden md:block"></div>

            {/* Numbered Features */}
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`transition-all duration-1000 ${
                    visibleItems[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-8 items-center py-12 relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block">
                      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                        visibleItems[index]
                          ? "bg-white border-white scale-125"
                          : "bg-transparent border-white/30"
                      }`}></div>
                    </div>

                    {/* Left: Number and Text */}
                    <div className="md:col-span-7 md:pl-16 space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-4xl md:text-5xl font-bold transition-all duration-500 ${
                          visibleItems[index] ? "text-white/30" : "text-white/10"
                        }`}>
                          {feature.number}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-500 ${
                            visibleItems[index] ? "scale-100 border-white/50" : "scale-90"
                          }`}>
                            <feature.icon className={`w-6 h-6 transition-all duration-500 ${
                              visibleItems[index] ? "text-white" : "text-white/30"
                            }`} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Right: Visual Card */}
                    <div className="md:col-span-5">
                      <div className={`relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 ${
                        visibleItems[index] 
                          ? "opacity-100 scale-100 border-white/50" 
                          : "opacity-0 scale-95"
                      }`}>
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 rounded-2xl bg-white/5"></div>
                        
                        {/* Icon Display */}
                        <div className="relative z-10 flex items-center justify-center h-32">
                          <div className={`w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-700 ${
                            visibleItems[index] ? "scale-100" : "scale-90 opacity-50"
                          }`}>
                            <feature.icon className={`w-10 h-10 text-white transition-all duration-500 ${
                              visibleItems[index] ? "scale-100" : "scale-75"
                            }`} />
                          </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider Line */}
                  {index < features.length - 1 && (
                    <div className={`h-px bg-gradient-to-r from-transparent via-border to-transparent mx-8 transition-all duration-500 ${
                      visibleItems[index] ? "opacity-100" : "opacity-0"
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
