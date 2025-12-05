import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface LandingHeroProps {
  onCtaClick?: () => void;
}

const LandingHero = ({ 
  onCtaClick
}: LandingHeroProps) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/hero-training.mp4" type="video/mp4" />
      </video>
      
      {/* Cinematic overlays */}
      <div className="absolute inset-0 cinematic-overlay" />
      <div className="absolute inset-0 cinematic-vignette" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-[1800px] mx-auto">
          {/* Logo with glow */}
          <div className="mb-8 lg:mb-12 animate-fade-in flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/20 scale-150" />
              <img 
                src={lpaBolt} 
                alt="Legendary Prep Academy" 
                className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main Headline - Dramatic sizing */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem] font-bebas font-black uppercase leading-[0.9] tracking-tight mb-6 lg:mb-10">
            <span className="block text-foreground drop-shadow-lg">Developing Elite</span>
            <span className="block text-primary glow-primary-intense">Student-Athletes</span>
            <span className="block text-foreground drop-shadow-lg">For The Next Level</span>
          </h1>

          {/* Sub Headline */}
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/90 font-oswald font-light mb-10 lg:mb-14 max-w-5xl xl:max-w-6xl mx-auto leading-relaxed tracking-wide">
            Where serious baseball players come to build velocity, sharpen fundamentals, and become college-ready.
          </p>

          {/* CTA - Larger, more dramatic */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl px-12 py-7 md:px-20 md:py-10 lg:px-24 lg:py-12 h-auto shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 border-glow-intense"
              onClick={onCtaClick}
            >
              Book My Free Evaluation 
              <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Bottom Tagline */}
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-oswald italic tracking-wider">
            Train in a world-class environment built for serious athletes.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10" />
      </button>
    </section>
  );
};

export default LandingHero;
