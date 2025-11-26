interface FacilityArea {
  title: string;
  description: string;
  specs: string[];
}

interface LandingFacilityShowcaseProps {
  title: string;
  subtitle: string;
  areas: FacilityArea[];
}

const LandingFacilityShowcase = ({ title, subtitle, areas }: LandingFacilityShowcaseProps) => {
  return (
    <section className="py-12 md:py-24 bg-secondary/30">
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

          {/* Facility Areas Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-4 md:p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bebas font-black uppercase mb-2 md:mb-4 text-primary">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground font-oswald mb-4 md:mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {area.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-start gap-2 md:gap-3">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-oswald text-xs md:text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Facility Stats */}
          <div className="mt-8 md:mt-16 bg-card border-2 border-primary/30 rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">16K+</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">Square Feet</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">365</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">Days Open</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-5xl font-bebas font-black text-primary mb-1 md:mb-2">Pro</div>
                <p className="text-muted-foreground font-oswald uppercase text-xs md:text-sm">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFacilityShowcase;
