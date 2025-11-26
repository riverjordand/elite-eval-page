import { CheckCircle2, FileText, TrendingUp, Award, Target } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface Outcome {
  icon: string;
  title: string;
  description: string;
}

interface LandingOutcomesProps {
  title: string;
  subtitle: string;
  outcomes: Outcome[];
  closingText: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return FileText;
    case 'TrendingUp':
      return TrendingUp;
    case 'Award':
      return Award;
    case 'Target':
      return Target;
    default:
      return CheckCircle2;
  }
};

const LandingOutcomes = ({ 
  title, 
  subtitle, 
  outcomes,
  closingText
}: LandingOutcomesProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-4 md:mb-6">
                {title}
              </h2>
              
              <p className="text-base md:text-xl text-muted-foreground font-oswald">
                {subtitle}
              </p>
            </div>

            {/* Outcomes Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {outcomes.map((outcome, index) => {
                const Icon = getIcon(outcome.icon);
                return (
                  <div 
                    key={index}
                    className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg md:text-2xl font-bebas uppercase text-foreground mb-2">
                          {outcome.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground font-oswald leading-relaxed">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Text */}
            <div className="text-center">
              <p className="text-base md:text-lg text-foreground font-oswald italic">
                {closingText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingOutcomes;
