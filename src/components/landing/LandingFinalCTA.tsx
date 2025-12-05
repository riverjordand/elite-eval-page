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
      <section className="py-12 md:py-16 lg:py-20 bg-[#1a1a1a] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 leading-tight px-4">
              {title}
            </h2>

            {/* Subheadline */}
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-oswald mb-6 md:mb-8 px-4">
              Unlock professional-grade clarity — no cost, no obligation.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-2xl px-8 py-6 md:px-12 md:py-7 mb-5 md:mb-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in w-full sm:w-auto"
              onClick={onCtaClick}
            >
              {ctaText} <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>

            {/* Final Trust Statement */}
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground font-oswald italic px-4">
              Join hundreds of Arizona families who've used this evaluation to accelerate their athlete's development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFinalCTA;
