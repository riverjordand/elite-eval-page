import SectionDivider from "./SectionDivider";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Headline - Performance Gaps Angle */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-6 leading-tight">
              Most Parents Can't See What's Holding Their Athlete Back
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
              You see the effort and potential—but can't identify the mechanical flaw, physical weakness, or exact skills college coaches need. Without professional assessment, you're guessing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingEvaluationHook;
