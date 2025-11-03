const PhilosophySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8">
            "We make events and films with one rule: <span className="text-gradient font-bold">craft first.</span> From concept to curtain, every detail matters."
          </blockquote>
          <div className="h-px w-32 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
