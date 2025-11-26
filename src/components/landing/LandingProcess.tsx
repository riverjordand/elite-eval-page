import { Button } from "@/components/ui/button";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface LandingProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  ctaText: string;
}

const LandingProcess = ({ title, subtitle, steps, ctaText }: LandingProcessProps) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-muted-foreground font-oswald">
                {subtitle}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-primary/20" style={{ width: 'calc(100% - 8rem)', margin: '0 auto' }} />
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bebas font-black text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-card border-2 border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl font-bebas font-bold uppercase mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-oswald text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-2xl px-16 py-10"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProcess;
