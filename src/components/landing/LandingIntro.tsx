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
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-primary/20 border-2 border-primary/40 rounded-full mb-4 md:mb-6">
              <span className="text-primary font-bebas uppercase tracking-wider text-sm md:text-base font-bold">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-6 md:mb-10 px-4">
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-5 md:space-y-7 mb-10 md:mb-14">
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald leading-relaxed text-center px-2"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/40 rounded-xl p-6 md:p-12 text-center shadow-lg">
            <p className="text-base sm:text-lg md:text-3xl lg:text-4xl font-oswald font-semibold text-foreground leading-relaxed">
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
