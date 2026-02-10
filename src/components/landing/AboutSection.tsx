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
  return (
    <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/6 rounded-full blur-[200px]" />
      <div className="absolute inset-0 cinematic-vignette opacity-20" />
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 md:gap-6 mb-6 md:mb-10 lg:mb-12 text-center lg:text-left">
          <div className="lg:max-w-xl">
            <p className="font-oswald text-[10px] md:text-xs lg:text-sm text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3 glow-primary">
              Why 500+ Families Choose LPA
            </p>
            <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg">
              The Unfair Advantage
            </h2>
          </div>
          <p className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground lg:max-w-md lg:text-right">
            The same development approach used by professional organizations to turn raw talent into recruited players.
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 p-5 lg:p-6 hover:border-primary/50 transition-all duration-300"
              style={{ boxShadow: '0 15px 30px -10px rgba(0,0,0,0.4)' }}
            >
              {/* Hover effects */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Header row */}
              <div className="relative flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/15 flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.15)' }}
                >
                  <pillar.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-oswald text-[10px] lg:text-xs text-primary uppercase tracking-wide glow-primary">
                    {pillar.stat}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="relative font-oswald text-xs lg:text-sm text-muted-foreground leading-relaxed mb-4">
                {pillar.description}
              </p>
              
              {/* Features - Compact */}
              <div className="relative space-y-2">
                {pillar.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                    <span className="font-oswald text-xs lg:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;