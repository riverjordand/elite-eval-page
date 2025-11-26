import { Button } from "@/components/ui/button";
import SectionDivider from "./SectionDivider";

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
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-5 md:mb-10 px-4 leading-[0.95]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald px-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="relative mb-12 md:mb-16">
            {/* Connection Line - visible on desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-primary/40" style={{ width: 'calc(100% - 8rem)', margin: '0 auto' }} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <span className="text-2xl md:text-3xl font-bebas font-black text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-card border-2 border-border rounded-lg p-6 md:p-10 flex-1 flex flex-col hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-base md:text-2xl lg:text-3xl font-bebas font-bold uppercase mb-3 md:mb-6 text-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-oswald text-xs md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-4">
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
    </>
  );
};

export default LandingProcess;
