const AboutBrandSection = () => {
  return (
    <section className="relative pt-0 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/5"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            About the Brand
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-foreground/90 mb-10 text-center">
            Built on experience. Driven by creativity.
          </p>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-base md:text-lg">
              Mithilaj Entertainments is a creative production company that blends artistry and precision to deliver powerful live and visual experiences.
            </p>

            <p className="text-base md:text-lg">
              Founded by <span className="text-foreground font-semibold">Mithilaj Abdul</span>, an experienced director and producer, the brand stands for authenticity, quality, and storytelling that connects with people.
            </p>

            <p className="text-base md:text-lg">
              From grand concerts and award nights to film productions and digital content, every project reflects the same commitment — to create work that lasts beyond the spotlight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrandSection;

