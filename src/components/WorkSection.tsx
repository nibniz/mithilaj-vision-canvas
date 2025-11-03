import { ExternalLink, Play, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("work-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "Comedy Ulsavam",
      category: "TV Show",
      channel: "Flowers TV",
      description: "Guinness World Record-winning show with 1,525 participants. A revolutionary live television talent competition.",
      link: "https://youtu.be/nwo0K7szlMM",
      color: "primary"
    },
    {
      title: "Khalasi",
      category: "Film Direction",
      channel: "Debut Film",
      description: "Directorial debut featuring Dileep. A fresh narrative bringing innovation to Malayalam cinema.",
      link: "#",
      color: "secondary"
    },
    {
      title: "12K Vistara Technology",
      category: "Innovation",
      channel: "Flowers TV",
      description: "First-in-India production technology launch. Revolutionizing broadcast quality and viewer experience.",
      link: "#",
      color: "accent"
    },
    {
      title: "AR & VR Productions",
      category: "Technology",
      channel: "Flowers TV",
      description: "Leading the development and implementation of cutting-edge augmented and virtual reality in television.",
      link: "#",
      color: "primary"
    },
    {
      title: "Film Awards Coverage",
      category: "Event Direction",
      channel: "Multiple Channels",
      description: "Direction and production of prestigious award ceremonies with innovative presentation formats.",
      link: "#",
      color: "secondary"
    },
    {
      title: "Channel Launches",
      category: "Launch Strategy",
      channel: "6 TV Channels",
      description: "Strategic planning and execution for successful launch of 6 major television channels in India.",
      link: "#",
      color: "accent"
    }
  ];

  const channels = [
    "Mazhavil Manorama",
    "Flowers TV",
    "Asianet",
    "Amrita TV",
    "24 News",
    "Surya TV",
    "Dilse FM 90.8"
  ];

  return (
    <section 
      id="work-section"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="section-title text-gradient mb-6">
            The Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of groundbreaking television shows, film direction, and entertainment innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-${project.color}/20 border border-${project.color}/40 rounded-full text-xs font-medium text-${project.color}`}>
                      {project.category}
                    </span>
                    <Tv className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  {/* Channel */}
                  <p className="text-sm text-primary mb-4 font-medium">
                    {project.channel}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  {project.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn border-primary/30 hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:animate-glow-pulse" />
                      <span>Watch Now</span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  )}
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${project.color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Associated Channels */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Associated Networks
            </h3>
            <p className="text-muted-foreground">
              Collaborated with India's leading media channels
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((channel, index) => (
              <div
                key={channel}
                className="px-6 py-3 bg-card border border-primary/20 rounded-full hover:border-primary/50 hover:glow-primary transition-all duration-300 hover:scale-110 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-foreground">
                  {channel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
