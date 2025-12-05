import { useEffect, useRef, useState } from "react";
import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (scrollProgress - 0.5) * 60;
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      {/* Multi-layer cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <img 
          ref={imageRef}
          src={welcomeAthlete} 
          alt="LPA Athlete" 
          className="absolute right-0 top-1/2 h-[140%] w-full lg:w-3/4 xl:w-2/3 object-cover object-[70%_center] lg:object-[70%_30%] will-change-transform"
          style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px))` }}
        />
        {/* Dramatic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent" />
        
        {/* Atmospheric glows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px]" />
        <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 cinematic-vignette opacity-50" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* Animated Headline */}
          <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-8 lg:mb-10">
            <span 
              className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Welcome To
            </span>
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-primary glow-primary-intense transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Legendary Prep
            </span>
            <span 
              className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Academy
            </span>
          </h2>
          
          {/* Animated Body Copy */}
          <div className="space-y-5 lg:space-y-6 mb-8 lg:mb-10">
            <p 
              className={`font-oswald text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              LPA is where Arizona's most driven baseball athletes train to reach the next level 
              — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p 
              className={`font-oswald text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              Our athletes train with D1-level systems, professional coaching, and the same 
              technology used by college programs and MLB player-development.
            </p>
          </div>
          
          {/* Animated Highlight Box */}
          <div 
            className={`relative border-l-4 border-primary pl-6 lg:pl-8 py-5 lg:py-6 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent rounded-r-lg backdrop-blur-sm transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ 
              transitionDelay: '700ms',
              boxShadow: '0 0 60px hsl(271 81% 56% / 0.15), inset 0 0 30px hsl(271 81% 56% / 0.05)'
            }}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/80 to-primary/40" />
            <p className="font-oswald text-lg md:text-xl lg:text-2xl text-foreground font-semibold mb-2">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-lg md:text-xl lg:text-2xl text-primary italic glow-primary">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom transition glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-24 bg-primary/5 blur-[80px]" />
    </section>
  );
};

export default IntroSection;