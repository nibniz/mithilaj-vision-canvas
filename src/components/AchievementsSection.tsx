import { Trophy, Star, Radio, Clapperboard } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      text: "Guinness World Record — Most participants in a live television talent show (Comedy Ulsavam)."
    },
    {
      icon: Star,
      text: "Directed major award shows, festivals and television programs across leading channels."
    },
    {
      icon: Radio,
      text: "Creative head roles in radio & coordination roles in international animation projects."
    },
    {
      icon: Clapperboard,
      text: "Feature film director with broadcast-quality production standards."
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Selected Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that define our journey in entertainment production
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:translate-x-2 animate-slide-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground/90 leading-relaxed pt-2">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
