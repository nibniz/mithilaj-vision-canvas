import { Mic2, Tv, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Mic2,
      title: "Live Events",
      description: "Event direction, concert & festival production, stage design, artist coordination.",
      color: "from-primary to-accent"
    },
    {
      icon: Tv,
      title: "Television & Broadcast",
      description: "Show concept, scripting, direction, production for TV formats.",
      color: "from-accent to-secondary"
    },
    {
      icon: Film,
      title: "Film & Digital Production",
      description: "Short films, feature direction, music videos, OTT content and post-production.",
      color: "from-secondary to-primary"
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum production services from concept to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 glow-primary"
            onClick={() => window.location.href = '/services'}
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
