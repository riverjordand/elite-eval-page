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
    <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          </div>

          {/* Coaches Horizontal Scroll (Mobile) / Grid (Desktop) */}
          <div className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-3 gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl overflow-hidden text-center hover:border-primary/50 transition-all duration-300 animate-fade-in w-[85vw] sm:w-[70vw] md:w-auto snap-center flex-shrink-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Coach Photo */}
                <div className="w-full aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Coach Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bebas font-bold uppercase mb-1 md:mb-2 text-foreground">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-oswald font-semibold mb-4 md:mb-6 uppercase text-xs md:text-sm tracking-wide">
                    {coach.title}
                  </p>

                  {/* Credentials */}
                  <ul className="space-y-1.5 md:space-y-2 text-left">
                    {coach.credentials.map((credential, credIndex) => (
                      <li key={credIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground font-oswald text-xs md:text-sm leading-relaxed">
                          {credential}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCoaches;
