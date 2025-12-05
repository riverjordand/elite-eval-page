import SectionDivider from "./SectionDivider";
import evaluationImage from "@/assets/evaluation-athlete-training.jpg";

interface LandingEvaluationIntroProps {
  // No props needed - content is hardcoded
}

const LandingEvaluationIntro = () => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-12 md:py-16 lg:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Mobile-First Stacked Layout */}
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:items-center">
              {/* Headline - Full Width on Mobile, Left Column on Desktop */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bebas font-black uppercase mb-4 md:mb-4 leading-tight text-primary">
                  The Free College-Ready Player Evaluation
                </h3>
              </div>

              {/* Large Hero Image on Mobile - Right Column on Desktop */}
              <div className="order-2 md:order-none rounded-xl overflow-hidden border-2 border-primary/30 md:row-span-2">
                <img 
                  src={evaluationImage} 
                  alt="Athlete training at LPA facility"
                  className="w-full h-full object-cover aspect-[3/4] md:aspect-square"
                />
              </div>

              {/* Text Content Below Image on Mobile, Below Headline on Desktop */}
              <div className="order-3 text-center md:text-left space-y-3 lg:space-y-4">
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground font-oswald leading-relaxed">
                  A professional-grade, 90-minute evaluation used by D1 coaches — designed to reveal exactly what's holding your athlete back.
                </p>
                <p className="text-base sm:text-lg md:text-base lg:text-lg text-foreground font-oswald font-semibold">
                  This is not a lesson. It's a complete audit of your athlete's mechanics, mobility, metrics, and development path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingEvaluationIntro;
