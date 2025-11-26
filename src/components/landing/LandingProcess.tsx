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
    <section className="py-12 md:py-24 bg-[#0a0a0a] relative">
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald px-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line - hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-primary/20" style={{ width: 'calc(100% - 8rem)', margin: '0 auto' }} />
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-2xl md:text-3xl font-bebas font-black text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-card border-2 border-border rounded-lg p-4 md:p-6 h-full hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-base md:text-xl font-bebas font-bold uppercase mb-2 md:mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-oswald text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-20 px-4">
            <Button 
              variant="cta"
              size="lg" 
              className="font-bebas uppercase tracking-wider text-lg md:text-2xl px-8 py-6 md:px-16 md:py-10 w-full sm:w-auto"
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
