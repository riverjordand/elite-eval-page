import { Award, Star, Users } from "lucide-react";
import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const coaches = [
  { 
    name: "Coach Marcus", 
    image: coachMarcus, 
    role: "Head Coach", 
    cred: "Former D1 & Pro",
    bio: "Played at Oregon, drafted by the Diamondbacks. Knows exactly what college coaches want to see because he's been there."
  },
  { 
    name: "Coach Joe", 
    image: coachJoe, 
    role: "Hitting Coordinator", 
    cred: "MLB Scout Experience",
    bio: "Spent years evaluating talent for MLB organizations. He can spot — and fix — swing flaws that other coaches miss."
  },
  { 
    name: "Coach Eric", 
    image: coachEric, 
    role: "Pitching Coordinator", 
    cred: "2nd Round Pick",
    bio: "A high draft pick who built an 8-year pro career. Teaches the mechanics and mentality that separate good from elite."
  },
  { 
    name: "Coach Terrell", 
    image: coachTerrell, 
    role: "Development Coach", 
    cred: "D1 Player",
    bio: "Four years at a Power 5 program. Specializes in turning raw athleticism into polished, recruitable skill sets."
  },
  { 
    name: "Coach Will", 
    image: coachNeil, 
    role: "Academy Director", 
    cred: "13+ Years Development",
    bio: "Built LPA from the ground up. Has guided hundreds of athletes from beginners to college commits."
  },
];

const stats = [
  { icon: Award, value: "50+", label: "Years Combined Pro Experience" },
  { icon: Star, value: "5", label: "D1 Programs Represented" },
  { icon: Users, value: "500+", label: "Athletes Developed" },
];

const CoachesSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <p className="font-oswald text-xs text-primary uppercase tracking-[0.3em] mb-3">
            Learn From The Best
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-4">
            Coaches Who've Been There
          </h2>
          <p className="font-oswald text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Every coach on staff has played at the D1 or professional level. They don't just teach baseball — 
            they've lived the journey your athlete is trying to make.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-3 lg:gap-6 bg-card/50 backdrop-blur border border-border/30 p-4 lg:p-5 mb-8 lg:mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-primary hidden sm:block" />
                <span className="font-bebas text-xl md:text-2xl lg:text-3xl text-foreground">{stat.value}</span>
              </div>
              <span className="font-oswald text-[9px] md:text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Coaches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {coaches.map((coach, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-card">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span className="inline-block bg-primary text-primary-foreground font-bebas text-[9px] px-1.5 py-0.5 uppercase tracking-wider">
                    {coach.cred}
                  </span>
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-bebas text-base md:text-lg text-foreground uppercase">{coach.name}</h3>
                  <p className="font-oswald text-[10px] text-primary">{coach.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;