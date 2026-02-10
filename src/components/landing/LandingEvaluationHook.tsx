import athleteImage from "@/assets/athlete-on-field.jpg";
import SectionDivider from "./SectionDivider";

interface LandingEvaluationHookProps {
  onCtaClick?: () => void;
}

const LandingEvaluationHook = ({ onCtaClick }: LandingEvaluationHookProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-16 lg:py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-block px-5 py-2 md:px-6 md:py-2.5 bg-primary border-2 border-primary rounded-full text-white font-bebas text-sm md:text-base uppercase tracking-wider shadow-lg shadow-primary/50">
              The College-Ready Player Evaluation
            </span>
          </div>

          {/* Top Headline & Body */}
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas font-black uppercase leading-tight px-2">
              Every Athlete Has A Limit They Can't Break Through On Their Own — The Key Is Knowing What's Causing It.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-oswald leading-relaxed max-w-2xl mx-auto">
              Most plateaus aren't effort problems. They're hidden flaws no one has identified yet.
            </p>
          </div>

          {/* Large Centered Athlete Image */}
          <div className="rounded-xl overflow-hidden border-2 border-border/40 max-w-3xl mx-auto">
            <img 
              src={athleteImage} 
              alt="Baseball player on field"
              className="w-full h-full object-cover aspect-[3/4] md:aspect-[16/9]"
            />
          </div>

          {/* Bottom Headline & Body */}
          <div className="text-center space-y-3 md:space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas font-black uppercase leading-tight px-2">
              Most Parents Can't See What's Holding Their Athlete Back
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-oswald leading-relaxed max-w-2xl mx-auto">
              You know your athlete is capable of more. But without a trained eye, you can't pinpoint what's standing in the way — and guessing costs time they don't have.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingEvaluationHook;
