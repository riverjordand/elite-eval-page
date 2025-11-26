interface LandingIntroProps {
  title: string;
  subtitle: string;
  description: string[];
  highlight: string;
}

const LandingIntro = ({ title, subtitle, description, highlight }: LandingIntroProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-bebas uppercase tracking-wider text-sm">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-8">
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 mb-10">
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-xl text-muted-foreground font-oswald leading-relaxed text-center"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-card border-2 border-primary/30 rounded-xl p-10 text-center">
            <p className="text-2xl font-oswald text-foreground leading-relaxed">
              {highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
