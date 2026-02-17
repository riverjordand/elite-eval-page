import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import lpaBolt from "@/assets/lpa-badge-cactus.png";

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
      
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 cinematic-vignette" />
      
      {/* Animated gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-fluid-container-px max-w-7xl mx-auto">
        {/* Logo with glow */}
        <div className="mb-fluid-md">
          <img 
            src={lpaBolt} 
            alt="LPA" 
            className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 mx-auto drop-shadow-2xl animate-fade-in"
            style={{ filter: 'drop-shadow(0 0 40px hsl(var(--primary) / 0.4))' }}
          />
        </div>

        {/* Pre-headline badge */}
        <div className="inline-block bg-primary/80 backdrop-blur-sm text-primary-foreground font-bebas text-fluid-sm px-fluid-md py-2 mb-fluid-sm uppercase tracking-[0.2em] border border-primary/50 rounded-sm">
          Arizona's Premier Baseball Academy
        </div>

        {/* Main Headline with glow effect */}
        <h1 className="font-bebas font-black uppercase leading-[0.85] tracking-tight mb-fluid-md">
          <span className="block text-fluid-5xl text-foreground drop-shadow-lg">
            Developing Elite
          </span>
          <span className="block text-fluid-hero text-primary glow-primary-intense">
            Student-Athletes
          </span>
          <span className="block text-fluid-4xl text-foreground drop-shadow-lg">
            For The Next Level
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-fluid-xl text-foreground/70 font-oswald mb-fluid-lg max-w-4xl mx-auto leading-relaxed">
          Where serious players build velocity, sharpen fundamentals, and become college-ready.
        </p>

        {/* CTA with intense glow */}
        <Link to="/appointments">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-fluid-2xl px-fluid-lg py-fluid-md h-auto shadow-2xl border-glow-intense transition-all duration-500 hover:scale-105"
          >
            <span className="flex items-center">
              Book My Free Evaluation
              <ArrowRight className="ml-3 w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </section>
  );
};

export default LandingHeroNew;
