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
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-32 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-5 md:mb-10 px-4 leading-[0.95]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald max-w-4xl mx-auto px-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Items - Single Column Mobile, Two Columns Desktop */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-16">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border-[3px] border-border rounded-lg p-6 md:p-10 shadow-lg hover:border-primary/60 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3 md:mb-5">
                      <h3 className="text-base md:text-2xl lg:text-3xl font-bebas font-bold uppercase text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-primary font-bebas text-base md:text-2xl lg:text-3xl whitespace-nowrap">
                        ${item.value}
                      </span>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-xs sm:text-sm md:text-xl lg:text-2xl text-muted-foreground font-oswald leading-relaxed md:leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value & Free Badge - Side by Side on Desktop */}
          <div className="max-w-6xl mx-auto mb-8 md:mb-12 flex flex-col md:flex-row gap-5 md:gap-8 items-stretch">
            {/* Total Value */}
            <div className="flex-1 p-8 md:p-12 bg-card border-[3px] border-border rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-between h-full gap-4">
                <span className="text-lg md:text-3xl lg:text-4xl font-bebas uppercase text-muted-foreground leading-tight">Total Value:</span>
                <span className="text-2xl md:text-5xl lg:text-6xl font-bebas text-foreground leading-none">${items.reduce((sum, item) => sum + item.value, 0)}</span>
              </div>
            </div>
            
            {/* Free Badge */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12 bg-card border-[3px] border-border rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bebas text-foreground uppercase tracking-wide leading-tight">
                Yours Free Today
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg md:text-2xl px-8 py-6 md:px-16 md:py-12 w-full sm:w-auto"
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
