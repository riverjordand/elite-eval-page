import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-training.mp4" type="video/mp4" />
      </video>
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

      {/* Content - Left aligned on desktop */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-4xl xl:max-w-5xl">
            {/* Logo */}
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-6 lg:mb-8 opacity-90"
              style={{ filter: 'drop-shadow(0 0 30px hsl(271 81% 56% / 0.5))' }}
            />

            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-2 mb-6 lg:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
              <span className="font-oswald text-xs lg:text-sm text-foreground/80 uppercase tracking-[0.2em]">
                Arizona's Premier Baseball Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bebas uppercase leading-[0.9] tracking-tight mb-6 lg:mb-8">
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-foreground">
                Build The Athlete
              </span>
              <span 
                className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-primary"
                style={{ textShadow: '0 0 60px hsl(271 81% 56% / 0.5)' }}
              >
                Colleges Want
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-oswald text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/60 mb-8 lg:mb-10 max-w-2xl">
              Elite coaching. Pro technology. A proven system that gets players recruited.
            </p>

            {/* CTA */}
            <Button 
              size="lg"
              onClick={onCtaClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-base md:text-lg lg:text-xl xl:text-2xl px-8 lg:px-12 xl:px-14 py-5 lg:py-6 xl:py-7 h-auto"
              style={{ boxShadow: '0 0 40px hsl(271 81% 56% / 0.4)' }}
            >
              Book Free Evaluation
              <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
