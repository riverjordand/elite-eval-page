import { Target, Cpu, Dumbbell } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    stat: "50+ Years",
    description: "Former D1 and professional coaches who know exactly what college programs look for."
  },
  {
    icon: Cpu,
    title: "Pro Technology",
    stat: "Rapsodo + Video",
    description: "The same data-driven analysis tools used by MLB organizations to develop talent."
  },
  {
    icon: Dumbbell,
    title: "Total Development",
    stat: "Full System",
    description: "Mechanics, strength, mobility, and mental game—everything integrated into one program."
  }
];

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            The LPA Difference
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none">
            Why Athletes Choose Us
          </h2>
        </div>
        
        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 md:p-10 text-center hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Stat */}
              <div className="font-bebas text-2xl md:text-3xl text-primary mb-2">
                {pillar.stat}
              </div>
              
              {/* Title */}
              <h3 className="font-bebas text-xl md:text-2xl text-foreground uppercase mb-4">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-oswald text-sm md:text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
