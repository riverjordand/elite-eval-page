import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface LandingFinalCTAProps {
  title: string;
  ctaText: string;
  guaranteeText?: string;
  onCtaClick?: () => void;
}

const LandingFinalCTA = ({ 
  title, 
  ctaText, 
  guaranteeText = "No credit card required. No obligation. 100% Free.",
  onCtaClick
}: LandingFinalCTAProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bebas font-black uppercase mb-6 md:mb-8 leading-tight px-4">
            {title}
          </h2>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-3xl px-10 py-8 md:px-20 md:py-12 mb-4 md:mb-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in w-full sm:w-auto"
            onClick={onCtaClick}
          >
            {ctaText} <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-8 md:h-8" />
          </Button>

          {/* Risk Reversal */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-xl text-muted-foreground font-oswald px-4">
              {guaranteeText}
            </p>
          </div>

          {/* Final Trust Statement */}
          <div className="pt-6 md:pt-8 border-t border-border/50">
            <p className="text-sm md:text-xl text-muted-foreground font-oswald italic px-4">
              Join hundreds of Arizona families who've used LPA to get their athletes to the next level
            </p>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default LandingFinalCTA;
