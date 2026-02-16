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
    features: [
      "Trackman",
      "HitTrax",
      "Rapsodo",
      "VALD",
    ],
  },
  {
    number: "04",
    title: "Education",
    stat: "Coaching & Education in One",
    description: "We build the complete athlete — integrated strength, speed, mobility, position skill, mental performance, and their entire middle and high school education built into one system.",
    features: [
      "Baseball-specific strength & conditioning",
      "Position-specific skill development",
      "Mobility & injury prevention",
      "Mental performance & full middle/high school education",
    ],
  },
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40">
      <div className="container relative mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Header */}
        <div className={`mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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

        {/* Advantages grid — 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/10">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className={`bg-background p-8 md:p-10 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 120}ms` }}
            >
              {/* Number + Title */}
              <div className="flex items-baseline gap-4 mb-1">
                <span className="font-bebas text-4xl lg:text-5xl text-primary/15 leading-none">
                  {adv.number}
                </span>
                <h3 className="font-bebas text-xl md:text-2xl lg:text-3xl text-foreground uppercase leading-tight">
                  {adv.title}
                </h3>
              </div>

              <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.3em] mb-5 ml-0">
                {adv.stat}
              </p>

              {/* Description */}
              <p className="font-oswald text-sm md:text-[15px] text-foreground/45 leading-relaxed mb-8">
                {adv.description}
              </p>

              {/* Numbered features */}
              <div className="space-y-3 border-t border-border/10 pt-6">
                {adv.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <span className="font-bebas text-lg text-primary/30 leading-none shrink-0 w-6 pt-px">
                      {fIndex + 1}.
                    </span>
                    <span className="font-oswald text-xs md:text-sm text-foreground/55 uppercase tracking-wide">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
