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
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm px-3 py-1 mb-3 uppercase tracking-widest">
            Why Athletes Choose LPA
          </div>
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight">
            The Legendary Advantage
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border/50 rounded-lg p-5 md:p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-[32px]" />
              
              <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-lg md:text-xl text-foreground mb-2 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-oswald text-xs md:text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
