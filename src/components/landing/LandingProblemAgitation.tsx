import { AlertCircle, TrendingDown, Users, Clock } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface Problem {
  icon: string;
  title: string;
  description: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'AlertCircle':
      return AlertCircle;
    case 'TrendingDown':
      return TrendingDown;
    case 'Users':
      return Users;
    case 'Clock':
      return Clock;
    default:
      return AlertCircle;
  }
};

const LandingProblemAgitation = () => {
  const problems: Problem[] = [
    {
      icon: "AlertCircle",
      title: "Guessing at Development Needs",
      description: "Without professional assessment, you're guessing which skills to prioritize and which mechanical flaws to fix first."
    },
    {
      icon: "Clock",
      title: "Wasting Time on Wrong Priorities",
      description: "Training the wrong things means months of effort with minimal progress toward college-level performance."
    },
    {
      icon: "TrendingDown",
      title: "Velocity & Performance Plateaus",
      description: "Your athlete has hit a wall, but you can't identify the physical limitation or mechanical flaw holding them back."
    },
    {
      icon: "Users",
      title: "Falling Behind the Competition",
      description: "Elite programs recruit athletes with documented metrics, professional development plans, and proven progress."
    }
  ];

  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black uppercase mb-3 md:mb-4 text-foreground">
                The Cost of Not Knowing
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-oswald max-w-3xl mx-auto">
                Every season without clarity is a season lost. Here's what happens when parents and athletes train without professional assessment:
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {problems.map((problem, index) => {
                const Icon = getIcon(problem.icon);
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-5 md:p-7 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-base md:text-xl font-bebas uppercase text-foreground mb-1.5 md:mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground font-oswald leading-snug">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom emphasis */}
            <div className="text-center mt-8 md:mt-12">
              <p className="text-base md:text-lg text-foreground font-oswald font-semibold">
                This is why professional evaluation isn't optional — it's the starting point.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingProblemAgitation;
