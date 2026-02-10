import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lpaBolt from "@/assets/lpa-badge-cactus.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
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
      
      {/* Simple dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

      {/* Content - centered, editorial */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Small logo mark */}
        <img 
          src={lpaBolt} 
          alt="LPA" 
          className="w-auto h-8 md:h-10 object-contain mb-8 opacity-80"
        />

        {/* Editorial headline - massive, clean */}
        <h1 className="font-bebas uppercase leading-[0.85] tracking-tight mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] text-foreground">
            Built Different.
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] text-primary">
            Play Different.
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-oswald text-xs md:text-sm uppercase tracking-[0.4em] text-foreground/50 mb-10 max-w-lg">
          Arizona's premier baseball development academy
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/appointments">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/experience">
            <Button 
              size="lg"
              variant="ghost"
              className="font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              Explore the Academy
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="w-12 h-px bg-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
