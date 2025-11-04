const EssenceSection = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-right animate-fade-in overflow-x-auto" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-foreground whitespace-nowrap" dir="rtl" style={{ lineHeight: '2', paddingTop: '1rem', paddingBottom: '1rem' }}>
            <span>Experience-led</span> production. 
            <span> Television-grade</span> discipline. 
            <span> Cinematic</span> craft.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
