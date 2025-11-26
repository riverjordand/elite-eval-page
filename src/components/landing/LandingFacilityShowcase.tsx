import SectionDivider from "./SectionDivider";

interface FacilityArea {
  title: string;
  description: string;
  specs: string[];
  image?: string;
  tagline?: string;
}

interface LandingFacilityShowcaseProps {
  title: string;
  subtitle: string;
  areas: FacilityArea[];
  onCtaClick?: () => void;
}

const LandingFacilityShowcase = ({ title, subtitle, areas, onCtaClick }: LandingFacilityShowcaseProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-24 lg:py-32 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 px-4 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-oswald max-w-3xl mx-auto px-2 leading-relaxed">
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
                        {area.tagline && (
                          <p className="text-xs font-oswald font-semibold text-foreground italic mt-4 pt-4 border-t border-border">
                            {area.tagline}
                          </p>
                        )}
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
                <div className="p-8">
                  <h3 className="text-4xl font-bebas font-black uppercase mb-4 text-primary">
                    {area.title}
                  </h3>
                  <p className="text-lg text-foreground font-oswald mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-3">
                    {area.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground font-oswald text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  {area.tagline && (
                    <p className="text-sm font-oswald font-semibold text-foreground italic mt-6 pt-6 border-t border-border">
                      {area.tagline}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Facility Stats */}
          <div className="mt-12 md:mt-20 bg-card border-2 border-primary/30 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-3 gap-6 md:gap-10 text-center">
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">16K+</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg">Square Feet</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">365</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg">Days Open</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black text-primary mb-2 md:mb-3">Pro</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-lg">Grade Equipment</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center max-w-4xl mx-auto px-4">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-oswald mb-3 leading-relaxed">
              Ready to see this level of development in person?
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald mb-8 md:mb-10 leading-relaxed">
              Your athlete's free evaluation includes a full walkthrough of the facility, a breakdown of their performance, and a personalized development plan built by our coaching staff.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 md:px-14 py-5 md:py-7 rounded-lg font-bebas text-xl md:text-2xl lg:text-3xl uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg h-auto min-h-[56px]"
            >
              → Book Your Free Evaluation
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingFacilityShowcase;
