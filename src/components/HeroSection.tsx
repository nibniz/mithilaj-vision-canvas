import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Check, ExternalLink } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Mithilaj Entertainments - Live Events and Film Production" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/95 to-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-gradient">
            MITHILAJ ENTERTAINMENTS
          </div>
          <div className="hidden md:flex gap-8">
            <a href="/about" className="text-sm text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-sm text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="/portfolio" className="text-sm text-foreground/80 hover:text-primary transition-colors">Portfolio</a>
            <a href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl animate-slide-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Creating live moments.<br/>
            Crafting <span className="text-gradient">cinematic stories.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed">
            Led by director & producer <span className="text-primary font-semibold">Mithilaj Abdul</span> — bold, original, experienced.
          </p>

          <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
            Live events, TV direction, film production and creative solutions in India and the Gulf.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 glow-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Start a Project
            </Button>
            
            <button 
              onClick={() => window.location.href = '/portfolio'}
              className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-base border-b border-foreground/20 pb-1"
            >
              <span>View Our Work</span>
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
