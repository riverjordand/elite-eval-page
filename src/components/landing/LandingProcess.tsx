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
      <SectionDivider fromColor="#000000" toColor="#050505" />
      <section className="section-darker py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
                How The Evaluation<br />
                <span className="text-primary glow-primary">Works</span>
              </h2>
              {subtitle && (
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Steps */}
            <div className="relative mb-16 lg:mb-24">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-20 xl:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="relative flex flex-row lg:flex-col gap-5 lg:gap-0 items-start lg:items-center text-left lg:text-center"
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-primary rounded-2xl lg:rounded-3xl flex items-center justify-center shrink-0 lg:mx-auto lg:mb-10 shadow-2xl border-glow-intense">
                      <span className="text-3xl lg:text-4xl xl:text-5xl font-bebas font-black text-primary-foreground">
                        {step.number}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div className="bg-gradient-to-b from-card to-background border border-border/50 rounded-2xl p-6 lg:p-8 xl:p-10 flex-1 flex flex-col hover:border-primary/30 transition-all duration-500 min-h-[180px] lg:min-h-[220px]">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bebas font-bold uppercase mb-3 lg:mb-4 text-foreground leading-tight tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-oswald text-base lg:text-lg xl:text-xl leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-xl md:text-2xl lg:text-3xl xl:text-4xl px-12 py-7 md:px-16 md:py-10 lg:px-20 lg:py-12 h-auto shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 border-glow-intense w-full sm:w-auto"
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
