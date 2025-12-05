import { Target, Zap, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    description: "Former college & pro coaches who've guided 50+ athletes to the next level."
  },
  {
    icon: Zap,
    title: "Pro Technology",
    description: "Rapsodo, slow-motion analysis, and biomechanics breakdowns."
  },
  {
    icon: TrendingUp,
    title: "Complete Development",
    description: "Mechanics, mobility, power, and game IQ—all in one program."
  }
];

const LandingAbout = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-2xl md:text-3xl text-center text-foreground mb-8 uppercase tracking-wide">
          The Legendary Advantage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card/50 border border-border/50 rounded-lg"
            >
              <pillar.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bebas text-lg text-foreground mb-2 uppercase">
                {pillar.title}
              </h3>
              <p className="font-oswald text-sm text-muted-foreground">
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
