import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import lpaBolt from "@/assets/lpa-badge-cactus.png";

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
          <div className="mb-6 lg:mb-8 animate-fade-in flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/20 scale-150" />
              <img 
                src={lpaBolt} 
                alt="Legendary Prep Academy" 
                className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main Headline - Scaled down for desktop */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas font-black uppercase leading-[0.9] tracking-tight mb-6 lg:mb-8">
            <span className="block text-foreground drop-shadow-lg">Developing Elite</span>
            <span className="block text-primary glow-primary-intense">Student-Athletes</span>
            <span className="block text-foreground drop-shadow-lg">For The Next Level</span>
          </h1>

          {/* Sub Headline */}
          <p className="text-center text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-foreground/90 font-oswald font-light mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Where serious baseball players come to build velocity, sharpen fundamentals, and become college-ready.
          </p>

          {/* CTA - Refined sizing */}
          <div className="flex justify-center mb-10 lg:mb-12">
            <Link to="/appointments">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-xl sm:text-2xl md:text-2xl lg:text-3xl px-10 py-6 md:px-14 md:py-7 lg:px-16 lg:py-8 h-auto shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 border-glow-intense"
              >
                Book My Free Evaluation 
                <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
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
