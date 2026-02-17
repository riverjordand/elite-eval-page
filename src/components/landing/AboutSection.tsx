import { useState, useEffect, useRef } from "react";

interface Advantage {
  number: string;
  title: string;
  stat: string;
  description: string;
  features: string[];
}

const advantages: Advantage[] = [
  {
    number: "01",
    title: "Complete Development",
    stat: "Full System",
    description: "We build the complete athlete — strategic development, integrated strength, mobility, speed, recovery, and mental performance all combined into one system under one roof.",
    features: [
      "Position-specific development",
      "Baseball-specific strength & conditioning",
      "Mobility & injury prevention",
      "Mental performance training",
    ],
  },
  {
    number: "02",
    title: "Elite Coaching",
    stat: "50+ Yrs Combined",
    description: "Train under coaches who've played at the highest college level and been drafted into the MLB.",
    features: [
      "Former D1 athletes & MiLB experience",
      "Position-specific development",
      "College & MLB recruiting guidance",
      "Baseball-specific strength & conditioning",
    ],
  },
  {
    number: "03",
    title: "Pro-Level Tech",
    stat: "MLB-Grade Tools",
    description: "Trackman, HitTrax, Rapsodo, VALD force plates & speed lasers, and Kinvent GPS speed to assess and adjust to ensure our athletes are performing at the highest level.",
    features: ["Trackman", "HitTrax", "Rapsodo", "VALD"],
  },
  {
    number: "04",
    title: "Education",
    stat: "Academics Built for Athletes",
    description: "Dedicated classroom space where middle and high school student-athletes spend 2 hours per day ensuring grades are met with an advisor.",
    features: [
      "NCAA-approved standards",
      "Fully accredited by Cognia",
      "Weekly grade checks",
      "College prep focused",
      "Flexible scheduling",
    ],
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const handleTabChange = (i: number) => {
    if (i === activeIndex || animating) return;
    setAnimating(true);
    setActiveIndex(i);
    setTimeout(() => {
      setDisplayIndex(i);
      setAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = advantages[displayIndex];

  return (
    <section ref={sectionRef} id="advantages" className="relative py-24 md:py-32 lg:py-40 border-t border-border/10">
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
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
          <p className="font-oswald text-xs text-foreground/25 uppercase tracking-[0.2em] md:pb-2">
            4 Pillars of Development
          </p>
        </div>

        {/* Tabs + Content layout */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tab row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/10">
            {advantages.map((adv, i) => (
              <button
                key={i}
                onClick={() => handleTabChange(i)}
                className={`relative text-left py-5 md:py-6 px-4 md:px-6 transition-all duration-300 group ${
                  activeIndex === i ? 'bg-card/30' : 'hover:bg-card/10'
                }`}
              >
                <span className={`font-bebas text-3xl md:text-4xl leading-none transition-colors duration-300 ${
                  activeIndex === i ? 'text-primary' : 'text-foreground/15 group-hover:text-foreground/30'
                }`}>
                  {adv.number}
                </span>
                <p className={`font-bebas text-sm md:text-base uppercase tracking-wide mt-1 transition-colors duration-300 ${
                  activeIndex === i ? 'text-foreground' : 'text-foreground/30 group-hover:text-foreground/50'
                }`}>
                  {adv.title}
                </p>
                {/* Active indicator */}
                {activeIndex === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Active content panel */}
          <div className={`bg-card/20 border-x border-b border-border/10 p-8 md:p-12 lg:p-16 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left — description */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-tight">
                    {active.title}
                  </h3>
                </div>
                <p className="font-oswald text-[10px] md:text-xs text-primary uppercase tracking-[0.3em] mb-6">
                  {active.stat}
                </p>
                <p className="font-oswald text-base md:text-lg text-foreground/45 leading-relaxed max-w-xl">
                  {active.description}
                </p>
              </div>

              {/* Right — numbered features */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  {active.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-5 group">
                      <span className="font-bebas text-2xl md:text-3xl text-primary/30 leading-none shrink-0 w-8 group-hover:text-primary/60 transition-colors">
                        {fIndex + 1}.
                      </span>
                      <div className="border-b border-border/10 pb-5 flex-1">
                        <span className="font-oswald text-sm md:text-base text-foreground/60 uppercase tracking-wide group-hover:text-foreground/80 transition-colors">
                          {feature.split(/(MiLB)/).map((part, i) =>
                            part === 'MiLB' ? <span key={i} className="normal-case">MiLB</span> : part
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
