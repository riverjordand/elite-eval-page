import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";
import outlawsLogo from "@/assets/outlaws-burnt-orange.png";

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
                Our athletes train in a professional environment and system with coaches, scouts, technology found at the most elite level of the game.
              </p>
            </div>
            
            {/* Pull quote */}
            <div className="border-l-2 border-primary pl-6">
              <p className="font-oswald text-sm md:text-base text-foreground/70 leading-relaxed italic">
                "Winning for LPA is a by-product of a strategic and synergistic relationship of baseball skill development, strength and conditioning, injury prevention, and mental performance in a culture designed to bulletproof a player for the next level." - Will, CEO   
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
                style={{ transform: `translateY(${imgOffset}px) scale(1.1)` }} />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Committed badge */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                <div className="bg-primary text-primary-foreground font-bebas text-xs md:text-sm px-3 py-1.5 uppercase tracking-[0.2em]">
                  Committed
                </div>
              </div>
              
              {/* Outlaws logo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <img
                  src={outlawsLogo}
                  alt="LPA Outlaws"
                  className="w-28 md:w-36 object-contain opacity-80" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IntroSection;