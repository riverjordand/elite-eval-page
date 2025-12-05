import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Trophy, Users } from "lucide-react";
import lpaBolt from "@/assets/lpa-logo-bolt.webp";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            {/* Logo */}
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-5 mx-auto lg:mx-0"
              style={{ filter: 'drop-shadow(0 0 30px hsl(271 81% 56% / 0.5))' }}
            />

            {/* Badge */}
            <div className="inline-flex items-center bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1.5 mb-5">
              <Star className="w-3 h-3 text-primary mr-2" />
              <span className="font-oswald text-xs text-primary uppercase tracking-[0.2em]">
                Arizona's #1 Baseball Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bebas uppercase leading-[0.9] tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground">
                Transform Your Game.
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground">
                Get Recruited.
              </span>
              <span 
                className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary mt-1"
                style={{ textShadow: '0 0 60px hsl(271 81% 56% / 0.5)' }}
              >
                Go Pro.
              </span>
            </h1>

            {/* Description */}
            <p className="font-oswald text-sm md:text-base lg:text-lg text-foreground/70 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The only Arizona academy where elite D1/pro coaches, MLB-grade technology, and complete 
              athletic development combine to build college-ready players — guaranteed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Button 
                size="lg"
                onClick={onCtaClick}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-base px-6 py-5 h-auto"
                style={{ boxShadow: '0 0 40px hsl(271 81% 56% / 0.4)' }}
              >
                Start Free Evaluation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="group border-white/30 hover:bg-white/10 text-foreground font-bebas uppercase tracking-[0.15em] text-base px-6 py-5 h-auto"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Athletes Train
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-foreground/50">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="font-oswald text-sm">50+ College Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-oswald text-sm">500+ Athletes Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;