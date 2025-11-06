import { Mic2, Tv, Film } from "lucide-react";
import RippleButton from "@/components/RippleButton";
import AnimationWrapper from "@/components/AnimationWrapper";
import { motion } from "framer-motion";

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
        <AnimationWrapper direction="up" className="text-center mb-16">
          <h2 className="section-title text-foreground">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum production services from concept to delivery
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <AnimationWrapper key={index} direction="up" delay={index * 0.15}>
              <motion.div 
                className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-white/50 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:border-white/50 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper direction="up" delay={0.5} className="text-center">
          <RippleButton 
            size="lg"
            variant="default"
            onClick={() => window.location.href = '/services'}
          >
            Explore All Services
          </RippleButton>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
