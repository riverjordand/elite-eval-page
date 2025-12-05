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
    <section className="relative py-16 md:py-24 bg-card overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-[-12deg] translate-x-1/4" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bebas text-sm md:text-base px-5 py-2 rounded-full uppercase tracking-widest">
              <Zap className="w-4 h-4" />
              Free Evaluation
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-foreground uppercase tracking-tight mb-4">
            College-Ready Player
            <span className="block text-primary">Evaluation</span>
          </h2>
          
          <p className="font-oswald text-sm md:text-base lg:text-lg text-center text-muted-foreground mb-8 max-w-xl mx-auto">
            Find out exactly where your athlete stands—and what it takes to reach the next level.
          </p>
          
          {/* What's included */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10 max-w-lg mx-auto">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-oswald text-xs md:text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-5 md:py-6 h-auto shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              onClick={onCtaClick}
            >
              Book My Free Evaluation
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <p className="font-oswald text-xs md:text-sm text-muted-foreground mt-4">
              No commitment required • Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluation;
