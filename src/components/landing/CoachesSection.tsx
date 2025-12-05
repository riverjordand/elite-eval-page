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
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14 xl:mb-16">
          <p className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-4">
            Learn From The Best
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-5 lg:mb-6">
            Coaches Who've Been There
          </h2>
          <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every coach on staff has played at the D1 or professional level. They don't just teach baseball — 
            they've lived the journey your athlete is trying to make.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 bg-card/50 backdrop-blur border border-border/30 p-5 lg:p-8 mb-10 lg:mb-14">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary hidden sm:block" />
                <span className="font-bebas text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground">{stat.value}</span>
              </div>
              <span className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Coaches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-primary text-primary-foreground font-bebas text-xs lg:text-sm px-2 py-1 uppercase tracking-wider">
                    {coach.cred}
                  </span>
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase">{coach.name}</h3>
                  <p className="font-oswald text-xs lg:text-sm text-primary">{coach.role}</p>
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