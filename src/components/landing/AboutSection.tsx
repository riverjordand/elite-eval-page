import { Target, Cpu, Dumbbell, ChevronRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    stat: "50+ Years Combined Pro Experience",
    description: "Your athlete trains under coaches who've played D1 ball, been drafted by MLB organizations, and scouted for professional teams. They don't just teach the game — they've lived it.",
    features: [
      "Former D1 athletes & MLB scouts on staff",
      "1-on-1 attention & personalized feedback",
      "College recruiting guidance & connections"
    ]
  },
  {
    icon: Cpu,
    title: "Pro-Level Technology",
    stat: "Same Tools Used by MLB Teams",
    description: "We use Rapsodo, high-speed video analysis, and biomechanics breakdowns to diagnose exactly what's holding your athlete back — then fix it with data-backed training.",
    features: [
      "Rapsodo ball tracking & spin analysis",
      "Multi-angle slow-motion breakdowns",
      "Real-time metrics & progress tracking"
    ]
  },
  {
    icon: Dumbbell,
    title: "Complete Development",
    stat: "Mechanics + Strength + Mental Game",
    description: "Most academies only train mechanics. We build the complete athlete — integrating strength, mobility, speed, and mental performance into one comprehensive system.",
    features: [
      "Baseball-specific strength programming",
      "Mobility & injury prevention protocols",
      "Mental performance & game IQ training"
    ]
  }
];

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 xl:mb-20">
          <p className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-4">
            Why 500+ Families Choose LPA
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-5 lg:mb-6">
            The Unfair Advantage
          </h2>
          <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Other academies have coaches or equipment. LPA has the <span className="text-foreground">complete system</span> — 
            the same development approach used by professional organizations to turn raw talent into recruited players.
          </p>
        </div>
        
        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/60 backdrop-blur border border-border/40 p-6 lg:p-8 xl:p-10 hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon & Stat */}
              <div className="flex items-start gap-4 mb-5 lg:mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors flex-shrink-0">
                  <pillar.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl lg:text-3xl xl:text-4xl text-foreground uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-wide">
                    {pillar.stat}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 lg:mb-6">
                {pillar.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-oswald text-sm lg:text-base text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="font-oswald text-base lg:text-lg text-muted-foreground inline-flex items-center gap-2">
            See why parents say LPA changed their athlete's trajectory
            <ChevronRight className="w-5 h-5 text-primary" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;