import SectionDivider from "./SectionDivider";

interface FacilityArea {
  title: string;
  description: string;
  specs: string[];
  image?: string;
}

interface LandingFacilityShowcaseProps {
  title: string;
  subtitle: string;
  areas: FacilityArea[];
}

const LandingFacilityShowcase = ({ title, subtitle, areas }: LandingFacilityShowcaseProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-5 md:mb-10 px-4 leading-[0.95]">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald max-w-4xl mx-auto px-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {areas.map((area, index) => (
                    <div 
                      key={index}
                      className="group flex-shrink-0 w-[85vw] bg-card border-[3px] border-border rounded-xl overflow-hidden shadow-lg hover:border-primary/60 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in snap-center"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image */}
                      <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                        {area.image ? (
                          <img 
                            src={area.image} 
                            alt={`${area.title} at LPA`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                            <div className="relative z-10 text-center p-4">
                              <p className="text-primary/60 font-bebas text-sm uppercase tracking-wider">
                                {area.title} Photo
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-xl font-bebas font-black uppercase mb-2 text-primary">
                          {area.title}
                        </h3>
                        <p className="text-xs text-foreground font-oswald mb-4 leading-relaxed">
                          {area.description}
                        </p>
                        <ul className="space-y-2">
                          {area.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-muted-foreground font-oswald text-xs">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Single Row */}
              <div className="hidden md:flex md:gap-8 md:justify-center">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="group bg-card border-[3px] border-border rounded-xl overflow-hidden shadow-lg hover:border-primary/60 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in flex-shrink-0 w-[420px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  {area.image ? (
                    <img 
                      src={area.image} 
                      alt={`${area.title} at LPA`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                      <div className="relative z-10 text-center p-4">
                        <p className="text-primary/60 font-bebas text-base uppercase tracking-wider">
                          {area.title} Photo
                        </p>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bebas font-black uppercase mb-5 md:mb-7 text-primary leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground font-oswald mb-7 md:mb-9 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-4 md:space-y-5">
                    {area.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-3 md:gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground font-oswald text-sm md:text-lg lg:text-xl leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Facility Stats */}
          <div className="mt-12 md:mt-20 bg-card border-2 border-primary/30 rounded-xl p-8 md:p-14">
            <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-2 md:mb-4">16K+</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-base leading-relaxed">Square Feet</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-2 md:mb-4">365</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-base leading-relaxed">Days Open</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-5xl font-bebas font-black text-primary mb-2 md:mb-4">Pro</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-base leading-relaxed">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingFacilityShowcase;
