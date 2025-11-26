import { Trophy, Users, TrendingUp } from "lucide-react";

interface StatItem {
  icon: "trophy" | "users" | "trending";
  number: string;
  label: string;
}

interface LandingAuthorityProps {
  title: string;
  description: string;
  stats: StatItem[];
  credentials: string[];
}

const iconMap = {
  trophy: Trophy,
  users: Users,
  trending: TrendingUp,
};

const LandingAuthority = ({ title, description, stats, credentials }: LandingAuthorityProps) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-6">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground font-oswald max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div 
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bebas font-black text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-oswald uppercase text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Credentials */}
          <div className="bg-card border-2 border-border rounded-xl p-10">
            <h3 className="text-2xl font-bebas font-bold uppercase mb-6 text-center">
              World-Class Coaching Staff
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground font-oswald">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAuthority;
