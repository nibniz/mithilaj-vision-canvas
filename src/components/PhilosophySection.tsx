const PhilosophySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-muted/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center animate-fade-in">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8">
            "We make events and films with one rule: <span className="text-foreground font-bold">craft first.</span> From concept to curtain, every detail matters."
          </blockquote>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
