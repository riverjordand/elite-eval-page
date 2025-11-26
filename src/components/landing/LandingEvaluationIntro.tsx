import SectionDivider from "./SectionDivider";
import evaluationImage from "@/assets/evaluation-athlete-training.jpg";

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
              <div className="text-center md:text-left">
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

              {/* Athlete Training Image */}
              <div className="rounded-xl overflow-hidden border-2 border-primary/30">
                <img 
                  src={evaluationImage} 
                  alt="Athlete training at LPA facility"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingEvaluationIntro;
