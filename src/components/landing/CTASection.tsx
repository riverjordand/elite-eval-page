import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface CTASectionProps {
  onCtaClick?: () => void;
}

const includes = [
  "Velocity & metrics testing",
  "Video mechanics analysis",
  "Strength assessment",
  "Development plan",
  "Coach recommendations",
  "Facility tour",
];

const CTASection = ({ onCtaClick }: CTASectionProps) => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Desktop: Two column layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-primary text-primary-foreground font-bebas text-sm lg:text-base px-5 lg:px-6 py-2 mb-6 lg:mb-8 uppercase tracking-[0.2em]">
              Free Evaluation
            </div>
            
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-[0.9] mb-5 lg:mb-6">
              Ready To See Where
              <span className="block text-primary" style={{ textShadow: '0 0 60px hsl(271 81% 56% / 0.4)' }}>
                You Stand?
              </span>
            </h2>
            
            <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
              Get a complete athletic evaluation and personalized development plan — completely free.
            </p>
            
            <Button 
              size="lg"
              onClick={onCtaClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-lg md:text-xl lg:text-2xl xl:text-3xl px-8 lg:px-12 xl:px-14 py-5 lg:py-7 xl:py-8 h-auto"
              style={{ boxShadow: '0 0 50px hsl(271 81% 56% / 0.4)' }}
            >
              Book My Free Evaluation
              <ArrowRight className="ml-3 w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="font-oswald text-sm lg:text-base text-muted-foreground mt-5 lg:mt-6">
              No commitment required
            </p>
          </div>
          
          {/* Right - What's included */}
          <div className="flex-1 max-w-lg mx-auto lg:mx-0">
            <h3 className="font-bebas text-xl lg:text-2xl xl:text-3xl text-foreground uppercase mb-6 lg:mb-8 text-center lg:text-left">
              What's Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3 lg:gap-4 bg-background/50 backdrop-blur border border-border/30 px-4 lg:px-5 py-3 lg:py-4">
                  <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                  <span className="font-oswald text-sm lg:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
