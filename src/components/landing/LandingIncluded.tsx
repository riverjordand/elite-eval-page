import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDivider from "./SectionDivider";

interface IncludedItem {
  title: string;
  description: string;
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
      <SectionDivider />
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

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border-2 border-border rounded-lg p-4 md:p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bebas font-bold uppercase mb-1 md:mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-oswald leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Statement */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-primary/10 border-2 border-primary/30 rounded-lg">
              <p className="text-base sm:text-lg md:text-2xl font-bebas text-primary uppercase tracking-wide">
                {valueStatement}
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
