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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground font-oswald max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Facility Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-3xl font-bebas font-black uppercase mb-4 text-primary">
                  {area.title}
                </h3>
                <p className="text-foreground font-oswald mb-6 leading-relaxed">
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
              </div>
            ))}
          </div>

          {/* Facility Stats */}
          <div className="mt-16 bg-card border-2 border-primary/30 rounded-xl p-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bebas font-black text-primary mb-2">16,000+</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm">Square Feet</p>
              </div>
              <div>
                <div className="text-5xl font-bebas font-black text-primary mb-2">365</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm">Days Open</p>
              </div>
              <div>
                <div className="text-5xl font-bebas font-black text-primary mb-2">Pro-Level</div>
                <p className="text-muted-foreground font-oswald uppercase text-sm">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFacilityShowcase;
