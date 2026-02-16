import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "Position-specific development",
    "Baseball-specific strength & conditioning",
    "Mobility & injury prevention",
    "Mental performance training",
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40">
      <div className="container relative mx-auto px-6 lg:px-16 max-w-5xl">
        {/* Eyebrow */}
        <div className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">
              Why Families Choose LPA
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground uppercase leading-[0.88]">
            The <span className="text-primary">Outlaw Advantage</span>
          </h2>
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-border/20 my-10 md:my-14 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

        {/* Content block */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Title + stat */}
          <div className="flex items-baseline gap-4 mb-3">
            <h3 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase leading-tight">
              Complete Development
            </h3>
            <span className="font-oswald text-[10px] md:text-xs text-primary uppercase tracking-[0.3em]">
              Full System
            </span>
          </div>

          {/* Description */}
          <p className="font-oswald text-base md:text-lg lg:text-xl text-foreground/50 leading-relaxed max-w-3xl mb-10 md:mb-14">
            We build the complete athlete — strategic development, integrated strength, mobility, speed, recovery, and mental performance all combined into one system under one roof.
          </p>

          {/* Numbered features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-bebas text-3xl md:text-4xl text-primary/25 leading-none shrink-0 w-10">
                  {i + 1}.
                </span>
                <span className="font-oswald text-sm md:text-base text-foreground/60 uppercase tracking-wide pt-1.5">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
