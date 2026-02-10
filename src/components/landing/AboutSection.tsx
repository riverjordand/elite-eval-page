import { useState, useEffect, useRef } from "react";
import { Target, Cpu, Dumbbell, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    stat: "50+ Years Combined",
    description: "Train under coaches who've played D1 ball, been drafted by MLB organizations, and scouted for professional teams.",
    features: ["Former D1 athletes & MLB scouts", "1-on-1 personalized feedback", "College recruiting guidance"]
  },
  {
    icon: Cpu,
    title: "Pro-Level Technology",
    stat: "MLB-Grade Tools",
    description: "Rapsodo, high-speed video, and biomechanics breakdowns to diagnose and fix what's holding your athlete back.",
    features: ["Rapsodo spin analysis", "Slow-motion breakdowns", "Real-time metrics tracking"]
  },
  {
    icon: Dumbbell,
    title: "Complete Development",
    stat: "Full System",
    description: "We build the complete athlete — integrating strength, mobility, speed, and mental performance into one system.",
    features: ["Baseball-specific strength", "Mobility & injury prevention", "Mental performance training"]
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`max-w-2xl mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
            Why 500+ Families Choose LPA
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none mb-4">
            The Unfair Advantage
          </h2>
          <p className="font-oswald text-sm md:text-base text-foreground/50">
            The same development approach used by professional organizations to turn raw talent into recruited players.
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`group relative bg-card/50 border border-border/20 p-6 lg:p-8 hover:border-primary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-oswald text-[10px] lg:text-xs text-primary uppercase tracking-wider">
                    {pillar.stat}
                  </p>
                </div>
              </div>
              
              <p className="font-oswald text-xs lg:text-sm text-foreground/50 leading-relaxed mb-5">
                {pillar.description}
              </p>
              
              <div className="space-y-2.5">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                    <span className="font-oswald text-xs lg:text-sm text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
