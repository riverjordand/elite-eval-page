import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";

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
                LPA is where the most driven middle and high school baseball athletes come to develop and maximize their potential.
              </p>
              <p className="font-oswald text-sm md:text-base text-foreground/50 leading-relaxed">
                Our athletes train in a professional environment and system with coaches, scouts, and technology found at the most elite level of the game.
              </p>
            </div>
            
            {/* Pull quote */}
            <div className="border-l-2 border-primary pl-6">
              <p className="font-oswald text-sm md:text-base text-foreground/70 leading-relaxed italic">
                "Winning for LPA is a by-product of a strategic and synergistic relationship of baseball skill development, strength and conditioning, injury prevention, and mental performance all under one roof in a culture designed to bulletproof a player for the next level."
              </p>
            </div>
          </div>
          
          {/* Image column */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={milesKeogh} 
                alt="Miles Keogh - Committed to Coastal Carolina" 
                className="w-full h-full object-cover object-[center_20%] will-change-transform scale-110"
                style={{ transform: `translateY(${imgOffset}px) scale(1.1)` }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Committed badge with Coastal logo */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                <div className="bg-primary text-primary-foreground font-bebas text-xs md:text-sm px-3 py-1.5 uppercase tracking-[0.2em]">
                  Committed
                </div>
              </div>
              
              {/* Athlete info + school logo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-bebas text-2xl md:text-3xl text-foreground uppercase leading-tight">Miles Keogh</h3>
                    <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em]">Coastal Carolina</p>
                  </div>
                  <img 
                    src="/colleges/east-carolina.png" 
                    alt="Coastal Carolina" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert opacity-60"
                  />
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
