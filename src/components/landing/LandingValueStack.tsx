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
  preview: string;
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
      preview: "Find out your athlete's real velocity ceiling and college-ready numbers.",
      description: "Find out your athlete's real velocity ceiling — and exactly what number they need to reach to be considered college-ready. No more guessing where they stand.",
      value: 75
    },
    {
      title: "Complete Mechanics Analysis",
      preview: "Discover the mechanical flaw costing them power and velocity.",
      description: "Discover the mechanical flaw that's secretly costing them power, consistency, or velocity — and the specific change that will immediately unlock performance.",
      value: 100
    },
    {
      title: "Strength & Mobility Assessment",
      preview: "Identify the physical weakness limiting speed or power.",
      description: "Identify the physical weakness (ankle, hip, core, shoulder) limiting speed or power. You'll finally know whether the issue is strength, mobility, or mechanics.",
      value: 50
    },
    {
      title: "Coach-Led Development Plan",
      preview: "Get a clear step-by-step plan from a D1/pro coach.",
      description: "A D1/pro coach maps out a clear step-by-step plan so your athlete knows exactly what to work on this month, next month, and in-season — removing all uncertainty.",
      value: 75
    },
    {
      title: "Personalized 6–12 Month Roadmap",
      preview: "Leave with a written plan with milestones and timelines.",
      description: "Leave with a written plan that tells you the milestones to hit, the order to train them in, and the timeline to reach \"college-ready\" standards.",
      value: 50
    },
    {
      title: "Full Facility Tour & Q&A",
      preview: "See the 16,000 sq ft facility where serious players train.",
      description: "See the 16,000 sq ft development space where serious players train — and get answers to anything about recruiting, development, or next-level expectations.",
      value: 50
    }
  ];

  const totalValue = includedItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4">
                What's Included in Your Free Evaluation
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-oswald max-w-3xl mx-auto">
                These are the exact evaluations D1 coaches use to diagnose what's holding a player back — and what will finally move them forward.
              </p>
            </div>

            {/* Items Grid - Mobile: Collapsible, Desktop: Full Cards */}
            <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
              {includedItems.map((item, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                  className="md:contents"
                >
                  {/* Mobile: Collapsible Card */}
                  <div className="md:hidden bg-card border-2 border-border rounded-xl overflow-hidden animate-fade-in">
                    <CollapsibleTrigger className="w-full p-4 text-left">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-bebas uppercase text-foreground leading-tight flex-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="inline-block px-2.5 py-0.5 bg-background border border-border rounded-lg text-foreground font-bebas text-sm">
                            ${item.value}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                              openItems.includes(index) ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground font-oswald leading-relaxed pr-8">
                        {item.preview}
                      </p>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground font-oswald leading-relaxed">
                        {item.description}
                      </p>
                    </CollapsibleContent>
                  </div>

                  {/* Desktop: Full Card (unchanged) */}
                  <div 
                    className="hidden md:block bg-card border-2 border-border rounded-xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 relative animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Value Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-background border border-border rounded-lg text-foreground font-bebas text-sm lg:text-base">
                        ${item.value} Value
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pr-20">
                      <h3 className="text-lg lg:text-xl font-bebas uppercase text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-muted-foreground font-oswald leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Collapsible>
              ))}
            </div>

            {/* Value Summary Box */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-card border-2 border-primary/50 rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-2xl text-muted-foreground font-oswald mb-2">
                  Total Value:
                </p>
                <p className="text-4xl md:text-6xl font-bebas font-black text-foreground mb-4">
                  ${totalValue}
                </p>
                <p className="text-2xl md:text-4xl font-bebas font-black text-primary uppercase">
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
