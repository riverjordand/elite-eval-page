import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

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
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-20 md:py-40 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge - Only show if spotsLeft > 0 */}
          {spotsLeft > 0 && (
            <div className="inline-flex items-center gap-2 md:gap-3 px-5 py-3 md:px-8 md:py-4 bg-destructive/10 border-2 border-destructive/30 rounded-full mb-8 md:mb-12 animate-pulse">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
              <span className="text-destructive font-bebas uppercase tracking-wider text-sm md:text-xl font-bold">
                {urgency} • {spotsLeft} Spots Left
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-9xl font-bebas font-black uppercase mb-8 md:mb-14 leading-[0.9] px-4">
            {title}
          </h2>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg sm:text-xl md:text-3xl px-10 py-8 md:px-20 md:py-14 mb-8 md:mb-12 shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in w-full sm:w-auto"
          >
            {ctaText} <ArrowRight className="ml-3 md:ml-4 w-6 h-6 md:w-10 md:h-10" />
          </Button>

          {/* Guarantee */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xs md:text-lg text-muted-foreground font-oswald px-4">
            {guaranteeText.split('•').map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-border hidden sm:inline">•</span>}
                <span>{text.trim()}</span>
              </div>
            ))}
          </div>

          {/* Final Trust Statement */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-border/50">
            <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground font-oswald italic px-4 leading-relaxed">
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
