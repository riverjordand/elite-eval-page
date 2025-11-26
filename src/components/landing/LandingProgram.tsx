import { Target, Calendar, Users, Award } from "lucide-react";

interface ProgramFeature {
  icon: "target" | "calendar" | "users" | "award";
  title: string;
  description: string;
}

interface LandingProgramProps {
  title: string;
  subtitle: string;
  description: string;
  features: ProgramFeature[];
}

const iconMap = {
  target: Target,
  calendar: Calendar,
  users: Users,
  award: Award,
};

const LandingProgram = ({ title, subtitle, description, features }: LandingProgramProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-bebas uppercase tracking-wider text-sm">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-6">
              {title}
            </h2>
            
            <p className="text-xl text-muted-foreground font-oswald max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bebas font-bold uppercase mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-oswald leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Context */}
          <div className="mt-12 text-center">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-foreground font-oswald leading-relaxed">
                Your <span className="text-primary font-bold">Free Evaluation</span> is the first step to see if LPA's training programs are the right fit for your athlete's goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProgram;
