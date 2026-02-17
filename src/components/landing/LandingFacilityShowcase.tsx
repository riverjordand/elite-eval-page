import { Link } from "react-router-dom";
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
      <SectionDivider fromColor="#000000" toColor="#050505" />
      <section className="section-darker">
        {/* Hero Header - Full width dramatic */}
        <div className="py-fluid-section px-fluid-container-px">
          <div className="max-w-[1800px] mx-auto text-center">
            <h2 className="text-fluid-hero font-bebas font-black uppercase leading-[0.9] mb-fluid-md">
              Where Elite Athletes<br />
              <span className="text-primary glow-primary">Train</span>
            </h2>
            <p className="text-fluid-2xl text-muted-foreground font-oswald max-w-5xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-fluid-md px-fluid-container-px scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-fluid-gap" style={{ width: 'max-content' }}>
            {areas.map((area, index) => (
              <div 
                key={index}
                className="group flex-shrink-0 w-[85vw] bg-card border border-border/50 rounded-xl overflow-hidden snap-center"
              >
                <div className="aspect-video relative overflow-hidden">
                  {area.image && (
                    <img 
                      src={area.image} 
                      alt={`${area.title} at LPA`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-fluid-sm">
                  <h3 className="text-fluid-lg font-bebas font-black uppercase mb-2 text-primary">{area.title}</h3>
                  <p className="text-fluid-xs text-foreground/80 font-oswald mb-fluid-xs">{area.description}</p>
                  <ul className="space-y-2">
                    {area.specs.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                        <span className="text-muted-foreground font-oswald text-fluid-xs">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Cinematic full-width alternating layout */}
        <div className="hidden lg:block">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="relative min-h-[80vh] xl:min-h-[85vh] flex items-center"
            >
              {/* Full-width background image */}
              <div className="absolute inset-0">
                {area.image && (
                  <img 
                    src={area.image} 
                    alt={`${area.title} at LPA`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className={`absolute inset-0 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-r from-background via-background/90 to-transparent'
                    : 'bg-gradient-to-l from-background via-background/90 to-transparent'
                }`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full px-fluid-container-px">
                <div className={`max-w-[1800px] mx-auto flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className="max-w-2xl xl:max-w-3xl">
                    <h3 className="text-fluid-4xl font-bebas font-black uppercase mb-fluid-md text-primary glow-primary leading-[0.95]">
                      {area.title}
                    </h3>
                    <p className="text-fluid-xl text-foreground/90 font-oswald mb-fluid-lg leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-fluid-xs mb-fluid-md">
                      {area.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-oswald text-fluid-lg">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    {area.tagline && (
                      <p className="text-fluid-lg font-oswald font-semibold text-foreground/80 italic border-l-4 border-primary pl-fluid-sm">
                        {area.tagline}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Stats - Full width dramatic */}
        <div className="py-fluid-section px-fluid-container-px">
          <div className="max-w-[1800px] mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl lg:rounded-3xl p-fluid-xl">
              <div className="grid grid-cols-3 gap-fluid-lg text-center">
                <div>
                  <div className="text-fluid-hero font-bebas font-black text-primary glow-primary mb-fluid-xs">16K+</div>
                  <p className="text-muted-foreground font-oswald uppercase text-fluid-base tracking-wider">Square Feet</p>
                </div>
                <div>
                  <div className="text-fluid-hero font-bebas font-black text-primary glow-primary mb-fluid-xs">365</div>
                  <p className="text-muted-foreground font-oswald uppercase text-fluid-base tracking-wider">Days Open</p>
                </div>
                <div>
                  <div className="text-fluid-hero font-bebas font-black text-primary glow-primary mb-fluid-xs">Pro</div>
                  <p className="text-muted-foreground font-oswald uppercase text-fluid-base tracking-wider">Grade Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-fluid-section text-center px-fluid-container-px">
          <div className="max-w-4xl xl:max-w-5xl mx-auto">
            <p className="text-fluid-2xl text-foreground font-oswald mb-fluid-xs leading-relaxed">
              Ready to see this level of development in person?
            </p>
            <p className="text-fluid-lg text-muted-foreground font-oswald mb-fluid-lg leading-relaxed">
              Your athlete's free evaluation includes a full walkthrough of the facility, a breakdown of their performance, and a personalized development plan.
            </p>
            <Link to="/appointments">
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-fluid-xl py-fluid-md rounded-xl lg:rounded-2xl font-bebas text-fluid-2xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 border-glow-intense"
              >
                → Book Your Free Evaluation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFacilityShowcase;
