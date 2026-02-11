import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref: parallaxRef, offset: imgOffset } = useParallax(0.15);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Editorial two-column spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text column */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">The Academy</span>
            </div>
            
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[0.88] mb-8">
              Where Elite<br />
              Athletes Are<br />
              <span className="text-primary">Made</span>
            </h2>
            
            <div className="space-y-5 mb-8">
              <p className="font-oswald text-sm md:text-base text-foreground/50 leading-relaxed">
                LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
              </p>
              <p className="font-oswald text-sm md:text-base text-foreground/50 leading-relaxed">
                Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
              </p>
            </div>
            
            {/* Pull quote */}
            <div className="border-l-2 border-primary pl-6">
              <p className="font-bebas text-lg md:text-xl text-foreground/80 uppercase leading-tight">
                "This is not a casual training facility."
              </p>
              <p className="font-oswald text-sm text-primary mt-1">
                It's where athletes commit, develop, and excel.
              </p>
            </div>
          </div>
          
          {/* Image column */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={welcomeAthlete} 
                alt="LPA Athlete Training" 
                className="w-full h-full object-cover object-[center_20%] will-change-transform scale-110"
                style={{ transform: `translateY(${imgOffset}px) scale(1.1)` }}
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              
              {/* Editorial caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary" />
                  <span className="font-oswald text-[10px] text-foreground/60 uppercase tracking-[0.3em]">Gilbert, Arizona</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
