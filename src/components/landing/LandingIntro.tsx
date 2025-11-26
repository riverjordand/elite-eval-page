import SectionDivider from "./SectionDivider";

const LandingIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-6 md:mb-10 px-4">
              Welcome to Legendary Prep Academy
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald leading-relaxed text-center px-2">
              LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
            </p>
            
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald leading-relaxed text-center px-2">
              Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
            </p>
          </div>

          {/* Closing Statements */}
          <div className="text-center space-y-2 md:space-y-3">
            <p className="text-base sm:text-lg md:text-2xl font-oswald font-semibold text-foreground">
              LPA is not a casual training facility.
            </p>
            <p className="text-base sm:text-lg md:text-2xl font-oswald font-semibold text-foreground italic">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingIntro;
