import { useEffect, useRef, useState } from "react";
import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background image - right side */}
      <div className="absolute inset-0">
        <img src={welcomeAthlete} alt="LPA Athlete" className="absolute right-0 top-0 h-full w-full lg:w-2/3 object-cover object-[center_20%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 via-45% to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="max-w-xl">
          <p className={`font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Welcome to LPA
          </p>
          
          <h2 className={`font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[0.9] mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '100ms' }}>
            Where Elite Athletes<br />
            <span className="text-primary">Are Made</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className={`font-oswald text-sm md:text-base lg:text-lg text-foreground/70 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p className={`font-oswald text-sm md:text-base lg:text-lg text-foreground/70 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
              Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
            </p>
          </div>
          
          {/* Accent callout */}
          <div className={`border-l-2 border-primary pl-5 py-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            <p className="font-oswald text-sm md:text-base text-foreground/90 font-semibold">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-sm md:text-base text-primary">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
