import SectionDivider from "./SectionDivider";
import welcomeImage from "@/assets/welcome-athlete-batting.jpg";

const LandingIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas font-black uppercase px-4 leading-tight">
              Welcome to Legendary Prep Academy
            </h2>
          </div>

          {/* Two Column Layout - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 text-center md:text-left">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald leading-relaxed">
                LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald leading-relaxed">
                Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
              </p>

              {/* Closing Statements */}
              <div className="space-y-3 md:space-y-4 lg:space-y-5 pt-6 lg:pt-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-oswald font-semibold text-foreground">
                  LPA is not a casual training facility.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-oswald font-semibold text-foreground italic">
                  It's where athletes come to commit, develop, and excel.
                </p>
              </div>
            </div>

            {/* Right Column - Athlete Image */}
            <div className="rounded-xl overflow-hidden border-2 border-border">
              <img 
                src={welcomeImage} 
                alt="LPA athlete at bat"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingIntro;
