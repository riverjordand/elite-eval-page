import SectionDivider from "./SectionDivider";

const LandingProblemAgitation = () => {
  const problems = [
    {
      emoji: "❗",
      title: "GUESSING AT DEVELOPMENT NEEDS",
      description: "You don't know which flaws matter — so you fix the wrong things and lose months of progress."
    },
    {
      emoji: "⏱",
      title: "WASTING TIME ON THE WRONG PRIORITIES",
      description: "Hard work won't fix the wrong issue. Without assessment, effort turns into frustration instead of results."
    },
    {
      emoji: "📉",
      title: "VELOCITY & PERFORMANCE PLATEAUS",
      description: "Your athlete has hit a wall — but you can't see the mechanical flaw or physical limitation causing it."
    },
    {
      emoji: "🏁",
      title: "FALLING BEHIND THE COMPETITION",
      description: "Other athletes are training with documented metrics and proven plans. Without clarity, your athlete gets overlooked."
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
                THE COST OF NOT KNOWING
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-oswald max-w-3xl mx-auto">
                Every season without clarity is a season lost.<br />
                Here's what actually happens when athletes train without a professional evaluation:
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {problems.map((problem, index) => {
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-5 md:p-7 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl flex-shrink-0">{problem.emoji}</span>
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
