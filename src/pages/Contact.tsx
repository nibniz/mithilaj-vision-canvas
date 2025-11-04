import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FooterSection from "@/components/FooterSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      email: "",
      phone: "",
      description: "",
    });
    // You can add toast notification here
    alert("Thank you for your message! We'll get back to you soon.");
  };

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
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/gallery" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/portfolio" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-sm text-foreground font-semibold transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        {/* Page Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-light">
                Let's create something extraordinary together. Reach out and start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-10 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-light text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-foreground placeholder:text-foreground/40 focus-visible:border-white/30"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-light text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-foreground placeholder:text-foreground/40 focus-visible:border-white/30"
                  />
                </div>

                {/* Description/Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-light text-foreground">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your project, event, or inquiry..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="bg-black/50 border-white/10 text-foreground placeholder:text-foreground/40 focus-visible:border-white/30 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 px-10 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;

