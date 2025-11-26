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
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4 text-white">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          </div>

          {/* Coaching Stats Bar */}
          <div className="mb-8 md:mb-16 bg-card border-2 border-primary/30 rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">50+</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">Years Pro Experience</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">5</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">D1 Programs Represented</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">500+</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">Athletes Coached</p>
              </div>
            </div>
          </div>

          {/* Coaches - Mobile: Horizontal Scroll / Desktop: All Fit in One Row */}
          <div className="flex overflow-x-auto md:overflow-x-visible gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden text-center hover:border-primary/50 transition-all duration-300 animate-fade-in w-[75vw] sm:w-[60vw] md:w-[calc((100%-4*1.5rem)/5)] md:min-w-[320px] snap-center flex-shrink-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Coach Photo */}
                <div className="w-full aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Coach Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bebas font-bold uppercase mb-1 md:mb-2 text-white">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-bebas font-semibold mb-4 md:mb-6 uppercase text-xs md:text-sm tracking-wider">
                    {coach.title}
                  </p>

                  {/* Credentials - Paragraph Format */}
                  <div className="text-left">
                    {coach.credentials.map((credential, credIndex) => (
                      <p key={credIndex} className="text-muted-foreground font-oswald text-xs md:text-sm leading-relaxed">
                        {credential}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingCoaches;
