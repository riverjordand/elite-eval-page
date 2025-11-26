import athleteImage from "@/assets/athlete-on-field.jpg";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Large Centered Athlete Image */}
          <div className="rounded-2xl overflow-hidden border-2 border-border/50 mb-12 md:mb-16">
            <img 
              src={athleteImage} 
              alt="Baseball player on field"
              className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/3]"
            />
          </div>

          {/* Centered Text Content Below Image */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase leading-tight">
              Most Parents Can't See What's Holding Their Athlete Back
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-oswald leading-relaxed max-w-3xl mx-auto">
              You see the effort and potential—but can't identify the mechanical flaw, physical weakness, or exact skills college coaches need. Without professional assessment, you're guessing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluationHook;
