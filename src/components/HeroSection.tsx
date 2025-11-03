import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Guinness World Record Holder
            </span>
            <Sparkles className="w-6 h-6 text-secondary animate-glow-pulse" />
          </div>

          <h1 className="hero-title text-gradient mb-6 px-4">
            Mithilaj Abdul
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 max-w-4xl mx-auto font-light">
            Creating Experiences That Inspire & Entertain
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Television Director • Creative Head • Storyteller • Film Producer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-primary group transition-all duration-300 hover:scale-105"
            >
              <span>Explore My World</span>
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:glow-secondary"
            >
              <Play className="mr-2 w-5 h-5" />
              <span>Watch Showreel</span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;
