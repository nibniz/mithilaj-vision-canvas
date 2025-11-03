import { Sparkles, Wand2, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import entertainmentBg from "@/assets/entertainment-bg.jpg";

const EntertainmentSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("entertainment-section");
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (section) observer.unobserve(section);
    };
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "Transforming ideas into captivating television experiences that resonate with millions"
    },
    {
      icon: Wand2,
      title: "Technical Innovation",
      description: "Pioneering AR, VR, and 12K technologies to push the boundaries of broadcasting"
    },
    {
      icon: Zap,
      title: "Record-Breaking Shows",
      description: "Creating entertainment that makes history and sets new industry standards"
    }
  ];

  return (
    <section 
      id="entertainment-section"
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${(scrollY - 2000) * 0.3}px)`,
        }}
      >
        <img 
          src={entertainmentBg} 
          alt="Entertainment Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background"></div>
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer"
            style={{
              top: `${20 + i * 20}%`,
              left: '-100%',
              right: '-100%',
              animationDelay: `${i * 0.5}s`,
              transform: 'rotate(-5deg)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="section-title text-gradient mb-6">
            Experience the Entertainment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where creativity meets technology, bringing the magic of media to every frame
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:glow-primary transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:animate-glow-pulse" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {[
            { value: "1,525", label: "Record Participants" },
            { value: "6", label: "Channel Launches" },
            { value: "20+", label: "Years Experience" },
            { value: "∞", label: "Creative Vision" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
                opacity: 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;
