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
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/hero-training.mp4" type="video/mp4" />
      </video>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50" />
      <div className="absolute inset-0 cinematic-vignette-intense" />
      
      {/* Atmospheric glow */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full py-20 lg:py-32 xl:py-40">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
            {/* Logo with glow */}
            <div className="relative inline-block mb-6 lg:mb-8 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/30 blur-3xl scale-150" />
              <img 
                src={lpaBolt} 
                alt="LPA" 
                className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                style={{ filter: 'drop-shadow(0 0 40px hsl(271 81% 56% / 0.7))' }}
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/40 px-4 py-2 mb-6 lg:mb-8 pulse-glow">
              <Star className="w-4 h-4 text-primary mr-2" fill="currentColor" />
              <span className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.2em]">
                Arizona's #1 Baseball Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bebas uppercase leading-[0.85] tracking-tight mb-6 lg:mb-8">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                Transform Your Game.
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                Get Recruited.
              </span>
              <span 
                className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-primary mt-2 glow-primary-ultra"
              >
                Go Pro.
              </span>
            </h1>

            {/* Description */}
            <p className="font-oswald text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
              The only Arizona academy where elite D1/pro coaches, MLB-grade technology, and complete 
              athletic development combine to build college-ready players — guaranteed.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-10">
              <Button 
                size="lg"
                onClick={onCtaClick}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-lg lg:text-xl px-8 lg:px-10 py-6 lg:py-7 h-auto border-glow-ultra transition-all duration-300 hover:scale-105"
              >
                Start Free Evaluation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="group border-white/40 hover:bg-white/10 hover:border-primary/50 text-foreground font-bebas uppercase tracking-[0.15em] text-lg lg:text-xl px-8 lg:px-10 py-6 lg:py-7 h-auto backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Athletes Train
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 text-foreground/60">
              <div className="flex items-center gap-2 group">
                <Trophy className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-base lg:text-lg">50+ College Commits</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-base lg:text-lg">500+ Athletes Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade with glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/10 blur-[100px]" />
    </section>
  );
};

export default HeroSection;