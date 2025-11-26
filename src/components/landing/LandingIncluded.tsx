import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-muted-foreground font-oswald max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas font-bold uppercase mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-oswald leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Statement */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 bg-primary/10 border-2 border-primary/30 rounded-lg">
              <p className="text-2xl font-bebas text-primary uppercase tracking-wide">
                {valueStatement}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-2xl px-16 py-10"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIncluded;
