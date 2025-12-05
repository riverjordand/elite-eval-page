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
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="relative py-20 lg:py-28 xl:py-32 overflow-hidden">
      {/* Background with athlete image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        
        {/* Athlete image positioned on right side */}
        <img src={welcomeAthlete} alt="LPA Athlete" className="absolute right-0 top-0 h-full w-full lg:w-3/4 xl:w-2/3 object-cover object-top" />
        
        {/* Dramatic gradient fade from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        {/* Atmospheric glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 cinematic-vignette opacity-75" />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Headline */}
          <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-6 lg:mb-8">
            <span className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Welcome To
            </span>
            <span className={`block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary glow-primary-intense transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '100ms'
          }}>
              Legendary Prep
            </span>
            <span className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '150ms'
          }}>
              Academy
            </span>
          </h2>
          
          {/* Body Copy */}
          <div className="space-y-4 lg:space-y-5 mb-6 lg:mb-8">
            <p className={`font-oswald text-base md:text-lg lg:text-xl text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
            transitionDelay: '250ms'
          }}>
              LPA is where Arizona's most driven baseball athletes train to reach the next level — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p className={`font-oswald text-base md:text-lg lg:text-xl text-foreground/85 leading-relaxed transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
            transitionDelay: '350ms'
          }}>
              Our athletes train with D1-level systems, professional coaching, and the same technology used by college programs and MLB player-development.
            </p>
          </div>
          
          {/* Highlight Box */}
          <div className={`relative border-l-4 border-primary pl-5 lg:pl-6 py-4 lg:py-5 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent rounded-r-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
          transitionDelay: '450ms',
          boxShadow: '0 0 50px hsl(271 81% 56% / 0.12)'
        }}>
            <p className="font-oswald text-base md:text-lg lg:text-xl text-foreground font-semibold mb-1">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-base md:text-lg lg:text-xl text-primary italic glow-primary">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default IntroSection;