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
    <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`max-w-2xl mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
            The Full Athlete Experience
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none mb-3">
            More Than <span className="text-primary">Training</span>
          </h2>
          <p className="font-oswald text-sm md:text-base text-foreground/50">
            At LPA, athletes don't just train — they belong. From personal locker rooms to pro-grade equipment and branded team attire.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Icon */}
                <div className="absolute top-3 left-3">
                  <div className="w-9 h-9 bg-primary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bebas text-xl text-foreground uppercase mb-1">{item.title}</h3>
                  <p className="font-oswald text-xs text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/experience">
            <Button
              variant="outline"
              className="group font-bebas uppercase tracking-widest text-sm border-border/30 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary px-8 py-5 h-auto transition-all duration-300"
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
