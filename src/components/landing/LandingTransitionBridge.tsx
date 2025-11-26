import SectionDivider from "./SectionDivider";

const LandingTransitionBridge = () => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-oswald font-semibold mb-6 md:mb-8 leading-relaxed">
              Every athlete has a limit they can't break through on their own — the key is knowing what's causing it.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald leading-relaxed">
              Most parents can see the potential… but not the mechanical flaw, mobility issue, timing problem, or strength gap that's slowing progress. That's why the free evaluation exists.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTransitionBridge;
