import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 150); return () => clearTimeout(t); }, []);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col overflow-hidden">
      {/* Parallax video — moves slower than scroll */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.35}px) scale(1.15)` }}
      >
        <source src="/hero-training.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

      {/* Content — moves slightly opposite for depth */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >

        <h1 className="font-bebas uppercase leading-[0.85] tracking-tight mb-6">
          <span className={`block text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] text-foreground transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Built Different.
          </span>
          <span className={`block text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] text-primary transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Play Different.
          </span>
        </h1>

        <p className={`font-bebas text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.15em] text-foreground/70 mb-2 transition-all duration-700 delay-[600ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Legendary Prep Academy
        </p>
        <p className={`font-oswald text-xs md:text-sm uppercase tracking-[0.4em] text-foreground/50 mb-10 max-w-lg transition-all duration-700 delay-[700ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Arizona's Premier Baseball Development Academy
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-[800ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/appointments">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto transition-all duration-300">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/experience">
            <Button size="lg" variant="ghost" className="font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300">
              Explore the Academy
            </Button>
          </Link>
        </div>
      </div>

      <div className={`relative z-10 flex justify-center pb-8 transition-all duration-700 delay-[1000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-px bg-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
