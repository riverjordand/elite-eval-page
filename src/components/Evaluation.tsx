import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const evaluationPoints = [
  "Pitching or hitting metrics with advanced technology",
  "Complete mechanics analysis and breakdown",
  "Strength and mobility review with certified trainers",
  "Coach-led development recommendations",
  "Personalized 6-12 month training plan",
  "Full facility walkthrough and program overview"
];

const Evaluation = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                Limited Weekly Availability
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-6">
              Free <span className="text-primary">College-Ready</span>
              <br />
              Player Evaluation
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete breakdown of your athlete's current level and what it takes to reach the next stage.
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold uppercase mb-8 text-center">
              What's Included in Your Evaluation:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {evaluationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xl px-12 py-8 border-glow"
              >
                Book Free Evaluation Now
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                * Due to high demand, evaluations are limited to ensure quality one-on-one attention
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground italic">
              "This evaluation changed everything. The coaches identified exactly what was holding me back and gave me a clear path forward."
              <br />
              <span className="text-foreground font-semibold">- Jake M., Committed to University of Arizona</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
