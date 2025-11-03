import { Radio, Zap, Lightbulb } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Why Choose Mithilaj Entertainments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars that define our approach to production
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
