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
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-sm px-4 py-1 mb-4 uppercase tracking-widest">
            Why Athletes Choose LPA
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight">
            The Legendary Advantage
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border/50 rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-[40px]" />
              
              <pillar.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-xl md:text-2xl text-foreground mb-3 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-oswald text-sm md:text-base text-muted-foreground leading-relaxed">
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
