import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface LandingEvaluationProps {
  onCtaClick?: () => void;
}

const includes = [
  "Velocity & metrics testing",
  "Mechanics video analysis",
  "Strength & mobility assessment",
  "Personalized development plan",
  "Coach recommendations",
  "Facility walkthrough",
];

const LandingEvaluation = ({ onCtaClick }: LandingEvaluationProps) => {
  return (
    <section className="py-12 md:py-16 bg-card/50 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-sm px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
            Free Evaluation
          </div>
          
          <h2 className="font-bebas text-2xl md:text-4xl text-foreground mb-3 uppercase">
            College-Ready Player Evaluation
          </h2>
          
          <p className="font-oswald text-sm md:text-base text-muted-foreground mb-6">
            Find out exactly where your athlete stands—and what it takes to reach the next level.
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-8 text-left max-w-md mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-oswald text-xs md:text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg px-8 py-5 h-auto"
            onClick={onCtaClick}
          >
            Book My Free Evaluation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="font-oswald text-xs text-muted-foreground mt-4">
            No commitment required. Limited spots available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluation;
