import { useState, useEffect, useRef } from "react";
import { Crown, Shield, Shirt, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lockerRoomImg from "@/assets/experience-locker-room.jpg";
import equipmentImg from "@/assets/experience-equipment.jpg";
import attireImg from "@/assets/experience-attire.jpg";

const highlights = [
  {
    icon: Crown,
    title: "Personal Locker Room",
    description: "Every athlete gets their own assigned space — a home base built for focus and accountability.",
    image: lockerRoomImg,
  },
  {
    icon: Shield,
    title: "Pro-Grade Equipment",
    description: "Game bats, training gear, and tech tools provided — no guessing what you need.",
    image: equipmentImg,
  },
  {
    icon: Shirt,
    title: "LPA Branded Attire",
    description: "Custom jerseys, training gear, and team apparel that builds identity and pride.",
    image: attireImg,
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
      { threshold: 0.1 }
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
        {/* Header */}
        <div className={`text-center lg:text-left mb-8 md:mb-10 lg:mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-oswald text-[10px] md:text-xs lg:text-sm text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3 glow-primary">
            The Full Athlete Experience
          </p>
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg mb-3 md:mb-4">
            More Than <span className="text-primary glow-primary-intense">Training</span>
          </h2>
          <p className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            At LPA, athletes don't just train — they belong. From personal locker rooms to pro-grade equipment and branded team attire, every detail builds identity and pride.
          </p>
        </div>

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />

                {/* Icon badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/90 flex items-center justify-center"
                    style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}
                  >
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h3 className="font-bebas text-xl md:text-2xl lg:text-2xl text-foreground uppercase leading-tight mb-1 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="font-oswald text-xs lg:text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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
    </section>
  );
};

export default ExperienceSection;
