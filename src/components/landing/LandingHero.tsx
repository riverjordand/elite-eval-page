import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LandingHeroProps {
  badge?: string;
  mainHeadline: string;
  offerHeadline: string;
  description: string;
  ctaPrimary: string;
  spotsLeft?: number;
}

const LandingHero = ({ 
  badge = "Limited Availability",
  mainHeadline,
  offerHeadline,
  description,
  ctaPrimary,
  spotsLeft = 10
}: LandingHeroProps) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-6 animate-fade-in">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bebas uppercase tracking-wider text-xs md:text-sm">
              {badge} • Only {spotsLeft} Spots Left
            </span>
          </div>

          {/* Main Headline - About LPA */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bebas font-black uppercase mb-2 md:mb-3 leading-[0.95] px-2">
            {mainHeadline}
          </h1>

          {/* Offer Headline - About the Evaluation */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bebas uppercase mb-4 md:mb-6 text-primary leading-tight px-2">
            {offerHeadline}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-10 font-oswald max-w-2xl mx-auto px-2 leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-2xl px-8 py-6 md:px-16 md:py-10 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in w-full sm:w-auto"
          >
            {ctaPrimary} <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50">
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 font-oswald uppercase tracking-wide">
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
