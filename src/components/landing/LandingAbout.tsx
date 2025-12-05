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
    <section className="relative py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm lg:text-base px-3 md:px-4 py-1 mb-3 md:mb-4 uppercase tracking-widest">
            Why Athletes Choose LPA
          </div>
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-tight">
            The Legendary Advantage
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border/50 rounded-xl p-5 md:p-8 lg:p-10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-bl-[40px]" />
              
              <pillar.icon className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary mb-3 md:mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-lg md:text-2xl lg:text-3xl text-foreground mb-2 md:mb-3 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-oswald text-xs md:text-base lg:text-lg text-muted-foreground leading-relaxed">
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
