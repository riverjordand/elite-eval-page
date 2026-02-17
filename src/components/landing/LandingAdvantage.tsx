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
      <section className="section-dark py-fluid-xl">
        <div className="px-fluid-container-px">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-fluid-lg">
              <h2 className="text-fluid-4xl font-bebas font-black uppercase tracking-tight leading-[0.9] mb-fluid-xs">
                The Legendary<br />
                <span className="text-primary glow-primary">Advantage</span>
              </h2>
              <p className="text-fluid-base text-muted-foreground font-oswald font-light uppercase tracking-widest">
                Why Athletes Choose LPA
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-fluid-gap">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-b from-card to-background border border-border/50 rounded-xl lg:rounded-2xl p-fluid-md text-center hover:border-primary/50 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 border border-primary/20 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-fluid-sm group-hover:border-primary/40 transition-colors duration-500">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-fluid-xl font-bebas font-black uppercase mb-fluid-xs text-foreground leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="relative text-fluid-sm text-muted-foreground font-oswald leading-relaxed">
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
