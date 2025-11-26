import SectionDivider from "./SectionDivider";

const LandingTransitionBridge = () => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-foreground font-oswald font-bold mb-8 md:mb-12 leading-tight">
              Every athlete has a limit they can't break through on their own — the key is knowing what's causing it.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
              Most parents can see the potential… but not the mechanical flaw, mobility issue, timing problem, or strength gap that's slowing progress. That's why the free evaluation exists.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTransitionBridge;
