import athleteImage from "@/assets/athlete-on-field.jpg";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <section className="py-12 md:py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Large Centered Athlete Image */}
          <div className="rounded-2xl overflow-hidden border-2 border-border/50">
            <img 
              src={athleteImage} 
              alt="Baseball player on field"
              className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/3]"
            />
          </div>

          {/* Centered Text Content Below Image */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-6 md:mb-8 leading-tight">
              Most Parents Can't See What's Holding Their Athlete Back
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
              You know your athlete is capable of more. But without a trained eye, you can't pinpoint what's standing in the way—and guessing costs time they don't have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluationHook;
