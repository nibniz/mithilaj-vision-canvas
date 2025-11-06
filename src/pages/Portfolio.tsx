import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Instagram, Youtube, ArrowRight } from "lucide-react";
import FooterSection from "@/components/FooterSection";

type ProjectCategory = "All" | "Events" | "Film" | "Television" | "Digital";

interface Project {
  id: number;
  title: string;
  role: string;
  caption: string;
  category: ProjectCategory[];
  imageAlt: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  images: string[];
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Comedy Ulsavam",
      role: "Director · Creative Producer",
      caption: "Large-format live TV talent event — broadcast direction that set a Guinness World Record.",
      category: ["Television", "Events"],
      imageAlt: "Mithilaj Abdul directing live television production — Comedy Ulsavam.",
      description: "A mass-participation televised talent event directed for live broadcast. The production combined complex staging, multi-camera coordination, and audience management — earning a Guinness World Record for participation.",
      challenge: "Coordinating thousands of participants in real-time while maintaining broadcast quality for live television.",
      approach: "Implemented multi-camera systems, real-time editing, and strategic audience management protocols.",
      result: "Achieved Guinness World Record for most participants in a live television talent show. Successfully broadcast to millions of viewers with zero technical disruptions.",
      images: [
        "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop&q=80"
      ],
    },
    {
      id: 2,
      title: "Khalasi",
      role: "Director · Creative Lead",
      caption: "Feature film direction — a cinematic story rooted in realism and craft.",
      category: ["Film"],
      imageAlt: "Film set image — Mithilaj Abdul directing on the set of Khalasi.",
      description: "Feature film direction combining narrative depth with visual storytelling. A project that showcases cinematic craft and emotional resonance.",
      challenge: "Balancing artistic vision with production constraints while maintaining authentic storytelling.",
      approach: "Collaborative direction process with cast and crew, focusing on character development and visual narrative.",
      result: "Completed feature film with critical acclaim, demonstrating versatility from live events to cinematic storytelling.",
      images: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop&q=80"
      ],
    },
    {
      id: 3,
      title: "Flowers Film Awards",
      role: "Director · Production Lead",
      caption: "Awards night production — live broadcast with cinematic staging.",
      category: ["Television", "Events"],
      imageAlt: "Stage and audience at Flowers Film Awards directed by Mithilaj Abdul.",
      description: "Prestigious film awards ceremony production with live broadcast, featuring celebrity presentations and live performances.",
      challenge: "Coordinating multiple award segments, live performances, and seamless broadcast transitions.",
      approach: "Integrated stage design, lighting, and camera work to create cinematic moments throughout the ceremony.",
      result: "Successful live broadcast reaching millions of viewers with polished production values and seamless execution.",
      images: [
        "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop&q=80"
      ],
    },
    {
      id: 4,
      title: "Gulf Cultural Festival",
      role: "Producer · Event Director",
      caption: "Multi-city cultural festival — large-scale stage and artist coordination.",
      category: ["Events"],
      imageAlt: "Crowd shot — cultural festival production, Mithilaj Entertainments.",
      description: "Large-scale cultural festival spanning multiple cities with diverse performances, stage setups, and artist coordination.",
      challenge: "Managing logistics across multiple venues while maintaining consistent production quality and artist coordination.",
      approach: "Systematic production management with dedicated teams per venue, standardized technical setups, and centralized creative direction.",
      result: "Successful multi-city festival execution with high audience engagement and positive artist feedback.",
      images: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop&q=80"
      ],
    },
    {
      id: 5,
      title: "Music Video Project",
      role: "Director · Creative Producer",
      caption: "Cinematic music video production — narrative visuals and motion design.",
      category: ["Digital", "Film"],
      imageAlt: "Director framing a shot on a music video set.",
      description: "High-production music video combining narrative storytelling with dynamic visuals and motion design.",
      challenge: "Translating musical narrative into compelling visual sequences with limited production time.",
      approach: "Collaborative pre-production planning, efficient on-set direction, and post-production visual effects integration.",
      result: "Music video achieved high viewership and positive reception for its cinematic quality and narrative depth.",
      images: [
        "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop&q=80"
      ],
    },
    {
      id: 6,
      title: "Corporate Summit",
      role: "Creative Director · Show Designer",
      caption: "Branded summit production with live panels and broadcast feeds.",
      category: ["Events", "Digital"],
      imageAlt: "Corporate stage and LED set for brand summit.",
      description: "Large-scale corporate summit production featuring keynote speakers, panel discussions, and live broadcast capabilities.",
      challenge: "Creating engaging visual experiences for corporate content while maintaining professional production standards.",
      approach: "Custom stage design, integrated LED displays, and strategic camera work to enhance speaker presentations.",
      result: "Successful corporate event with enhanced engagement metrics and positive client feedback on production quality.",
      images: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop&q=80"
      ],
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleProjects((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [filteredProjects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const categories: ProjectCategory[] = ["All", "Events", "Film", "Television", "Digital"];

  return (
    <div className="relative bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 px-6 py-6 md:py-8 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white border border-white/20 flex items-center justify-center shadow-lg">
              <span className="text-lg md:text-xl font-bold text-black">MA</span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-foreground">
              MITHILAJ ENTERTAINMENTS
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/gallery" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/portfolio" className="text-sm text-foreground font-semibold transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Video/Image Background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          {/* Placeholder for video - replace with actual video element */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop&q=80"
              alt="Portfolio background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Portfolio
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 mb-6">
            Frames that speak. Moments that last.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
            A curated selection of live events, films, and television projects directed and produced by <span className="text-foreground font-semibold">Mithilaj Abdul</span>. Each work is a blend of creative storytelling, technical precision, and emotional impact.
          </p>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="relative py-12 overflow-hidden border-b border-white/10">
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects([]);
                }}
                className={`text-base md:text-lg font-light transition-all duration-300 pb-2 border-b-2 ${
                  selectedCategory === category
                    ? "text-foreground border-foreground"
                    : "text-foreground/50 border-transparent hover:text-foreground/80 hover:border-foreground/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleProjects[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
                  <img
                    src={project.images[0] || "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80"}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-300">
                    <div className="text-xs md:text-sm font-light text-foreground/70 mb-2">{project.role}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base font-light text-foreground/90 leading-relaxed">
                      {project.caption}
                    </p>
                    <div className="mt-4 flex items-center text-foreground/70 group-hover:text-foreground transition-colors">
                      <span className="text-sm font-light">View Project</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Section - Comedy Ulsavam */}
      <section className="relative py-32 overflow-hidden bg-white/5">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="text-sm md:text-base text-foreground/60 font-light uppercase tracking-wider">Case Study</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Comedy Ulsavam
              </h2>
              <p className="text-base md:text-lg text-foreground/90 font-light leading-relaxed mb-8">
                A mass-participation televised talent event directed for live broadcast. The production combined complex staging, multi-camera coordination, and audience management — earning a Guinness World Record for participation.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                onClick={() => {
                  const comedyProject = projects.find(p => p.id === 1);
                  if (comedyProject) {
                    handleProjectClick(comedyProject);
                  }
                }}
              >
                View Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&h=800&fit=crop&q=80"
                alt="Comedy Ulsavam - Guinness World Record production"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Brand Line Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-1/4 right-1/4 top-1/4 bottom-1/4 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-relaxed italic">
              "Every frame has a purpose. Every story has a soul."
            </blockquote>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-32 overflow-hidden bg-white/5">
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Collaborate with Mithilaj Entertainments
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 font-light mb-12 leading-relaxed">
              For film, live, or digital productions, connect with the creative house that blends art and precision.
            </p>
            <div className="mb-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:info@mithilajentertainments.com"
                className="flex items-center gap-2 text-base font-light text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-light text-foreground/80 hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-light text-foreground/80 hover:text-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-white/10 text-foreground">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base font-light text-foreground/70">
                  {selectedProject.role}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={selectedProject.images[0] || "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop&q=80"}
                    alt={selectedProject.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">About</h3>
                  <p className="text-base font-light text-foreground/90 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge / Approach / Result */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Challenge</h3>
                    <p className="text-sm font-light text-foreground/80 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Approach</h3>
                    <p className="text-sm font-light text-foreground/80 leading-relaxed">
                      {selectedProject.approach}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Result</h3>
                    <p className="text-sm font-light text-foreground/80 leading-relaxed">
                      {selectedProject.result}
                    </p>
                  </div>
                </div>

                {/* Image Gallery */}
                {selectedProject.images.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProject.images.map((image, idx) => (
                        <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <FooterSection />
    </div>
  );
};

export default Portfolio;

