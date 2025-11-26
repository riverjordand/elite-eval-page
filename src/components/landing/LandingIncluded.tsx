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
  onCtaClick?: () => void;
}

const LandingIncluded = ({ 
  title, 
  subtitle,
  items, 
  ctaText,
  valueStatement = "Normally $300+ Value - Yours Free",
  onCtaClick
}: LandingIncludedProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
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

          {/* Items Grid - 3x2 Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative"
              >
                {/* Value Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-background border border-border rounded-lg text-foreground font-bebas text-sm md:text-base">
                    ${item.value} Value
                  </span>
                </div>

                {/* Content */}
                <div className="pr-20">
                  <h3 className="text-lg md:text-xl font-bebas uppercase text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-oswald leading-relaxed">
                    {item.bullets[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value Summary Box */}
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <div className="bg-card border-2 border-primary/50 rounded-xl p-6 md:p-8">
              <p className="text-lg md:text-2xl text-muted-foreground font-oswald mb-2">
                Total Value:
              </p>
              <p className="text-4xl md:text-6xl font-bebas font-black text-foreground mb-4">
                ${items.reduce((sum, item) => sum + item.value, 0)}
              </p>
              <p className="text-2xl md:text-4xl font-bebas font-black text-primary uppercase">
                {valueStatement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingIncluded;
