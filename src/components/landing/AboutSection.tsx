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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-card/50 to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="font-oswald text-xs text-primary uppercase tracking-[0.3em] mb-3">
            Why 500+ Families Choose LPA
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-4">
            The Unfair Advantage
          </h2>
          <p className="font-oswald text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Other academies have coaches or equipment. LPA has the <span className="text-foreground">complete system</span> — 
            the same development approach used by professional organizations to turn raw talent into recruited players.
          </p>
        </div>
        
        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/60 backdrop-blur border border-border/40 p-5 lg:p-6 hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon & Stat */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors flex-shrink-0">
                  <pillar.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase mb-0.5">
                    {pillar.title}
                  </h3>
                  <p className="font-oswald text-[10px] text-primary uppercase tracking-wide">
                    {pillar.stat}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="font-oswald text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                {pillar.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-oswald text-xs text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-8 lg:mt-10">
          <p className="font-oswald text-sm text-muted-foreground inline-flex items-center gap-2">
            See why parents say LPA changed their athlete's trajectory
            <ChevronRight className="w-4 h-4 text-primary" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;