import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface LandingHeroNewProps {
  onCtaClick?: () => void;
}

const LandingHeroNew = ({ onCtaClick }: LandingHeroNewProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-training.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <img 
          src={lpaBolt} 
          alt="LPA" 
          className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 drop-shadow-2xl"
        />

        {/* Headline */}
        <h1 className="font-bebas font-black uppercase leading-[0.9] tracking-tight mb-4">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
            Arizona's Premier
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Baseball Academy
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-oswald mb-8 max-w-2xl mx-auto">
          Where serious players build velocity, sharpen fundamentals, and become college-ready.
        </p>

        {/* CTA */}
        <Button 
          size="lg" 
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg md:text-xl px-8 py-5 h-auto"
          onClick={onCtaClick}
        >
          Book Free Evaluation
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default LandingHeroNew;
