import { useState, useEffect, useRef } from "react";
import { Crown, Shield, Shirt, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lockerRoomImg from "@/assets/experience-locker-room.jpg";
import equipmentImg from "@/assets/experience-equipment.jpg";
import attireImg from "@/assets/experience-attire.jpg";

const RECRUITING_VIDEO_URL = `https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video/080824_player%20lounge.mp4`;

const highlights = [
  { icon: Shield, title: "Pro-Grade Equipment", description: "Game bats, batting gloves, position-specific gloves, helmets, and training gear for each athlete.", image: equipmentImg },
  { icon: Crown, title: "College & MLB Recruiting", description: "12 players committed in 18 months with MLB scouts and D1 connections on staff.", image: lockerRoomImg, video: RECRUITING_VIDEO_URL },
  { icon: Shirt, title: "Pro-Grade Uniforms", description: "Game uniforms, practice gear, travel gear, and team apparel that builds identity.", image: attireImg },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36">
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">The Full Experience</span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.88]">
              More Than<br /><span className="text-primary">Training</span>
            </h2>
          </div>
          <p className="font-oswald text-xs text-foreground/30 lg:max-w-xs lg:text-right">
            Athletes don't just train — they belong. Every detail builds identity and pride.
          </p>
        </div>

        {/* Three editorial image cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-[3/4] overflow-hidden cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {item.video ? (
                <video src={item.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-[1.13] transition-transform duration-700" style={{ transform: `translateY(${index * 2}%) scale(1.1)` }} />
              ) : (
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-[1.13] transition-transform duration-700" loading="lazy" style={{ transform: `translateY(${index * 2}%) scale(1.1)` }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase mb-1">{item.title}</h3>
                <p className="font-oswald text-xs text-foreground/50 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/experience">
            <Button variant="ghost" className="group font-bebas uppercase tracking-[0.2em] text-sm text-foreground/40 hover:text-primary px-0 h-auto py-2">
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
