import { Link } from "react-router-dom";
import { useState } from "react";
import RippleButton from "@/components/RippleButton";
import AnimatedInput from "@/components/AnimatedInput";
import { Textarea } from "@/components/ui/textarea";
import AnimationWrapper from "@/components/AnimationWrapper";
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
              <AnimationWrapper direction="up" delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Email Field */}
                  <AnimationWrapper direction="up" delay={0.3}>
                    <AnimatedInput
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </AnimationWrapper>

                  {/* Phone Number Field */}
                  <AnimationWrapper direction="up" delay={0.4}>
                    <AnimatedInput
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </AnimationWrapper>

                  {/* Description/Message Field */}
                  <AnimationWrapper direction="up" delay={0.5}>
                    <div className="relative">
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Tell us about your project, event, or inquiry..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full px-4 pt-6 pb-2 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/40 focus-visible:border-white/50 focus-visible:outline-none resize-none transition-colors duration-300"
                      />
                    </div>
                  </AnimationWrapper>

                  {/* Submit Button */}
                  <AnimationWrapper direction="up" delay={0.6}>
                    <div className="pt-4">
                      <RippleButton
                        type="submit"
                        size="lg"
                        className="w-full"
                      >
                        Send Message
                      </RippleButton>
                    </div>
                  </AnimationWrapper>
                </form>
              </AnimationWrapper>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;

