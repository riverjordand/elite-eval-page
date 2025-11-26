import SectionDivider from "./SectionDivider";

interface LandingEvaluationIntroProps {
  headline: string;
  subheadline: string;
  body: string;
}

const LandingEvaluationIntro = ({ headline, subheadline, body }: LandingEvaluationIntroProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-black uppercase mb-4 md:mb-6 leading-tight">
                  {headline}
                </h2>
                <p className="text-base md:text-xl text-muted-foreground font-oswald mb-4 md:mb-6 leading-relaxed">
                  {subheadline}
                </p>
                <p className="text-base md:text-lg text-foreground font-oswald font-semibold">
                  {body}
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="bg-card border-2 border-border rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
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

export default LandingEvaluationIntro;
