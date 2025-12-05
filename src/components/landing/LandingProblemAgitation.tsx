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
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-16 lg:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8 lg:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bebas font-black uppercase mb-2 md:mb-3 text-foreground">
                THE COST OF NOT KNOWING
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-oswald max-w-2xl mx-auto">
                Every season without clarity is a season lost.<br />
                Here's what actually happens when athletes train without a professional evaluation:
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
              {problems.map((problem, index) => {
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 md:p-5 lg:p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl md:text-2xl flex-shrink-0">{problem.emoji}</span>
                      <div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bebas uppercase text-foreground mb-1 md:mb-1.5">
                          {problem.title}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground font-oswald leading-snug">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom emphasis */}
            <div className="text-center mt-6 md:mt-8 lg:mt-10">
              <p className="text-sm md:text-base lg:text-lg text-foreground font-oswald font-semibold">
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
