import SectionDivider from "./SectionDivider";

interface Coach {
  name: string;
  title: string;
  credentials: string[];
  image: string;
}

interface LandingCoachesProps {
  title: string;
  subtitle: string;
  coaches: Coach[];
}

const LandingCoaches = ({ title, subtitle, coaches }: LandingCoachesProps) => {
  return (
    <>
      <SectionDivider fromColor="#050505" toColor="#000000" />
      <section className="section-dark py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header - Dramatic */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
                Meet The Coaches Behind<br />
                <span className="text-primary glow-primary">The Transformations</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Coaching Stats Bar - Dramatic */}
            <div className="mb-16 md:mb-20 lg:mb-28 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl lg:rounded-3xl p-10 md:p-14 lg:p-20">
              <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-20 text-center">
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas font-black text-primary glow-primary mb-2 lg:mb-3">50+</div>
                  <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm lg:text-lg xl:text-xl tracking-wider leading-tight">years combined pro experience</p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas font-black text-primary glow-primary mb-2 lg:mb-3">5</div>
                  <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm lg:text-lg xl:text-xl tracking-wider leading-tight">Division 1 programs represented</p>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas font-black text-primary glow-primary mb-2 lg:mb-3">500+</div>
                  <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm lg:text-lg xl:text-xl tracking-wider leading-tight">athletes coached</p>
                </div>
              </div>
            </div>

            {/* Coaches - Mobile: Horizontal Scroll */}
            <div className="lg:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
              {coaches.map((coach, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border/50 rounded-xl overflow-hidden text-center w-[75vw] sm:w-[60vw] snap-center flex-shrink-0"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bebas font-bold uppercase mb-1 text-foreground">{coach.name}</h3>
                    <p className="text-primary font-bebas font-semibold mb-3 uppercase text-xs tracking-wider">{coach.title}</p>
                    <div className="text-left">
                      {coach.credentials.map((credential, i) => (
                        <p key={i} className="text-muted-foreground font-oswald text-xs leading-relaxed">{credential}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8">
              {coaches.map((coach, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-b from-card to-background border border-border/50 rounded-2xl overflow-hidden text-center hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  <div className="p-5 xl:p-6">
                    <h3 className="text-xl xl:text-2xl font-bebas font-bold uppercase mb-1 text-foreground">{coach.name}</h3>
                    <p className="text-primary font-bebas font-semibold mb-4 uppercase text-sm tracking-wider">{coach.title}</p>
                    <div className="text-left">
                      {coach.credentials.map((credential, i) => (
                        <p key={i} className="text-muted-foreground font-oswald text-sm leading-relaxed">{credential}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-16 lg:mt-24 text-center">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald max-w-5xl mx-auto leading-relaxed">
                These are the coaches who will evaluate your athlete, identify their weaknesses, and map out the exact development plan they need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingCoaches;
