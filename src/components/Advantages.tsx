import { Trophy, TrendingUp, Target, Users } from "lucide-react";

const advantages = [
  {
    icon: Trophy,
    title: "Elite Coaching",
    description: "Former professional and collegiate level staff with decades of combined experience at the highest levels of the game."
  },
  {
    icon: TrendingUp,
    title: "Advanced Technology",
    description: "Velocity tracking, swing analytics, pitching breakdowns, and biomechanical analysis using cutting-edge tools."
  },
  {
    icon: Target,
    title: "Player Development System",
    description: "Comprehensive training covering strength, mechanics, mental preparation, and strategic game understanding."
  },
  {
    icon: Users,
    title: "College Pathway Success",
    description: "Proven track record of college commitments with direct connections to scouts and college programs nationwide."
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4">
            The <span className="text-primary">Legendary</span> Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets us apart as Arizona's first and only professional baseball prep academy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-8 rounded-lg hover:border-primary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold uppercase mb-4 text-foreground">
                {advantage.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
