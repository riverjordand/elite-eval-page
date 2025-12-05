import { Target, Cpu, Dumbbell } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Elite Coaching",
    stat: "50+ Years Combined",
    description: "Former D1 and professional coaches who know exactly what college programs look for."
  },
  {
    icon: Cpu,
    title: "Pro Technology",
    stat: "Rapsodo + Video Analysis",
    description: "The same data-driven analysis tools used by MLB organizations to develop talent."
  },
  {
    icon: Dumbbell,
    title: "Total Development",
    stat: "Complete System",
    description: "Mechanics, strength, mobility, and mental game—everything integrated into one program."
  }
];

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
            The LPA Difference
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none">
            Why Athletes Choose Us
          </h2>
        </div>
        
        {/* Pillars - horizontal layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-card/40 backdrop-blur border border-border/30 p-6 md:p-8 lg:p-10 xl:p-12 hover:border-primary/40 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-5 lg:mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Stat */}
              <div className="font-bebas text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary mb-2 lg:mb-3">
                {pillar.stat}
              </div>
              
              {/* Title */}
              <h3 className="font-bebas text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground uppercase mb-3 lg:mb-4">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
