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
    <section ref={sectionRef} className="relative py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative z-20 mx-auto px-6 lg:px-12">
        {/* Desktop: Side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-6">
              <span 
                className={`block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground drop-shadow-lg transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Welcome To
              </span>
              <span 
                className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary glow-primary-intense transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                Legendary Prep Academy
              </span>
            </h2>
            
            <div className="space-y-4 mb-6">
              <p 
                className={`font-oswald text-sm md:text-base lg:text-lg text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's varsity, college baseball, or pro development.
              </p>
              <p 
                className={`font-oswald text-sm md:text-base lg:text-lg text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Our athletes train with D1-level systems, professional coaching, and the same technology used by MLB player-development.
              </p>
            </div>
            
            {/* Highlight Box */}
            <div 
              className={`relative border-l-4 border-primary pl-5 py-4 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent rounded-r-lg transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                transitionDelay: '400ms',
                boxShadow: '0 0 40px hsl(271 81% 56% / 0.1)'
              }}
            >
              <p className="font-oswald text-base lg:text-lg text-foreground font-semibold">
                LPA is not a casual training facility.
              </p>
              <p className="font-oswald text-base lg:text-lg text-primary italic glow-primary">
                It's where athletes commit, develop, and excel.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div 
            className={`order-1 lg:order-2 relative transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <img 
                src={welcomeAthlete} 
                alt="LPA Athlete Training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Glow effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;