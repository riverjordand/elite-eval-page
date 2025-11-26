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
    <section className="py-16 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-destructive/10 border-2 border-destructive/30 rounded-full mb-6 md:mb-8 animate-pulse">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
            <span className="text-destructive font-bebas uppercase tracking-wider text-sm md:text-lg font-bold">
              {urgency} • {spotsLeft} Spots Left
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bebas font-black uppercase mb-6 md:mb-8 leading-tight px-4">
            {title}
          </h2>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-3xl px-10 py-8 md:px-20 md:py-12 mb-6 md:mb-8 shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in w-full sm:w-auto"
          >
            {ctaText} <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-8 md:h-8" />
          </Button>

          {/* Guarantee */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground font-oswald px-4">
            {guaranteeText.split('•').map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-border hidden sm:inline">•</span>}
                <span>{text.trim()}</span>
              </div>
            ))}
          </div>

          {/* Final Trust Statement */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50">
            <p className="text-sm md:text-base text-muted-foreground font-oswald italic px-4">
              Join hundreds of Arizona families who've used LPA to get their athletes to the next level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFinalCTA;
