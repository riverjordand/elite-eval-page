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
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      
      {/* Cinematic lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/15 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
      
      {/* Top and bottom accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-[-12deg] translate-x-1/4" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge with glow */}
          <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/50 blur-xl rounded-full" />
              <div className="relative inline-flex items-center gap-2 md:gap-3 bg-primary text-primary-foreground font-bebas text-sm md:text-base lg:text-lg px-5 md:px-8 py-2 md:py-3 rounded-full uppercase tracking-widest shadow-2xl border-glow">
                <Zap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                Free Evaluation
              </div>
            </div>
          </div>
          
          {/* Headline with dramatic glow */}
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-foreground uppercase tracking-tight mb-5 md:mb-6 lg:mb-8">
            College-Ready Player
            <span className="block text-primary glow-primary-intense">Evaluation</span>
          </h2>
          
          <p className="font-oswald text-base md:text-xl lg:text-2xl text-center text-muted-foreground mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
            Find out exactly where your athlete stands—and what it takes to reach the next level.
          </p>
          
          {/* What's included - cards with glow */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
            {includes.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-3 md:gap-4 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-xl px-4 md:px-6 lg:px-8 py-3 md:py-5 lg:py-6 border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <span className="font-oswald text-sm md:text-base lg:text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA with intense glow */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full scale-150" />
              <Button 
                size="lg" 
                className="relative group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-xl md:text-3xl lg:text-4xl px-10 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 h-auto shadow-2xl border-glow-intense transition-all duration-500 hover:scale-105"
                onClick={onCtaClick}
              >
                Book My Free Evaluation
                <ArrowRight className="ml-3 md:ml-4 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            
            <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground mt-6 md:mt-8">
              No commitment required • Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEvaluation;
