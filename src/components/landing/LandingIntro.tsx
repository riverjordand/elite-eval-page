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
          <div className="relative h-[50vh] xl:h-[55vh] overflow-hidden">
            <img 
              src={welcomeImage} 
              alt="LPA athlete at bat"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            
            {/* Overlaid content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-fluid-container-px">
                <div className="max-w-2xl">
                  <h2 className="text-fluid-4xl font-bebas font-black uppercase mb-fluid-sm leading-[0.95]">
                    Welcome to<br />
                    <span className="text-primary glow-primary">Legendary Prep</span><br />
                    Academy
                  </h2>
                  
                  <div className="space-y-fluid-xs">
                    <p className="text-fluid-lg text-foreground/80 font-oswald leading-relaxed">
                      LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
                    </p>
                    
                    <p className="text-fluid-lg text-foreground/80 font-oswald leading-relaxed">
                      Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
                    </p>

                    <div className="pt-fluid-xs border-t border-border/30">
                      <p className="text-fluid-xl font-oswald font-semibold text-foreground">
                        LPA is not a casual training facility.
                      </p>
                      <p className="text-fluid-xl font-oswald font-semibold text-primary italic mt-1">
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
        <div className="lg:hidden py-fluid-section">
          <div className="px-fluid-container-px">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-3xl font-bebas font-black uppercase text-center mb-fluid-md leading-tight">
                Welcome to Legendary Prep Academy
              </h2>

              <div className="rounded-xl overflow-hidden border-2 border-border mb-fluid-md">
                <img 
                  src={welcomeImage} 
                  alt="LPA athlete at bat"
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="space-y-fluid-sm text-center">
                <p className="text-fluid-base text-muted-foreground font-oswald leading-relaxed">
                  LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
                </p>
                
                <p className="text-fluid-base text-muted-foreground font-oswald leading-relaxed">
                  Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
                </p>

                <div className="space-y-3 pt-fluid-sm">
                  <p className="text-fluid-xl font-oswald font-semibold text-foreground">
                    LPA is not a casual training facility.
                  </p>
                  <p className="text-fluid-xl font-oswald font-semibold text-foreground italic">
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
