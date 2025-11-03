import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:infomadhur786@gmail.com", label: "Email" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer id="contact" className="relative py-16 overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Let's Create Together
          </h2>
          
          <p className="text-muted-foreground mb-8">
            For enquiries and collaborations
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mithilaj Entertainments. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
