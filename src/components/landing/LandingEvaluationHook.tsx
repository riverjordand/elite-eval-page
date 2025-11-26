import athleteImage from "@/assets/athlete-on-field.jpg";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <section className="py-12 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Two Column Layout - Image Left, Text Right */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Athlete Image */}
          <div className="rounded-xl overflow-hidden border-2 border-border">
            <img 
              src={athleteImage} 
              alt="Baseball player on field"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-6 leading-tight">
              Most Parents Can't See What's Holding Their Athlete Back
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald leading-relaxed">
              You see the effort and potential—but can't identify the mechanical flaw, physical weakness, or exact skills college coaches need. Without professional assessment, you're guessing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluationHook;
