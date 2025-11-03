import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section 
      id="contact-section"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="section-title text-gradient mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and bring your vision to life
          </p>
        </div>

        {/* Contact Form Card */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="relative p-8 md:p-12 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 glow-primary">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className={`mt-16 flex justify-center gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
          >
            <Mail className="mr-2 w-5 h-5 group-hover:animate-glow-pulse" />
            <span>Email</span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 group"
          >
            <Instagram className="mr-2 w-5 h-5 group-hover:animate-glow-pulse" />
            <span>Follow on Instagram</span>
          </Button>
        </div>

        {/* Footer */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            <span className="text-sm text-muted-foreground">
              © 2025 Mithilaj Abdul. Crafted with Vision & Light.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
