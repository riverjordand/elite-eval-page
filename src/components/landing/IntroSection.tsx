import { useEffect, useRef, useState } from "react";
import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Multi-layer background for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <img 
          src={welcomeAthlete} 
          alt="LPA Athlete" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-full lg:w-3/4 xl:w-2/3 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Animated Headline */}
          <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-8">
            <span 
              className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Welcome To
            </span>
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Legendary Prep
            </span>
            <span 
              className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Academy
            </span>
          </h2>
          
          {/* Animated Body Copy */}
          <div className="space-y-6 mb-8">
            <p 
              className={`font-oswald text-base md:text-lg text-foreground/80 leading-relaxed transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              LPA is where Arizona's most driven baseball athletes train to reach the next level 
              — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p 
              className={`font-oswald text-base md:text-lg text-foreground/80 leading-relaxed transition-all duration-700 ease-out ${
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
            className={`relative border-l-4 border-primary/70 pl-6 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-r-lg transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/80 to-primary/40" />
            <p className="font-oswald text-lg md:text-xl text-foreground font-semibold mb-1">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-lg md:text-xl text-primary italic">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
