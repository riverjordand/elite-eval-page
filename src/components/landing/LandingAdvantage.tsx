import { Award, Zap, TrendingUp } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface Advantage {
  icon: typeof Award;
  title: string;
  description: string;
}

const LandingAdvantage = () => {
  const advantages: Advantage[] = [
    {
      icon: Award,
      title: "Elite Coaching",
      description: "Train with former college and pro-level coaches who've guided 50+ athletes to college programs."
    },
    {
      icon: Zap,
      title: "Professional-Grade Technology",
      description: "Hit and pitch with tech that gives instant feedback — Rapsodo, slow-motion analysis, biomechanics breakdowns."
    },
    {
      icon: TrendingUp,
      title: "Strength & Conditioning Integration",
      description: "A complete development system: mechanics, mobility, power, athleticism."
    }
  ];

  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#000000" />
      <section className="section-dark py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header - Dramatic typography */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28 xl:mb-36">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bebas font-black uppercase tracking-tight leading-[0.9] mb-6 lg:mb-8">
                The Legendary<br />
                <span className="text-primary glow-primary">Advantage</span>
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-oswald font-light uppercase tracking-widest">
                Why Athletes Choose LPA
              </p>
            </div>

            {/* Three Column Layout - Full width on desktop */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-b from-card to-background border border-border/50 rounded-2xl lg:rounded-3xl p-8 md:p-10 lg:p-14 xl:p-16 text-center hover:border-primary/50 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-primary/10 border border-primary/20 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-8 lg:mb-12 group-hover:border-primary/40 transition-colors duration-500">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bebas font-black uppercase mb-4 lg:mb-6 text-foreground leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="relative text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingAdvantage;
