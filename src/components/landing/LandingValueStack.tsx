import { CheckCircle2, FileText, TrendingUp, Award, Target } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface Outcome {
  icon: string;
  title: string;
  description: string;
}

interface IncludedItem {
  title: string;
  description: string;
  value: number;
}

interface LandingValueStackProps {
  onCtaClick?: () => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return FileText;
    case 'TrendingUp':
      return TrendingUp;
    case 'Award':
      return Award;
    case 'Target':
      return Target;
    default:
      return CheckCircle2;
  }
};

const LandingValueStack = ({ onCtaClick }: LandingValueStackProps) => {
  const outcomes: Outcome[] = [
    {
      icon: "FileText",
      title: "Written Development Roadmap",
      description: "Exact steps, timelines, and priorities for the next 6–12 months."
    },
    {
      icon: "TrendingUp",
      title: "Baseline Metrics That Actually Matter",
      description: "Exit velocity, pitch velocity, movement patterns — real numbers college coaches care about."
    },
    {
      icon: "Award",
      title: "Expert Recommendations From D1/Pro Coaches",
      description: "Specific fixes and adjustments tailored to your athlete."
    },
    {
      icon: "Target",
      title: "Next Steps for Recruiting",
      description: "Showcase guidance, outreach strategy, and recruiting timeline."
    }
  ];

  const includedItems: IncludedItem[] = [
    {
      title: "Advanced Metrics Testing",
      description: "Find out your athlete's true potential and the fastest path to add velocity",
      value: 75
    },
    {
      title: "Complete Mechanics Analysis",
      description: "Discover the exact mechanical flaw holding back performance",
      value: 100
    },
    {
      title: "Strength & Mobility Assessment",
      description: "Identify the physical weakness limiting velocity and power",
      value: 50
    },
    {
      title: "Coach-Led Development Plan",
      description: "Get a coach with D1/Pro experience to map out your athlete's path",
      value: 75
    },
    {
      title: "Personalized 6–12 Month Roadmap",
      description: "Leave with a written plan your athlete can follow immediately",
      value: 50
    },
    {
      title: "Full Facility Tour & Q&A",
      description: "See the 16,000 sq ft facility where college-bound athletes train daily",
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
            {/* Outcomes Section Header */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black uppercase mb-3 md:mb-4">
                What You'll Walk Away With
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground font-oswald">
                Real clarity. Real direction. Real momentum.
              </p>
            </div>

            {/* Outcomes Grid - 2x2 Compact */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {outcomes.map((outcome, index) => {
                const Icon = getIcon(outcome.icon);
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-base md:text-xl font-bebas uppercase text-foreground mb-1">
                          {outcome.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground font-oswald leading-snug">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Text for Outcomes */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm md:text-base text-foreground font-oswald italic">
                You're walking away with the blueprint families wish they had years ago.
              </p>
            </div>

            {/* What's Included Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4">
                What's Included in Your Free Evaluation
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto">
                Everything your athlete needs to understand their current level and development path.
              </p>
            </div>

            {/* Items Grid - 3x2 Layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              {includedItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                      {item.description}
                    </p>
                  </div>
                </div>
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
