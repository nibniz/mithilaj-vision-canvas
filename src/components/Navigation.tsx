import { useSmoothScrollTo } from "@/hooks/use-smooth-scroll-to";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { scrollToSection } = useSmoothScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href.slice(1), 80);
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white border border-white/20 flex items-center justify-center shadow-lg">
          <span className="text-lg md:text-xl font-bold text-black">MA</span>
        </div>
        <div className="text-lg md:text-xl font-bold text-foreground">
          MITHILAJ ENTERTAINMENTS
        </div>
      </Link>
      <div className="hidden md:flex gap-8">
        <Link
          to="/about"
          className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          to="/gallery"
          className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
        >
          Gallery
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          to="/portfolio"
          className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
        >
          Portfolio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          to="/contact"
          className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

