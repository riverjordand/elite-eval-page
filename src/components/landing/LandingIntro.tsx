import SectionDivider from "./SectionDivider";
import welcomeImage from "@/assets/welcome-athlete-batting.jpg";

const LandingIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#000000" toColor="#0a0a0a" />
      <section className="relative section-darker">
        {/* Desktop: Full-width cinematic layout */}
        <div className="hidden lg:block">
          {/* Full-width image with overlay */}
          <div className="relative h-[70vh] xl:h-[80vh] overflow-hidden">
            <img 
              src={welcomeImage} 
              alt="LPA athlete at bat"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            
            {/* Overlaid content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[1800px] mx-auto px-12 xl:px-20">
                <div className="max-w-3xl xl:max-w-4xl">
                  <h2 className="text-6xl xl:text-7xl 2xl:text-8xl font-bebas font-black uppercase mb-8 xl:mb-12 leading-[0.95]">
                    Welcome to<br />
                    <span className="text-primary glow-primary">Legendary Prep</span><br />
                    Academy
                  </h2>
                  
                  <div className="space-y-6 xl:space-y-8">
                    <p className="text-xl xl:text-2xl 2xl:text-3xl text-foreground/80 font-oswald leading-relaxed">
                      LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
                    </p>
                    
                    <p className="text-xl xl:text-2xl 2xl:text-3xl text-foreground/80 font-oswald leading-relaxed">
                      Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
                    </p>

                    <div className="pt-6 xl:pt-8 border-t border-border/30">
                      <p className="text-2xl xl:text-3xl 2xl:text-4xl font-oswald font-semibold text-foreground">
                        LPA is not a casual training facility.
                      </p>
                      <p className="text-2xl xl:text-3xl 2xl:text-4xl font-oswald font-semibold text-primary italic mt-2">
                        It's where athletes come to commit, develop, and excel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Stacked layout */}
        <div className="lg:hidden py-16 md:py-24">
          <div className="px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-black uppercase text-center mb-8 md:mb-12 leading-tight">
                Welcome to Legendary Prep Academy
              </h2>

              <div className="rounded-xl overflow-hidden border-2 border-border mb-8 md:mb-12">
                <img 
                  src={welcomeImage} 
                  alt="LPA athlete at bat"
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="space-y-6 text-center">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed">
                  LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed">
                  Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
                </p>

                <div className="space-y-3 pt-6">
                  <p className="text-lg sm:text-xl md:text-2xl font-oswald font-semibold text-foreground">
                    LPA is not a casual training facility.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-oswald font-semibold text-foreground italic">
                    It's where athletes come to commit, develop, and excel.
                  </p>
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
