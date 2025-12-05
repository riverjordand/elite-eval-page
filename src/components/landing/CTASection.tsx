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
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[200px]" />
      
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary text-primary-foreground font-bebas text-sm md:text-base px-6 py-2 mb-8 uppercase tracking-widest">
            Free Evaluation
          </div>
          
          {/* Headline */}
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-8xl text-foreground uppercase leading-none mb-6">
            Ready To See Where
            <span className="block text-primary" style={{ textShadow: '0 0 60px hsl(271 81% 56% / 0.5)' }}>
              You Stand?
            </span>
          </h2>
          
          <p className="font-oswald text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get a complete athletic evaluation and personalized development plan — completely free.
          </p>
          
          {/* What's included */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-background/50 backdrop-blur-sm px-4 py-3 border border-border/50">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-oswald text-xs md:text-sm text-foreground text-left">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Button 
            size="lg"
            onClick={onCtaClick}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-xl md:text-2xl lg:text-3xl px-10 md:px-16 py-6 md:py-8 h-auto rounded-none"
            style={{ boxShadow: '0 0 60px hsl(271 81% 56% / 0.4)' }}
          >
            Book My Free Evaluation
            <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="font-oswald text-sm text-muted-foreground mt-6">
            No commitment required
          </p>
        </div>
      </div>
      
      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default CTASection;
