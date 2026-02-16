import { useState, useEffect, useRef } from "react";
import { Target, Cpu, Dumbbell, ChevronRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Elite Coaching",
    stat: "50+ Yrs Combined",
    description: "Train under coaches who've played D1 ball, been drafted by MLB organizations, and scouted for professional teams.",
    features: ["Former D1 athletes & MLB scouts", "1-on-1 personalized feedback", "College recruiting guidance"]
  },
  {
    icon: Cpu,
    number: "02",
    title: "Pro-Level Technology",
    stat: "MLB-Grade Tools",
    description: "Rapsodo, high-speed video, and biomechanics breakdowns to diagnose and fix what's holding your athlete back.",
    features: ["Rapsodo spin analysis", "Slow-motion breakdowns", "Real-time metrics tracking"]
  },
  {
    icon: Dumbbell,
    number: "03",
    title: "Complete Development",
    stat: "Full System",
    description: "We build the complete athlete — strategic development, integrated strength, mobility, speed, recovery, and mental performance all combined into one system under one roof.",
    features: ["Position-specific development", "Baseball-specific strength & conditioning", "Mobility & injury prevention", "Mental performance training"]
  }
];

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

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36">
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`mb-14 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Why Families Choose LPA</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-[0.88]">
            The<br />
            <span className="text-primary">Outlaw Advantage</span>
          </h2>
        </div>

        {/* Layout: two smaller cards left, one featured card right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left column — two stacked cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {pillars.slice(0, 2).map((pillar, index) => (
              <div
                key={index}
                className={`group relative bg-card/30 border border-border/10 p-8 lg:p-10 transition-all duration-700 hover:border-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-bebas text-4xl lg:text-5xl text-primary/15 leading-none shrink-0">
                    {pillar.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <pillar.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.3em] mb-4">
                      {pillar.stat}
                    </p>
                    <p className="font-oswald text-sm text-foreground/40 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                    <div className="space-y-2.5 border-t border-border/10 pt-4">
                      {pillar.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5">
                          <ChevronRight className="w-3 h-3 text-primary/60 shrink-0" />
                          <span className="font-oswald text-xs text-foreground/50">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — featured Complete Development card */}
          {(() => {
            const pillar = pillars[2];
            return (
              <div
                className={`group relative border border-primary/20 bg-gradient-to-b from-primary/5 to-card/30 p-8 lg:p-12 flex flex-col justify-between transition-all duration-700 hover:border-primary/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '500ms' }}
              >
                {/* Large number watermark */}
                <span className="absolute top-6 right-8 font-bebas text-[120px] lg:text-[160px] text-primary/5 leading-none select-none pointer-events-none">
                  03
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Dumbbell className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <h3 className="font-bebas text-2xl lg:text-3xl xl:text-4xl text-foreground uppercase leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-oswald text-[11px] text-primary uppercase tracking-[0.3em] mb-6 lg:mb-8">
                    {pillar.stat}
                  </p>

                  <p className="font-oswald text-base lg:text-lg text-foreground/50 leading-relaxed mb-8 lg:mb-10 max-w-lg">
                    {pillar.description}
                  </p>

                  {/* Numbered features */}
                  <div className="space-y-5 lg:space-y-6">
                    {pillar.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-4">
                        <span className="font-bebas text-2xl lg:text-3xl text-primary/30 leading-none shrink-0 w-8">
                          {fIndex + 1}.
                        </span>
                        <div>
                          <span className="font-oswald text-sm lg:text-base text-foreground/70 uppercase tracking-wide">
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-10 lg:mt-14 w-full h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
