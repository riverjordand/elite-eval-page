import { useState } from "react";
import { Button } from "@/components/ui/button";
import EvaluationForm from "@/components/landing/EvaluationForm";

const TourCTA = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6">
            See <span className="text-primary">LPA</span> in Action
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tour the facility and meet the coaching staff. Experience firsthand what makes LPA Arizona's premier baseball prep academy.
          </p>

          <div className="bg-card border-2 border-border rounded-xl p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">16,000+</div>
                <p className="text-muted-foreground">Square Feet of Training Space</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">D1/Pro</div>
                <p className="text-muted-foreground">Level Coaching Staff</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">365</div>
                <p className="text-muted-foreground">Days of Development</p>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider text-xl px-12 py-8 transition-all duration-300"
              onClick={() => setFormOpen(true)}
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>

      <EvaluationForm open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default TourCTA;
