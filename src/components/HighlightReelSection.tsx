import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighlightReelSection = () => {
  const highlights = [
    {
      title: "Comedy Ulsavam",
      description: "TV special, mass participation event",
      badge: "Guinness World Record",
      image: "/placeholder.svg"
    },
    {
      title: "Award Shows & Productions",
      description: "Large-scale TV productions across multiple channels",
      badge: "Broadcast Excellence",
      image: "/placeholder.svg"
    },
    {
      title: "Khalasi",
      description: "Directorial debut feature film",
      badge: "Film Direction",
      image: "/placeholder.svg"
    },
    {
      title: "Live Concerts & Festivals",
      description: "High-energy stage productions and cultural events",
      badge: "Event Production",
      image: "/placeholder.svg"
    },
    {
      title: "Television Series",
      description: "Multiple seasons and formats across leading channels",
      badge: "TV Production",
      image: "/placeholder.svg"
    },
    {
      title: "Music Videos & Digital",
      description: "Creative direction for music and digital content",
      badge: "Digital Media",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio-preview" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-foreground">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of landmark productions and creative achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-white/50 transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
                <ExternalLink className="w-12 h-12 text-white/80 relative z-10" />
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-foreground text-xs font-semibold mb-3">
                  {item.badge}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            variant="outline"
            className="border-white/50 hover:bg-white/10 text-foreground px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/portfolio'}
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightReelSection;
