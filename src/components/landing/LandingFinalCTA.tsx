import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

interface LandingFinalCTAProps {
  title: string;
  urgency: string;
  ctaText: string;
  spotsLeft?: number;
  guaranteeText?: string;
}

const LandingFinalCTA = ({ 
  title, 
  urgency, 
  ctaText, 
  spotsLeft = 10,
  guaranteeText = "No credit card required • No obligation • 100% Free"
}: LandingFinalCTAProps) => {
  return (
    <section className="py-32 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/10 border-2 border-destructive/30 rounded-full mb-8 animate-pulse">
            <Clock className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-bebas uppercase tracking-wider text-lg font-bold">
              {urgency} • {spotsLeft} Spots Remaining
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bebas font-black uppercase mb-8 leading-tight">
            {title}
          </h2>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-3xl px-20 py-12 mb-8 shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in"
          >
            {ctaText} <ArrowRight className="ml-3 w-8 h-8" />
          </Button>

          {/* Guarantee */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground font-oswald">
            {guaranteeText.split('•').map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-border">•</span>}
                <span>{text.trim()}</span>
              </div>
            ))}
          </div>

          {/* Final Trust Statement */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground font-oswald italic">
              Join hundreds of Arizona families who've used LPA to get their athletes to the next level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFinalCTA;
