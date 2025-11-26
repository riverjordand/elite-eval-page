import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDivider from "./SectionDivider";

interface LandingOutcomesProps {
  title: string;
  subtitle: string;
  outcomes: string[];
  ctaText: string;
  onCtaClick?: () => void;
}

const LandingOutcomes = ({ 
  title, 
  subtitle, 
  outcomes, 
  ctaText, 
  onCtaClick 
}: LandingOutcomesProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-primary/20 border-2 border-primary/40 rounded-full mb-4 md:mb-6">
                <span className="text-primary font-bebas uppercase tracking-wider text-sm md:text-base font-bold">
                  {subtitle}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-6 md:mb-10 px-4">
                {title}
              </h2>
            </div>

            {/* Outcomes Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base md:text-xl font-oswald text-foreground leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg md:text-2xl px-10 py-8 md:px-16 md:py-10 shadow-2xl hover:shadow-primary/50 transition-all duration-300 w-full sm:w-auto"
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingOutcomes;
