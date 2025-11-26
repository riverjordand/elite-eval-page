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
  onCtaClick?: () => void;
}

const LandingProcess = ({ title, subtitle, steps, ctaText, onCtaClick }: LandingProcessProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-4 md:mb-6 px-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-xl text-muted-foreground font-oswald px-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="relative mb-12 md:mb-16">
            {/* Connection Line - visible on desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-primary/40" style={{ width: 'calc(100% - 8rem)', margin: '0 auto' }} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in flex flex-row md:flex-col gap-4 md:gap-0 items-start md:items-center text-left md:text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shrink-0 md:mx-auto md:mb-6 shadow-lg">
                    <span className="text-3xl md:text-3xl font-bebas font-black text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-card border-2 border-border rounded-xl p-5 md:p-6 flex-1 flex flex-col hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-lg md:text-2xl font-bebas font-bold uppercase mb-2 md:mb-3 text-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-oswald text-sm md:text-base leading-relaxed flex-1">
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
              onClick={onCtaClick}
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
