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
      <section className="py-12 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 tracking-tight">
                The Legendary Advantage
              </h2>
              <p className="text-base md:text-xl text-primary font-oswald font-semibold uppercase">
                Why Athletes Choose LPA
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card border-2 border-border rounded-xl p-6 md:p-8 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bebas font-black uppercase mb-3 md:mb-4 text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-oswald leading-relaxed">
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
