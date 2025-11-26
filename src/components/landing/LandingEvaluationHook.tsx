import SectionDivider from "./SectionDivider";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Headline - Performance Gaps Angle */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-4 md:mb-6 leading-tight px-4">
              Most Parents Can't See What's Holding Their Athlete Back
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-oswald leading-relaxed px-4">
              You see the effort. You see the potential. But you can't identify the mechanical flaw limiting velocity, the physical weakness preventing explosiveness, or the exact skills college coaches are looking for. Without professional assessment, you're guessing — and every season without clarity is a season lost.
            </p>
          </div>

          {/* Evaluation Intro */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black uppercase mb-4 md:mb-6 leading-tight text-primary">
                  The Free College-Ready Player Evaluation
                </h3>
                <p className="text-base md:text-xl text-muted-foreground font-oswald mb-4 md:mb-6 leading-relaxed">
                  A professional-grade, 90-minute evaluation used by D1 coaches and pro development programs — designed to reveal exactly what's holding your athlete back and what it will take to reach the next level.
                </p>
                <p className="text-base md:text-lg text-foreground font-oswald font-semibold">
                  This is not a lesson. It's a complete audit of your athlete's mechanics, mobility, metrics, and development path.
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="bg-card border-2 border-primary/30 rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center animate-scale-in">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-oswald">Professional Evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingEvaluationHook;
