import SectionDivider from "./SectionDivider";

interface LandingIntroProps {
  title: string;
  subtitle: string;
  description: string[];
  highlight: string;
}

const LandingIntro = ({ title, subtitle, description, highlight }: LandingIntroProps) => {
  return (
    <>
      <SectionDivider />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-3 md:mb-4">
              <span className="text-primary font-bebas uppercase tracking-wider text-xs md:text-sm">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-4 md:mb-8 px-4">
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald leading-relaxed text-center px-2"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-card border-2 border-primary/30 rounded-xl p-6 md:p-10 text-center">
            <p className="text-base sm:text-lg md:text-2xl font-oswald text-foreground leading-relaxed">
              {highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingIntro;
