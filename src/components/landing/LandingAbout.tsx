import { Target, Zap, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    description: "Former D1 & pro coaches who've guided 50+ athletes to college programs."
  },
  {
    icon: Zap,
    title: "Pro Technology",
    description: "Rapsodo, high-speed video, and biomechanics analysis used by the pros."
  },
  {
    icon: TrendingUp,
    title: "Complete System",
    description: "Mechanics, strength, mobility, and game IQ—all integrated into one program."
  }
];

const LandingAbout = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 section-dark" />
      
      {/* Dramatic gradient accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 mb-4 md:mb-5 uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            Why Athletes Choose LPA
          </div>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase tracking-tight glow-primary">
            The Legendary Advantage
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-10 lg:p-12 hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-[60px]" />
              
              <div className="relative">
                <div className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-primary/20 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/30 transition-colors border-glow">
                  <pillar.icon className="w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
                </div>
                <h3 className="font-bebas text-xl md:text-3xl lg:text-4xl text-foreground mb-3 md:mb-4 uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
