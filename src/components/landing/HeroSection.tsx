import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
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
      
      {/* Multi-layer cinematic overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      
      {/* Vignette */}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 80px rgba(0,0,0,0.8)' }} />
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[150px] opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto opacity-90"
              style={{ filter: 'drop-shadow(0 0 30px hsl(271 81% 56% / 0.5))' }}
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
            <span className="font-oswald text-xs md:text-sm text-foreground/80 uppercase tracking-widest">
              Arizona's Premier Baseball Academy
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bebas uppercase leading-none tracking-tight mb-6 md:mb-8">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground">
              Build The Athlete
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] text-primary" style={{ textShadow: '0 0 80px hsl(271 81% 56% / 0.6)' }}>
              Colleges Want
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-oswald text-base md:text-xl lg:text-2xl text-foreground/60 mb-10 md:mb-14 max-w-2xl mx-auto">
            Elite coaching. Pro technology. A proven system that gets players recruited.
          </p>

          {/* CTA */}
          <Button 
            size="lg"
            onClick={onCtaClick}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-5 md:py-7 h-auto rounded-none"
            style={{ boxShadow: '0 0 40px hsl(271 81% 56% / 0.4)' }}
          >
            Book Free Evaluation
            <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
