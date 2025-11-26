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
      <section className="py-16 md:py-32 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-primary/20 border-2 border-primary/40 rounded-full mb-6 md:mb-10">
              <span className="text-primary font-bebas uppercase tracking-wider text-sm md:text-lg font-bold">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-8 md:mb-14 px-4 leading-[0.95]">
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 md:space-y-10 mb-12 md:mb-20">
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald leading-relaxed md:leading-relaxed text-center px-2"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/40 rounded-xl p-8 md:p-16 text-center shadow-lg">
            <p className="text-base sm:text-lg md:text-3xl lg:text-4xl font-oswald font-semibold text-foreground leading-relaxed md:leading-relaxed">
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
