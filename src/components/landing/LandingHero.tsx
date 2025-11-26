import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface LandingHeroProps {
  badge?: string;
  mainHeadline: string;
  subHeadline: string;
  ctaPrimary: string;
  spotsLeft?: number;
}

const LandingHero = ({ 
  badge = "Limited Availability",
  mainHeadline,
  subHeadline,
  ctaPrimary,
  spotsLeft = 10
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

          {/* Main Headline - About LPA */}
          <h1 className="text-4xl sm:text-5xl md:text-9xl lg:text-[10rem] font-bebas font-black uppercase mb-6 md:mb-12 leading-[0.9] px-2">
            {mainHeadline}
          </h1>

          {/* Sub Headline */}
          <p className="text-base sm:text-xl md:text-4xl lg:text-5xl text-primary font-oswald font-semibold mb-8 md:mb-16 max-w-5xl mx-auto px-2 leading-tight uppercase">
            {subHeadline}
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-base sm:text-xl md:text-2xl px-8 py-5 md:px-16 md:py-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in w-auto"
          >
            {ctaPrimary} <ArrowRight className="ml-2 w-4 h-4 md:w-8 md:h-8" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 md:mt-16 pt-6 md:pt-12 border-t border-border/50">
            <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 font-oswald uppercase tracking-wide">
              Trusted By Parents Of Athletes At
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-8 text-foreground/70 font-oswald font-semibold text-xs md:text-sm px-4">
              <span>U of Arizona</span>
              <span className="hidden md:inline">•</span>
              <span>Arizona State</span>
              <span className="hidden md:inline">•</span>
              <span>GCU</span>
              <span className="hidden md:inline">•</span>
              <span>MLB Orgs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
