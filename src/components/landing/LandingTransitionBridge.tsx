import SectionDivider from "./SectionDivider";

const LandingTransitionBridge = () => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Section Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-sm md:text-base font-oswald font-semibold text-primary uppercase tracking-wide">
                  The College-Ready Player Evaluation
                </span>
              </div>
            </div>

            {/* Opening Hook */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl text-foreground font-bebas font-black uppercase leading-tight">
                Every athlete has a limit they can't break through on their own — the key is knowing what's causing it.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
                Most plateaus aren't effort problems. They're hidden flaws no one has identified yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTransitionBridge;
