import RippleButton from "@/components/RippleButton";
import ImageReveal from "@/components/ImageReveal";
import AdvancedHoverCard from "@/components/AdvancedHoverCard";
import AnimationWrapper from "@/components/AnimationWrapper";
import { motion } from "framer-motion";

const HighlightReelSection = () => {
  const highlights = [
    {
      title: "Comedy Ulsavam",
      description: "TV special, mass participation event",
      badge: "Guinness World Record",
      image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Award Shows & Productions",
      description: "Large-scale TV productions across multiple channels",
      badge: "Broadcast Excellence",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Khalasi",
      description: "Directorial debut feature film",
      badge: "Film Direction",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Live Concerts & Festivals",
      description: "High-energy stage productions and cultural events",
      badge: "Event Production",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbaf53?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Television Series",
      description: "Multiple seasons and formats across leading channels",
      badge: "TV Production",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Music Videos & Digital",
      description: "Creative direction for music and digital content",
      badge: "Digital Media",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80"
    }
  ];

  return (
    <section id="portfolio-preview" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <AnimationWrapper direction="up" className="text-center mb-16">
          <h2 className="section-title text-foreground">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of landmark productions and creative achievements
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {highlights.map((item, index) => (
            <AnimationWrapper key={index} direction="up" delay={index * 0.1}>
              <AdvancedHoverCard glow tilt>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-white/50 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <ImageReveal 
                      src={item.image}
                      alt={item.title}
                      direction="up"
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-foreground text-xs font-semibold mb-3">
                      {item.badge}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </AdvancedHoverCard>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper direction="up" delay={0.6} className="text-center">
          <RippleButton 
            size="lg"
            variant="outline"
            onClick={() => window.location.href = '/portfolio'}
          >
            View Complete Portfolio
          </RippleButton>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default HighlightReelSection;
