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
        <div className="py-20 md:py-28 lg:py-40 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
              Where Elite Athletes<br />
              <span className="text-primary glow-primary">Train</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-oswald max-w-5xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-8 px-4 scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
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
                <div className="p-5">
                  <h3 className="text-xl font-bebas font-black uppercase mb-2 text-primary">{area.title}</h3>
                  <p className="text-xs text-foreground/80 font-oswald mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.specs.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                        <span className="text-muted-foreground font-oswald text-xs">{spec}</span>
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
              className={`relative min-h-[80vh] xl:min-h-[85vh] flex items-center ${
                index % 2 === 0 ? '' : ''
              }`}
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
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-r from-background via-background/90 to-transparent'
                    : 'bg-gradient-to-l from-background via-background/90 to-transparent'
                }`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />
              </div>

              {/* Content */}
              <div className={`relative z-10 w-full px-12 xl:px-20 ${
                index % 2 === 0 ? '' : ''
              }`}>
                <div className={`max-w-[1800px] mx-auto flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className="max-w-2xl xl:max-w-3xl">
                    <h3 className="text-5xl xl:text-6xl 2xl:text-7xl font-bebas font-black uppercase mb-6 xl:mb-8 text-primary glow-primary leading-[0.95]">
                      {area.title}
                    </h3>
                    <p className="text-xl xl:text-2xl 2xl:text-3xl text-foreground/90 font-oswald mb-8 xl:mb-10 leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-4 xl:space-y-5 mb-8">
                      {area.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-oswald text-lg xl:text-xl">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    {area.tagline && (
                      <p className="text-lg xl:text-xl font-oswald font-semibold text-foreground/80 italic border-l-4 border-primary pl-6">
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
        <div className="py-20 md:py-28 lg:py-36 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl lg:rounded-3xl p-10 md:p-16 lg:p-20 xl:p-24">
              <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-20 text-center">
                <div>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas font-black text-primary glow-primary mb-3 lg:mb-4">16K+</div>
                  <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-xl xl:text-2xl tracking-wider">Square Feet</p>
                </div>
                <div>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas font-black text-primary glow-primary mb-3 lg:mb-4">365</div>
                  <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-xl xl:text-2xl tracking-wider">Days Open</p>
                </div>
                <div>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas font-black text-primary glow-primary mb-3 lg:mb-4">Pro</div>
                  <p className="text-muted-foreground font-oswald uppercase text-sm md:text-base lg:text-xl xl:text-2xl tracking-wider">Grade Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-20 md:pb-28 lg:pb-36 text-center px-4 md:px-8">
          <div className="max-w-4xl xl:max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground font-oswald mb-4 leading-relaxed">
              Ready to see this level of development in person?
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald mb-10 lg:mb-14 leading-relaxed">
              Your athlete's free evaluation includes a full walkthrough of the facility, a breakdown of their performance, and a personalized development plan.
            </p>
            <Link to="/appointments">
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 rounded-xl lg:rounded-2xl font-bebas text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 border-glow-intense"
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
