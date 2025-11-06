import { Link } from "react-router-dom";
import { Heart, Lightbulb, Target, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FooterSection from "@/components/FooterSection";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "Always stay true to the story."
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Find beauty in originality."
    },
    {
      icon: Sparkles,
      title: "Discipline",
      description: "Execute with precision and respect for craft."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work with people, not just for them."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Leave something meaningful behind with every project."
    }
  ];

  const services = [
    "Live Events Production",
    "Television & Broadcast",
    "Film Direction",
    "Creative Direction"
  ];

  return (
    <div className="relative bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 px-6 py-6 md:py-8 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white border border-white/20 flex items-center justify-center shadow-lg">
              <span className="text-lg md:text-xl font-bold text-black">MA</span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-foreground">
              MITHILAJ ENTERTAINMENTS
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/about" className="text-sm text-foreground font-semibold transition-colors">About</Link>
            <Link to="/gallery" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/portfolio" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        {/* Cover Image Section */}
        <section className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden mb-20">
          <div className="absolute inset-0 bg-black">
            {/* Cover Image - Replace placeholder with actual image */}
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=800&fit=crop&q=80"
              alt="Mithilaj Entertainments Cover"
              className="w-full h-full object-cover object-center grayscale opacity-80"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
          </div>
        </section>

        {/* Hero Section - Two Column Layout */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left Column - Large Heading */}
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  The Story of<br />
                  <span className="text-6xl md:text-7xl lg:text-8xl">Mithilaj Entertainments</span>
                </h1>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
                <p className="text-lg md:text-xl font-light">
                  Mithilaj Entertainments was founded with a simple purpose — to create experiences that move people.
                </p>
                <p className="text-lg md:text-xl font-light">
                  Built on the vision of <span className="text-foreground font-semibold">Mithilaj Abdul</span>, the brand brings together years of creative experience across television, live events, and film.
                </p>
                <p className="text-lg md:text-xl font-light">
                  It's not just an entertainment company — it's a space where ideas turn into emotions, and stories come alive through sound, light, and motion.
                </p>
              </div>
            </div>

            {/* Numbered Services Below Hero */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16 max-w-5xl mx-auto animate-fade-in">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">#{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-lg md:text-xl font-light text-foreground/90 leading-relaxed pt-1">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 - The Journey - Two Column Layout */}
        <section className="relative py-32 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              {/* Left Column - Heading */}
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  From Vision to Reality
                </h2>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
                <p className="text-base md:text-lg font-light">
                  The story of Mithilaj Entertainments begins with <span className="text-foreground font-semibold">Mithilaj Abdul</span>, a director and producer known for his creative discipline and cinematic eye.
                </p>
                <p className="text-base md:text-lg font-light">
                  Over the years, he has led some of India's most engaging live events, award shows, and broadcast productions — bringing together artistry and precision on every stage.
                </p>
                <p className="text-base md:text-lg font-light">
                  His work has spanned television networks, major cultural events, and film projects — combining storytelling with seamless execution.
                </p>
                <p className="text-base md:text-lg font-light">
                  As a <span className="text-foreground font-semibold">Guinness World Record holder</span> in live broadcast direction, Mithilaj's journey reflects dedication, craft, and constant evolution in the entertainment industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Brand - Two Column Layout */}
        <section className="relative py-32 overflow-hidden bg-white/5">
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              {/* Left Column - Heading */}
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  A Creative Space with Purpose
                </h2>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
                <p className="text-base md:text-lg font-light">
                  Mithilaj Entertainments stands at the intersection of creativity and production.
                </p>
                <p className="text-base md:text-lg font-light">
                  The brand specializes in live events, film direction, and broadcast content, handling everything from concept to completion.
                </p>
                <p className="text-base md:text-lg font-light">
                  Every project, whether it's a stage performance or a cinematic piece, is approached with the same commitment — to deliver impact, authenticity, and emotion.
                </p>
                <p className="text-base md:text-lg font-light">
                  This is not about scale alone. It's about meaning — creating work that connects with people, not just audiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Our Philosophy - Two Column Layout */}
        <section className="relative py-32 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              {/* Left Column - Heading */}
              <div className="animate-fade-in">
                <div className="mb-4">
                  <span className="text-sm md:text-base text-foreground/60 font-light uppercase tracking-wider">Behind the Designs</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                  Our Philosophy
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  Do it with Heart. Do it with Clarity. Do it Right.
                </p>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
                <p className="text-base md:text-lg font-light">
                  At Mithilaj Entertainments, we believe entertainment isn't only about what people see — it's about what they feel.
                </p>
                <p className="text-base md:text-lg font-light">
                  Every detail, every frame, every sound is carefully crafted to leave a lasting impression.
                </p>
                <div className="pt-6">
                  <p className="text-lg md:text-xl font-bold text-foreground mb-2">
                    Our philosophy is simple:
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Create experiences that matter. Tell stories that stay.
                  </p>
                </div>
                <div className="pt-8">
                  <p className="text-sm md:text-base text-foreground/70 font-light mb-4">
                    Let's Build Something Meaningful Together
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get in touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - What Drives Us - Grid Layout */}
        <section className="relative py-32 overflow-hidden bg-white/5">
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-7xl mx-auto animate-fade-in">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  What Drives Us
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-base font-light text-foreground/90 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - A Legacy in the Making - Two Column Layout */}
        <section className="relative py-32 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              {/* Left Column - Heading */}
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  A Legacy in the Making
                </h2>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 text-foreground/90 leading-relaxed animate-fade-in">
                <p className="text-base md:text-lg font-light">
                  Mithilaj Entertainments is more than a name — it's a reflection of a creative journey that continues to evolve.
                </p>
                <p className="text-base md:text-lg font-light">
                  With every project, the brand grows, explores, and redefines what entertainment can be.
                </p>
                <p className="text-base md:text-lg font-light">
                  Whether it's on stage, on screen, or behind the camera — the goal remains the same:
                </p>
                <p className="text-xl md:text-2xl font-bold text-foreground mt-6">
                  To inspire, connect, and create stories that last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="relative py-32 overflow-hidden bg-white/5">
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-relaxed mb-6">
                "Entertainment is not what we do — it's who we are."
              </blockquote>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                — Mithilaj Abdul
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default About;
