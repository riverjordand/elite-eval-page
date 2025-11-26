import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionDivider from "./SectionDivider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface IncludedItem {
  title: string;
  description: string;
  value: number;
}

interface LandingValueStackProps {
  onCtaClick?: () => void;
}

const LandingValueStack = ({ onCtaClick }: LandingValueStackProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const includedItems: IncludedItem[] = [
    {
      title: "Advanced Metrics Testing",
      description: "Find out your athlete's real velocity ceiling — and exactly what number they need to reach to be considered college-ready. No more guessing where they stand.",
      value: 75
    },
    {
      title: "Complete Mechanics Analysis",
      description: "Discover the mechanical flaw that's secretly costing them power, consistency, or velocity — and the specific change that will immediately unlock performance.",
      value: 100
    },
    {
      title: "Strength & Mobility Assessment",
      description: "Identify the physical weakness (ankle, hip, core, shoulder) limiting speed or power. You'll finally know whether the issue is strength, mobility, or mechanics.",
      value: 50
    },
    {
      title: "Coach-Led Development Plan",
      description: "A D1/pro coach maps out a clear step-by-step plan so your athlete knows exactly what to work on this month, next month, and in-season — removing all uncertainty.",
      value: 75
    },
    {
      title: "Personalized 6–12 Month Roadmap",
      description: "Leave with a written plan that tells you the milestones to hit, the order to train them in, and the timeline to reach \"college-ready\" standards.",
      value: 50
    },
    {
      title: "Full Facility Tour & Q&A",
      description: "See the 16,000 sq ft development space where serious players train — and get answers to anything about recruiting, development, or next-level expectations.",
      value: 50
    }
  ];

  const totalValue = includedItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-8 md:py-16 lg:py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas font-black uppercase mb-3 md:mb-4">
                What's Included in Your Free Evaluation
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground font-oswald max-w-3xl mx-auto leading-relaxed">
                These are the exact evaluations D1 coaches use to diagnose what's holding a player back — and what will finally move them forward.
              </p>
            </div>

            {/* Items Grid - Mobile: Collapsible, Desktop: Full Cards */}
            <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 mb-8 md:mb-10">
              {includedItems.map((item, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                  className="md:contents"
                >
                  {/* Mobile: Collapsible Card */}
                  <div className="md:hidden bg-card border-2 border-border rounded-2xl overflow-hidden animate-fade-in hover:border-primary/30 transition-all">
                    <CollapsibleTrigger className="w-full p-4 flex items-center justify-between gap-3 text-left">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bebas uppercase text-foreground leading-tight tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="inline-block px-3 py-1 bg-background border border-border rounded-lg text-foreground font-bebas text-base">
                          ${item.value}
                        </span>
                        <ChevronDown 
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-1">
                      <p className="text-xs text-muted-foreground font-oswald leading-relaxed">
                        {item.description}
                      </p>
                    </CollapsibleContent>
                  </div>

                  {/* Desktop: Full Card (unchanged) */}
                  <div 
                    className="hidden md:block bg-card border-2 border-border rounded-2xl p-4 lg:p-6 hover:border-primary/30 transition-all duration-300 relative animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Value Badge */}
                    <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                      <span className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 bg-background border border-border rounded-lg text-foreground font-bebas text-sm lg:text-base tracking-wide">
                        ${item.value} Value
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pr-20 lg:pr-24">
                      <h3 className="text-lg lg:text-xl font-bebas uppercase text-foreground mb-2 lg:mb-3 leading-tight tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground font-oswald leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Collapsible>
              ))}
            </div>

            {/* Value Summary Box */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-card border-2 border-primary/40 rounded-2xl p-6 md:p-8 lg:p-10">
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-oswald mb-2 tracking-wide">
                  Total Value:
                </p>
                <p className="text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-foreground mb-4 md:mb-6">
                  ${totalValue}
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bebas font-black text-primary uppercase tracking-wider">
                  Yours Free Today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingValueStack;
