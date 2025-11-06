import { Link } from "react-router-dom";
import FooterSection from "@/components/FooterSection";

const Gallery = () => {
  // Gallery images with variety of entertainment/production themes
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=800&fit=crop&q=80", alt: "Live TV Production" },
    { id: 2, src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=800&fit=crop&q=80", alt: "Award Show Stage" },
    { id: 3, src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=800&fit=crop&q=80", alt: "Film Set" },
    { id: 4, src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbaf53?w=800&h=800&fit=crop&q=80", alt: "Concert Stage" },
    { id: 5, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop&q=80", alt: "TV Studio" },
    { id: 6, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop&q=80", alt: "Music Production" },
    { id: 7, src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=800&fit=crop&q=80", alt: "Cinema" },
    { id: 8, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80", alt: "Director" },
    { id: 9, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=800&fit=crop&q=80", alt: "Event Production" },
    { id: 10, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop&q=80", alt: "Festival Stage" },
    { id: 11, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop&q=80", alt: "Broadcast Studio" },
    { id: 12, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop&q=80", alt: "Production Set" },
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
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/gallery" className="text-sm text-foreground font-semibold transition-colors">Gallery</Link>
            <Link to="/portfolio" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        {/* Page Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Gallery
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-light">
                A visual journey through our productions, events, and creative work
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="relative py-10 overflow-hidden">
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default Gallery;

