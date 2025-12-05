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
      
      // Only apply parallax when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (scrollProgress - 0.5) * 60; // Subtle 60px movement range
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Multi-layer background for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a' }} />
        <img 
          ref={imageRef}
          src={welcomeAthlete} 
          alt="LPA Athlete" 
          className="absolute right-0 top-1/2 h-[130%] w-full lg:w-3/4 xl:w-2/3 object-cover object-[70%_center] will-change-transform"
          style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px))` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Animated Headline */}
          <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-6">
            <span 
              className={`block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Welcome To
            </span>
            <span 
              className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Legendary Prep
            </span>
            <span 
              className={`block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Academy
            </span>
          </h2>
          
          {/* Animated Body Copy */}
          <div className="space-y-4 mb-6">
            <p 
              className={`font-oswald text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              LPA is where Arizona's most driven baseball athletes train to reach the next level 
              — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p 
              className={`font-oswald text-sm md:text-base text-foreground/80 leading-relaxed transition-all duration-700 ease-out ${
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
            className={`relative border-l-4 border-primary/70 pl-5 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-r-lg transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/80 to-primary/40" />
            <p className="font-oswald text-base md:text-lg text-foreground font-semibold mb-1">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-base md:text-lg text-primary italic">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
