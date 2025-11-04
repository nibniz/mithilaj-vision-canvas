import { Trophy, Star, Radio, Clapperboard, type LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface AchievementCardProps {
  icon: LucideIcon;
  text: string;
  index: number;
  totalCards: number;
}

const AchievementCard = ({ icon: Icon, text, index, totalCards }: AchievementCardProps) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay based on index for cascading effect
            setTimeout(() => {
              setIsVisible(true);
            }, index * 150);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };
  
  // Animation: cards fall from above with slight rotation
  const getBaseTransform = () => {
    if (!isVisible) {
      return `translateY(-200px) rotateZ(${-5 + index * 2}deg) scale(0.9)`;
    }
    return 'translateY(0) rotateZ(0) scale(1)';
  };

  const getHoverTransform = () => {
    if (isHovered) {
      return `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateY(-8px) scale(1.05)`;
    }
    return getBaseTransform();
  };

  // Gradient colors for each card (subtle variations in grayscale)
  const gradients = [
    'from-white/20 via-white/10 to-white/5',
    'from-white/15 via-white/8 to-white/5',
    'from-white/10 via-white/5 to-white/3',
    'from-white/18 via-white/10 to-white/5',
  ];

  return (
    <div 
      ref={cardRef}
      className="group relative rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: getHoverTransform(),
        transformStyle: 'preserve-3d',
        transition: isVisible 
          ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s, border-color 0.3s, opacity 0.6s ease-out'
          : 'opacity 0.1s ease-out',
        zIndex: totalCards - index,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Section - Visual Area with Icon */}
      <div className={`relative h-56 md:h-64 bg-gradient-to-b ${gradients[index % gradients.length]} flex items-center justify-center overflow-hidden group-hover:brightness-110 transition-all duration-300`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>
        
        {/* Icon Display */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 group-hover:border-white/50 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
          <Icon className="w-12 h-12 text-white transition-all duration-500" />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Bottom Section - Frosted Glass Overlay with Text */}
      <div className="relative bg-gradient-to-b from-white/20 via-white/15 to-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="p-6 md:p-8">
          <p className="text-foreground leading-relaxed text-base md:text-lg font-light">
            {text}
          </p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-white/5 blur-xl"></div>
      </div>
    </div>
  );
};

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
          <h2 className="section-title text-foreground">Selected Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that define our journey in entertainment production
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              text={achievement.text}
              index={index}
              totalCards={achievements.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
