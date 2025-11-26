import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface LandingHeroProps {
  onCtaClick?: () => void;
}

const LandingHero = ({ 
  onCtaClick
}: LandingHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <img 
              src={lpaBolt} 
              alt="Legendary Prep Academy" 
              className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 leading-tight px-2">
            Developing Elite Student-Athletes for the Next Level
          </h1>

          {/* Sub Headline */}
          <p className="text-base sm:text-lg md:text-2xl text-foreground font-oswald mb-8 md:mb-10 max-w-3xl mx-auto px-2 leading-relaxed">
            Where serious baseball players come to build velocity, sharpen fundamentals, and become college-ready.
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center mb-6 md:mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-2xl px-8 py-5 md:px-12 md:py-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              onClick={onCtaClick}
            >
              Book My Free Evaluation <ArrowRight className="ml-2 w-4 h-4 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Bottom Tagline */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-oswald italic px-4">
            Train in a world-class environment built for serious athletes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
