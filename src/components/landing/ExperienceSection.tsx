import { useState, useEffect, useRef } from "react";
import { Crown, Shield, Shirt, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Crown,
    title: "Personal Locker Room",
    description: "Every athlete gets their own assigned space — a home base built for focus and accountability."
  },
  {
    icon: Shield,
    title: "Pro-Grade Equipment",
    description: "Game bats, training gear, and tech tools provided — no guessing what you need."
  },
  {
    icon: Shirt,
    title: "LPA Branded Attire",
    description: "Custom jerseys, training gear, and team apparel that builds identity and pride."
  },
];

const ExperienceSection = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Image Side */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-lg">
              {/* Placeholder — replace with real locker room / gear photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-primary/10 flex items-center justify-center">
                <div className="text-center px-6">
                  <Crown className="w-12 h-12 md:w-16 md:h-16 text-primary/40 mx-auto mb-4" />
                  <p className="font-oswald text-sm text-muted-foreground/50 uppercase tracking-wider">
                    Locker Room / Gear Photo
                  </p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 border border-primary/20 rounded-lg pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="font-oswald text-[10px] md:text-xs lg:text-sm text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3 glow-primary">
              The Full Athlete Experience
            </p>
            <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg mb-4 md:mb-6">
              More Than <span className="text-primary glow-primary-intense">Training</span>
            </h2>
            <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              At LPA, athletes don't just train — they belong. From personal locker rooms to pro-grade equipment and branded team attire, every detail is designed to build identity, discipline, and pride.
            </p>

            {/* Highlight Items */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div 
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/15 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.15)' }}
                  >
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg lg:text-xl text-foreground uppercase leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-oswald text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/experience">
              <Button 
                variant="outline" 
                className="group font-bebas uppercase tracking-widest text-sm lg:text-base border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-5 h-auto transition-all duration-300"
              >
                See the Full Experience
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
