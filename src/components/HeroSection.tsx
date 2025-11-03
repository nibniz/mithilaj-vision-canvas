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

  const services = [
    "TELEVISION DIRECTION",
    "CREATIVE PRODUCTION",
    "STORYTELLING",
    "FILM PRODUCTION",
    "ENTERTAINMENT",
    "BROADCASTING"
  ];

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
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
        {[...Array(5)].map((_, i) => (
          <Sparkles
            key={`star-${i}`}
            className="absolute text-secondary/30 animate-glow-pulse"
            size={16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-8">
        <div className="container mx-auto flex justify-between items-start">
          <div className="text-xl font-light text-muted-foreground">
            it's me
          </div>
          <div className="flex gap-8 md:gap-12">
            <a href="#work" className="group flex flex-col items-end gap-1 hover:text-primary transition-colors">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-foreground/80">My Projects</span>
                <ExternalLink size={14} className="opacity-50" />
              </div>
              <span className="text-xs text-muted-foreground/60">Explore project I have done</span>
            </a>
            <a href="#story" className="group flex flex-col items-end gap-1 hover:text-primary transition-colors">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-foreground/80">About Me</span>
                <ExternalLink size={14} className="opacity-50" />
              </div>
              <span className="text-xs text-muted-foreground/60">Learn about my self what I do</span>
            </a>
            <a href="#contact" className="group flex flex-col items-end gap-1 hover:text-primary transition-colors">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-foreground/80">Contact me</span>
                <ExternalLink size={14} className="opacity-50" />
              </div>
              <span className="text-xs text-muted-foreground/60">infomadhur786@gmail.com</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">👋</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              Hello! <span className="font-bold text-gradient">I'm Mithilaj</span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-primary to-secondary"></div>
              <p className="text-xl md:text-2xl text-foreground/80">
                Television Director. <Sparkles className="inline w-5 h-5 text-primary" />
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Hello! I'm Mithilaj. I'm a <span className="text-foreground font-semibold">Guinness World Record holder, creative head, storyteller & film producer</span>, experience strategist, generative artist & human-loving visionary.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Creative vision must be authentic</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Solve entertainment elegantly</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Audience connection, feedback, and inspiration</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 glow-primary"
              >
                Let's Talk
              </Button>
              
              <button className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-base border-b border-foreground/20 pb-1">
                <span>Download CV</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="relative animate-fade-in hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary/30 flex items-center justify-center">
                <div className="text-6xl font-light">Hello</div>
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rotate-45"></div>
              </div>
              
              {/* Profile Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-lg blur-3xl animate-glow-pulse"></div>
              
              {/* Curved decorative element */}
              <div className="absolute right-0 top-1/4 w-32 h-32">
                <div className="w-full h-full border-4 border-foreground/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Ribbon at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 overflow-hidden">
        <div 
          className="absolute w-[200%] h-64 bg-gradient-to-r from-primary via-accent to-secondary -bottom-32 -left-[50%] rotate-3 flex items-center justify-around px-12"
          style={{
            animation: "shimmer 20s linear infinite",
          }}
        >
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap text-white font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              <span>{service}</span>
            </div>
          ))}
          {services.map((service, i) => (
            <div key={`repeat-${i}`} className="flex items-center gap-3 whitespace-nowrap text-white font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent z-5 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
