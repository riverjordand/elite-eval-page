import SectionDivider from "./SectionDivider";

const LandingTransitionBridge = () => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Opening Hook */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl text-foreground font-bebas font-black uppercase mb-6 md:mb-8 leading-tight">
                Every athlete has a limit they can't break through on their own — the key is knowing what's causing it.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
                Most plateaus aren't effort problems. They're hidden mechanical flaws, mobility restrictions, or strength gaps no one has identified yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTransitionBridge;
