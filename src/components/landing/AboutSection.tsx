import { useState, useEffect, useRef } from "react";
import { Target, Cpu, Dumbbell } from "lucide-react";

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
        
        {/* Three columns - editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/10">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`group bg-background p-8 lg:p-10 transition-all duration-700 hover:bg-card/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Number */}
              <span className="font-bebas text-5xl lg:text-6xl text-border/30 group-hover:text-primary/20 transition-colors leading-none">
                {pillar.number}
              </span>
              
              {/* Title row */}
              <div className="flex items-center gap-3 mt-4 mb-2">
                <pillar.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-tight">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.3em] mb-5">
                {pillar.stat}
              </p>
              
              <p className="font-oswald text-sm text-foreground/40 leading-relaxed mb-6">
                {pillar.description}
              </p>
              
              {/* Features list */}
              <div className="space-y-3 border-t border-border/10 pt-5">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary flex-shrink-0" />
                    <span className="font-oswald text-xs text-foreground/50">{feature}</span>
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
