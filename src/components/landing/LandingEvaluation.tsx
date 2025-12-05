import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";

interface LandingEvaluationProps {
  onCtaClick?: () => void;
}

const includes = [
  "Velocity & metrics testing",
  "Video mechanics analysis",
  "Strength & mobility assessment",
  "Personalized development plan",
  "Coach recommendations",
  "Facility walkthrough",
];

const LandingEvaluation = ({ onCtaClick }: LandingEvaluationProps) => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-[-12deg] translate-x-1/4" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-5 md:mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full uppercase tracking-widest">
              <Zap className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              Free Evaluation
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-foreground uppercase tracking-tight mb-4 md:mb-5 lg:mb-6">
            College-Ready Player
            <span className="block text-primary">Evaluation</span>
          </h2>
          
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-center text-muted-foreground mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Find out exactly where your athlete stands—and what it takes to reach the next level.
          </p>
          
          {/* What's included */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 bg-background/50 rounded-lg px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4">
                <Check className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <span className="font-oswald text-xs md:text-sm lg:text-base text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg md:text-2xl lg:text-3xl px-8 md:px-14 lg:px-16 py-5 md:py-7 lg:py-8 h-auto shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              onClick={onCtaClick}
            >
              Book My Free Evaluation
              <ArrowRight className="ml-3 w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <p className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground mt-4 md:mt-5">
              No commitment required • Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluation;
