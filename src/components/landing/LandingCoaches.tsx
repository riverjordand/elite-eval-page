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
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 px-4 text-white leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-oswald max-w-3xl mx-auto px-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Coaching Stats Bar */}
          <div className="mb-12 md:mb-20 bg-card border-2 border-primary/30 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-3 gap-6 md:gap-10 text-center">
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">50+</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg leading-tight">years combined pro experience</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">5</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg leading-tight">Division 1 programs represented</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">500+</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg leading-tight">athletes coached</p>
              </div>
            </div>
          </div>

          {/* Coaches - Mobile: Horizontal Scroll */}
          <div className="lg:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden text-center hover:border-primary/50 transition-all duration-300 animate-fade-in w-[75vw] sm:w-[60vw] md:w-[45vw] snap-center flex-shrink-0"
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
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bebas font-bold uppercase mb-1 text-foreground">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-bebas font-semibold mb-3 md:mb-4 uppercase text-xs md:text-sm tracking-wider">
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

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-5 xl:gap-6">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
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
                <div className="p-4 xl:p-5">
                  <h3 className="text-xl xl:text-2xl font-bebas font-bold uppercase mb-1 text-foreground">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-bebas font-semibold mb-3 xl:mb-4 uppercase text-xs xl:text-sm tracking-wider">
                    {coach.title}
                  </p>

                  {/* Credentials - Paragraph Format */}
                  <div className="text-left">
                    {coach.credentials.map((credential, credIndex) => (
                      <p key={credIndex} className="text-muted-foreground font-oswald text-xs xl:text-sm leading-relaxed">
                        {credential}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald max-w-4xl mx-auto leading-relaxed px-4">
              These are the coaches who will evaluate your athlete, identify their weaknesses, and map out the exact development plan they need. Your athlete starts working with this team on day one — beginning with the free evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingCoaches;
