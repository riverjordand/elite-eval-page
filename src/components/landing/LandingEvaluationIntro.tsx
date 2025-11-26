import SectionDivider from "./SectionDivider";

interface LandingEvaluationIntroProps {
  // No props needed - content is hardcoded
}

const LandingEvaluationIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
              {/* Text Content */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bebas font-black uppercase mb-3 md:mb-6 leading-tight text-primary">
                  The Free College-Ready Player Evaluation
                </h3>
                <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald mb-3 md:mb-6 leading-relaxed">
                  A professional-grade, 90-minute evaluation used by D1 coaches — designed to reveal exactly what's holding your athlete back.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-foreground font-oswald font-semibold">
                  This is not a lesson. It's a complete audit of your athlete's mechanics, mobility, metrics, and development path.
                </p>
              </div>

              {/* Visual Placeholder - Hidden on mobile */}
              <div className="hidden md:flex bg-card border-2 border-primary/30 rounded-xl aspect-square items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center animate-scale-in">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default LandingEvaluationIntro;
