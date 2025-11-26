import SectionDivider from "./SectionDivider";

const LandingIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-6 md:mb-10 px-4">
              Welcome to Legendary Prep Academy
            </h2>
          </div>

          {/* Two Column Layout - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald leading-relaxed">
                LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald leading-relaxed">
                Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
              </p>

              {/* Closing Statements */}
              <div className="space-y-2 md:space-y-3 pt-4">
                <p className="text-base sm:text-lg md:text-xl font-oswald font-semibold text-foreground">
                  LPA is not a casual training facility.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-oswald font-semibold text-foreground italic">
                  It's where athletes come to commit, develop, and excel.
                </p>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-card border-2 border-border rounded-xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground font-oswald text-sm">Image Placement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingIntro;
