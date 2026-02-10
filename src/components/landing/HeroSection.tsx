import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lpaBolt from "@/assets/lpa-badge-cactus.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
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
      
      {/* Clean overlay - just darken, no noise */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full pb-20 md:pb-28 lg:pb-32 pt-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            {/* Logo mark */}
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="w-auto h-10 md:h-14 lg:h-16 object-contain mb-6 md:mb-8 opacity-90"
            />

            {/* Headline - clean, no glow noise */}
            <h1 className="font-bebas uppercase leading-[0.88] tracking-tight mb-6 md:mb-8">
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
                Transform Your Game.
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
                Get Recruited.
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary mt-1">
                Go Pro.
              </span>
            </h1>

            {/* Description - tighter */}
            <p className="font-oswald text-sm md:text-base lg:text-lg text-foreground/70 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Arizona's premier baseball academy where elite coaching, MLB-grade technology, and complete athletic development build college-ready players.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/appointments">
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto transition-all duration-300 hover:scale-[1.02]"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/experience">
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-bebas uppercase tracking-widest text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto border-foreground/20 text-foreground/80 hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-300"
                >
                  Explore LPA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clean bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
