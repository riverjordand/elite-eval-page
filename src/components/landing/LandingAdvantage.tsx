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
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 tracking-tight leading-tight">
                The Legendary Advantage
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-primary font-oswald font-semibold uppercase">
                Why Athletes Choose LPA
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card border-2 border-border rounded-xl p-6 md:p-10 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-8">
                      <Icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bebas font-black uppercase mb-3 md:mb-5 text-foreground leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald leading-relaxed">
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
