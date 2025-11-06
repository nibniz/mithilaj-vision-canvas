import { ArrowDown } from "lucide-react";
import RippleButton from "@/components/RippleButton";
import AnimatedText from "@/components/AnimatedText";
import SplitText from "@/components/SplitText";
import GradientText from "@/components/GradientText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ParallaxImage from "@/components/ParallaxImage";
import StickyNav from "@/components/StickyNav";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-20 bg-black overflow-x-hidden">
      {/* Pure Black Background with Stars */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Starry Background - More stars for density */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: Math.random() * 0.9 + 0.1,
            }}
          />
        ))}
        
        {/* Larger, brighter stars scattered */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bright-star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.5,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:py-8">
        <Navigation />
      </nav>

      {/* Sticky Navigation */}
      <StickyNav className="px-6 py-4">
        <Navigation />
      </StickyNav>

      {/* Hero Content - Centered Cinematic Layout with Portrait */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content (Centered on mobile, Left on desktop) */}
          <AnimationWrapper className="lg:col-span-7 text-center lg:text-left pt-8 lg:pt-0" delay={0.2}>
            {/* Company Name */}
            <GradientText
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight block"
              animate={true}
            >
              <SplitText by="word" delay={0.3} stagger={0.05}>
                Mithilaj Entertainments
              </SplitText>
            </GradientText>

            {/* Tagline - One line */}
            <div className="mb-6 md:mb-8 overflow-x-auto">
              <AnimatedText 
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap"
                delay={0.6}
                stagger={0.08}
              >
                Creating Moments. Crafting Stories.
              </AnimatedText>
            </div>

            {/* Description */}
            <AnimationWrapper delay={0.9} direction="fade">
              <div className="mb-10 md:mb-12 overflow-x-auto">
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed whitespace-nowrap">
                  A creative house led by <span className="text-foreground font-semibold">Mithilaj Abdul</span> — where stories meet performance.
                </p>
              </div>
            </AnimationWrapper>

            {/* CTA Buttons */}
            <AnimationWrapper delay={1.1} direction="up">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pb-4">
                <RippleButton 
                  size="lg"
                  variant="default"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start a Project
                </RippleButton>
                
                <motion.button 
                  onClick={() => window.location.href = '/portfolio'}
                  className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2 text-base border-b border-foreground/20 pb-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Our Work</span>
                  <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                </motion.button>
              </div>
            </AnimationWrapper>
          </AnimationWrapper>

          {/* Right Column - Dramatic Portrait */}
          <AnimationWrapper className="lg:col-span-5 relative hidden lg:flex justify-center items-center" delay={0.5} direction="right">
            <div className="relative w-full max-w-xs aspect-[3/4]">
              {/* Starry Background Layer */}
              <div className="absolute inset-0 bg-black rounded-2xl overflow-hidden">
                {/* Additional stars overlay */}
                {[...Array(30)].map((_, i) => (
                  <div
                    key={`star-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Portrait Image */}
              <ParallaxImage speed={0.3}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80" 
                    alt="Mithilaj Abdul - Director & Producer" 
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'contrast(1.1) brightness(0.9)',
                    }}
                  />
                
                {/* Red Light Overlay (Left side) */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 0, 100, 0.25) 0%, rgba(255, 0, 100, 0) 50%)',
                    mixBlendMode: 'screen',
                  }}
                />
                
                {/* Blue Light Overlay (Right side) */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(270deg, rgba(0, 150, 255, 0.25) 0%, rgba(0, 150, 255, 0) 50%)',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* Edge Glow Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1/2"
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 0, 100, 0.15) 0%, transparent 100%)',
                      filter: 'blur(20px)',
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2"
                    style={{
                      background: 'linear-gradient(270deg, rgba(0, 150, 255, 0.15) 0%, transparent 100%)',
                      filter: 'blur(20px)',
                    }}
                  />
                </div>

                {/* Subtle glow from upper left corner (nebula effect) */}
                <div 
                  className="absolute top-0 left-0 w-1/3 h-1/3 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 100, 50, 0.2) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 shadow-[0_0_30px_rgba(168,85,247,0.3)]" />
                </div>
              </ParallaxImage>

              {/* Floating particles around the portrait */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${4 + Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
