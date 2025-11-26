import SectionDivider from "./SectionDivider";

interface IncludedItem {
  title: string;
  description: string;
  value: number;
}

interface LandingValueStackProps {
  onCtaClick?: () => void;
}

const LandingValueStack = ({ onCtaClick }: LandingValueStackProps) => {
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
