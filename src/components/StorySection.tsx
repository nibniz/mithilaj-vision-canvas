import { Award, Lightbulb, Sparkles, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("story-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="story-section"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="section-title text-gradient mb-6">
            The Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through innovation, creativity, and breaking world records
          </p>
        </div>

        {/* Guinness World Record Highlight */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-card border border-primary/20 glow-primary">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground p-4 rounded-full glow-primary">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
            
            <div className="text-center pt-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-gradient">
                  Guinness World Record
                </h3>
                <Award className="w-6 h-6 text-primary" />
              </div>
              
              <p className="text-lg text-foreground/90 mb-4">
                <span className="text-2xl font-bold text-primary">1,525 Participants</span> in the Most Participants in a Special Live Event Television Talent Competition
              </p>
              
              <p className="text-muted-foreground mb-6">
                Comedy Ulsavam, Flowers TV • December 23, 2018 • Adlux Convention Centre, Cochin
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {['Song', 'Dance', 'Mimic', 'Instrumental', 'Martial Arts', 'Drama'].map((category) => (
                  <span 
                    key={category}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "Broadcasting Journey",
              description: "Extensive career with top media channels including Mazhavil Manorama, Flowers TV, Asianet, and more. Launched 6 TV channels in India with numerous hit television shows that boosted viewership ratings.",
              gradient: "from-primary/20 to-transparent"
            },
            {
              icon: Lightbulb,
              title: "Innovation Leader",
              description: "Key contributor in developing 12K Vistara Production Technology - a first for India. Leading the charge in AR & VR technologies for television productions at Flowers TV.",
              gradient: "from-secondary/20 to-transparent"
            },
            {
              icon: Trophy,
              title: "Dubai Expo 2020",
              description: "Selected as one of the members invited by officials to represent India at the prestigious Dubai Expo 2020, showcasing Indian entertainment excellence.",
              gradient: "from-accent/20 to-transparent"
            },
            {
              icon: Award,
              title: "Film Production",
              description: "Successful venture into film production with debut film 'Khalasi' starring Dileep. Bringing fresh storytelling and directorial vision to Malayalam cinema.",
              gradient: "from-primary/20 to-transparent"
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <item.icon className="w-12 h-12 text-primary group-hover:animate-glow-pulse" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 max-w-4xl mx-auto italic">
            "Entertainment is emotion, and I bring it to life through every frame, every story, every moment."
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Mithilaj Abdul</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
