import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LandingHeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  spotsLeft?: number;
}

const LandingHero = ({ 
  badge = "Limited Availability",
  headline, 
  subheadline, 
  ctaPrimary,
  spotsLeft = 10
}: LandingHeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bebas uppercase tracking-wider text-sm">
              {badge} • Only {spotsLeft} Spots Left This Week
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bebas font-black uppercase mb-6 leading-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-oswald max-w-3xl mx-auto">
            {subheadline}
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-2xl px-16 py-10 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
          >
            {ctaPrimary} <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4 font-oswald uppercase tracking-wide">
              Trusted By Parents Of Athletes At
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70 font-oswald font-semibold text-sm">
              <span>University of Arizona</span>
              <span>•</span>
              <span>Arizona State</span>
              <span>•</span>
              <span>Grand Canyon University</span>
              <span>•</span>
              <span>MLB Organizations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
