interface Coach {
  name: string;
  title: string;
  credentials: string[];
}

interface LandingCoachesProps {
  title: string;
  subtitle: string;
  coaches: Coach[];
}

const LandingCoaches = ({ title, subtitle, coaches }: LandingCoachesProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground font-oswald max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Coach Avatar Placeholder */}
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bebas text-primary">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Coach Info */}
                <h3 className="text-2xl font-bebas font-bold uppercase mb-2 text-foreground">
                  {coach.name}
                </h3>
                <p className="text-primary font-oswald font-semibold mb-6 uppercase text-sm tracking-wide">
                  {coach.title}
                </p>

                {/* Credentials */}
                <ul className="space-y-2 text-left">
                  {coach.credentials.map((credential, credIndex) => (
                    <li key={credIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-oswald text-sm leading-relaxed">
                        {credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCoaches;
