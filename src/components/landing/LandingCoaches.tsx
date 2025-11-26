interface Coach {
  name: string;
  title: string;
  credentials: string[];
}

interface LandingCoachesProps {
  title: string;
  subtitle: string;
  coaches: Coach[];
}

const LandingCoaches = ({ title, subtitle, coaches }: LandingCoachesProps) => {
  return (
    <section className="py-12 md:py-24 bg-[#1a1a1a] relative" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)' }}>
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

          {/* Coaches Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl overflow-hidden text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Coach Photo Placeholder - Mobile optimized portrait */}
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="relative z-10 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                    <span className="text-3xl md:text-5xl font-bebas text-primary">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
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
