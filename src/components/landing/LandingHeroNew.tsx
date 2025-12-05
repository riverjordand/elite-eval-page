import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface LandingHeroNewProps {
  onCtaClick?: () => void;
}

const LandingHeroNew = ({ onCtaClick }: LandingHeroNewProps) => {
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
      
      {/* Dynamic overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/20 to-transparent skew-x-12 translate-x-1/4" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-4 md:mb-6 lg:mb-8">
          <img 
            src={lpaBolt} 
            alt="LPA" 
            className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mx-auto drop-shadow-2xl animate-fade-in"
          />
        </div>

        {/* Pre-headline */}
        <div className="inline-block bg-primary/90 text-primary-foreground font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 md:py-2 mb-3 md:mb-4 lg:mb-5 uppercase tracking-widest skew-x-[-3deg]">
          <span className="inline-block skew-x-[3deg]">Arizona's Premier Baseball Academy</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-bebas font-black uppercase leading-[0.85] tracking-tight mb-4 md:mb-6 lg:mb-8">
          <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground drop-shadow-lg">
            Developing Elite
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary drop-shadow-lg" style={{ textShadow: '0 0 80px hsl(var(--primary) / 0.5)' }}>
            Student-Athletes
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground drop-shadow-lg">
            For The Next Level
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-foreground/80 font-oswald mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
          Where serious players build velocity, sharpen fundamentals, and become college-ready.
        </p>

        {/* CTA */}
        <Button 
          size="lg" 
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base md:text-xl lg:text-2xl px-6 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 h-auto shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 skew-x-[-2deg]"
          onClick={onCtaClick}
        >
          <span className="inline-block skew-x-[2deg] flex items-center">
            Book My Free Evaluation
            <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </span>
        </Button>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6 md:w-10 md:h-10" />
      </button>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default LandingHeroNew;
