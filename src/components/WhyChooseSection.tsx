import { Radio, Zap, Lightbulb } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const pillars = [
    {
      icon: Radio,
      title: "Broadcast Expertise",
      description: "Deep TV & radio background for flawless live delivery."
    },
    {
      icon: Zap,
      title: "Scale & Precision",
      description: "Large-format event experience and complex productions."
    },
    {
      icon: Lightbulb,
      title: "Story-First Approach",
      description: "Every show and film starts with a compelling idea, executed with craft."
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card/30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <AnimationWrapper direction="up" className="text-center mb-16">
          <h2 className="section-title">Why Choose Mithilaj Entertainments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars that define our approach to production
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <AnimationWrapper key={index} direction="up" delay={index * 0.15}>
              <motion.div 
                className="relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
