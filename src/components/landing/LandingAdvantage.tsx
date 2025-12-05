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
      <section className="section-dark py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bebas font-black uppercase tracking-tight leading-[0.9] mb-3 lg:mb-4">
                The Legendary<br />
                <span className="text-primary glow-primary">Advantage</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald font-light uppercase tracking-widest">
                Why Athletes Choose LPA
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-b from-card to-background border border-border/50 rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 text-center hover:border-primary/50 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 border border-primary/20 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:border-primary/40 transition-colors duration-500">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-xl md:text-2xl lg:text-2xl font-bebas font-black uppercase mb-2 lg:mb-3 text-foreground leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="relative text-sm md:text-base lg:text-base text-muted-foreground font-oswald leading-relaxed">
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
