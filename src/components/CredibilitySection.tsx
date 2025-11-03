import { Award, Tv, Film } from "lucide-react";

const CredibilitySection = () => {
  const credentials = [
    {
      icon: Award,
      text: "Guinness World Record holder"
    },
    {
      icon: Tv,
      text: "Broadcast leader"
    },
    {
      icon: Film,
      text: "Festival & film director"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-muted/10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {credentials.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center gap-4 p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-primary">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
