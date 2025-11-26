import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDivider from "./SectionDivider";

interface IncludedItem {
  title: string;
  bullets: string[];
  value: number;
}

interface LandingIncludedProps {
  title: string;
  subtitle?: string;
  items: IncludedItem[];
  ctaText: string;
  valueStatement?: string;
}

const LandingIncluded = ({ 
  title, 
  subtitle,
  items, 
  ctaText,
  valueStatement = "Normally $300+ Value - Yours Free"
}: LandingIncludedProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto px-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* Items Stack - Full Width */}
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-5 mb-8 md:mb-12">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border-2 border-border rounded-lg p-5 md:p-7 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 md:w-4.5 md:h-4.5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                      <h3 className="text-base md:text-xl font-bebas font-bold uppercase text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-primary font-bebas text-base md:text-lg whitespace-nowrap">
                        ${item.value}
                      </span>
                    </div>
                    <ul className="space-y-1 md:space-y-1.5">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-xs sm:text-sm md:text-base text-muted-foreground font-oswald leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8 p-6 md:p-8 bg-card border-2 border-border rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg md:text-2xl font-bebas uppercase text-muted-foreground">Total Value:</span>
              <span className="text-2xl md:text-4xl font-bebas text-foreground">${items.reduce((sum, item) => sum + item.value, 0)}</span>
            </div>
          </div>

          {/* Value Statement */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block px-6 py-3 md:px-8 md:py-4 bg-card border-2 border-border rounded-lg">
              <p className="text-xl sm:text-2xl md:text-3xl font-bebas text-foreground uppercase tracking-wide">
                Yours Free Today
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg md:text-2xl px-8 py-6 md:px-16 md:py-10 w-full sm:w-auto"
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

export default LandingIncluded;
