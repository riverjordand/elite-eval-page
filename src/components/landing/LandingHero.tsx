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
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-10 lg:mb-12 animate-fade-in">
            <img 
              src={lpaBolt} 
              alt="Legendary Prep Academy" 
              className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 mx-auto object-contain"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase mb-6 md:mb-8 lg:mb-10 leading-[1.1] px-2">
            Developing Elite Student-Athletes for the Next Level
          </h1>

          {/* Sub Headline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground font-oswald mb-10 md:mb-12 lg:mb-14 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-2 leading-relaxed">
            Where serious baseball players come to build velocity, sharpen fundamentals, and become college-ready.
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center mb-8 md:mb-10 lg:mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl px-10 py-6 md:px-16 md:py-10 lg:px-20 lg:py-12 h-auto shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              onClick={onCtaClick}
            >
              Book My Free Evaluation <ArrowRight className="ml-3 w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </Button>
          </div>

          {/* Bottom Tagline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald italic px-4">
            Train in a world-class environment built for serious athletes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
