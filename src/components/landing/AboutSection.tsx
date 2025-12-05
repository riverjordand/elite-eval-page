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
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Atmospheric glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-primary/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 xl:mb-20">
          <p className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-4 glow-primary">
            Why 500+ Families Choose LPA
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-5 lg:mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            The Unfair Advantage
          </h2>
          <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Other academies have coaches or equipment. LPA has the <span className="text-foreground font-semibold">complete system</span> — 
            the same development approach used by professional organizations to turn raw talent into recruited players.
          </p>
        </div>
        
        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 p-6 lg:p-8 xl:p-10 hover:border-primary/50 transition-all duration-500 hover:bg-card/60"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
              <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
              
              {/* Icon & Stat */}
              <div className="relative flex items-start gap-4 mb-5 lg:mb-6">
                <div 
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-all duration-500 flex-shrink-0"
                  style={{ boxShadow: '0 0 30px hsl(271 81% 56% / 0.2)' }}
                >
                  <pillar.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl lg:text-3xl xl:text-4xl text-foreground uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-wide glow-primary">
                    {pillar.stat}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="relative font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 lg:mb-6">
                {pillar.description}
              </p>
              
              {/* Features */}
              <div className="relative space-y-3">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="font-oswald text-sm lg:text-base text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="font-oswald text-base lg:text-lg text-muted-foreground inline-flex items-center gap-2 group cursor-pointer hover:text-foreground transition-colors">
            See why parents say LPA changed their athlete's trajectory
            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;