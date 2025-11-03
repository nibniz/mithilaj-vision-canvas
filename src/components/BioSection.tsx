const BioSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-muted/5"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-6 glow-primary">
              <span className="text-4xl font-bold text-gradient">MA</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Mithilaj Abdul</h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Director, producer and creative head with extensive TV and broadcast experience, 
            a <span className="text-primary font-semibold">Guinness World Record holder</span> and film director 
            with a background across major Indian & Gulf media channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
