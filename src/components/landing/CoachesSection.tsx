import { useState } from "react";
import { Award, Star, Users, X, ChevronRight } from "lucide-react";
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
    bio: "Played at Oregon, drafted by the Diamondbacks. Knows exactly what college coaches want to see.",
    highlights: ["4 years D1 at Oregon", "Drafted by Arizona Diamondbacks", "50+ athletes coached"],
    specialty: "Complete Player Development"
  },
  { 
    name: "Coach Joe", 
    image: coachJoe, 
    role: "Hitting Coordinator", 
    cred: "MLB Scout",
    bio: "Years evaluating talent for MLB. He spots and fixes swing flaws that other coaches miss.",
    highlights: ["MLB scouting experience", "Expert swing analysis", "Data-driven approach"],
    specialty: "Swing Mechanics"
  },
  { 
    name: "Coach Eric", 
    image: coachEric, 
    role: "Pitching Coordinator", 
    cred: "2nd Round Pick",
    bio: "High draft pick with an 8-year pro career. Teaches mechanics and mentality that separate elite pitchers.",
    highlights: ["2nd round MLB draft pick", "8-year pro career", "Velocity specialist"],
    specialty: "Pitching & Velocity"
  },
  { 
    name: "Coach Terrell", 
    image: coachTerrell, 
    role: "Development Coach", 
    cred: "D1 Player",
    bio: "Four years at a Power 5 program. Turns raw athleticism into polished, recruitable skill sets.",
    highlights: ["Power 5 program athlete", "Recruiting expert", "Athletic development"],
    specialty: "Athletic Development"
  },
  { 
    name: "Coach Will", 
    image: coachNeil, 
    role: "Academy Director", 
    cred: "13+ Years",
    bio: "Built LPA from the ground up. Has guided hundreds of athletes from beginners to college commits.",
    highlights: ["Founded LPA", "500+ athletes developed", "Program design expert"],
    specialty: "Program Leadership"
  },
];

const stats = [
  { icon: Award, value: "50+", label: "Years Pro Experience" },
  { icon: Star, value: "5", label: "D1 Programs" },
  { icon: Users, value: "500+", label: "Athletes Developed" },
];

const CoachesSection = () => {
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedCoach(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCoach(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[180px] -translate-y-1/2" />
      <div className="absolute inset-0 cinematic-vignette opacity-20" />
      
      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Header + Stats in one row on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-10">
          <div className="lg:max-w-xl">
            <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-[0.3em] mb-3 glow-primary">
              Learn From The Best
            </p>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg">
              Coaches Who've Been There
            </h2>
          </div>
          
          {/* Stats inline on desktop */}
          <div className="flex gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-primary hidden sm:block" />
                  <span className="font-bebas text-2xl lg:text-3xl text-foreground glow-primary">{stat.value}</span>
                </div>
                <span className="font-oswald text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Coaches Grid - All 5 in one row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {coaches.map((coach, index) => (
            <div 
              key={index} 
              onClick={() => openModal(index)}
              className="group relative cursor-pointer"
            >
              <div 
                className="relative aspect-[3/4] overflow-hidden bg-card hover:ring-2 hover:ring-primary/50 transition-all duration-300"
                style={{ boxShadow: '0 15px 30px -10px rgba(0,0,0,0.5)' }}
              >
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />
                
                {/* Credential badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-primary text-primary-foreground font-bebas text-[9px] lg:text-[10px] px-1.5 py-0.5 uppercase"
                    style={{ boxShadow: '0 0 12px hsl(271 81% 56% / 0.5)' }}>
                    {coach.cred}
                  </span>
                </div>
                
                {/* Click indicator */}
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                  <h3 className="font-bebas text-base lg:text-lg text-foreground uppercase drop-shadow-lg leading-tight">
                    {coach.name}
                  </h3>
                  <p className="font-oswald text-[10px] lg:text-xs text-primary glow-primary">
                    {coach.role}
                  </p>
                </div>
              </div>
              
              {/* Glow on hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-primary/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        {/* Hint text */}
        <div className="text-center mt-8 lg:mt-10">
          <p className="font-oswald text-xs lg:text-sm text-muted-foreground">
            <span className="text-primary glow-primary">Click</span> any coach to learn more
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedCoach !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
          
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 80px hsl(271 81% 56% / 0.25)' }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex flex-col md:flex-row bg-card border border-border/50">
              <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto flex-shrink-0">
                <img src={coaches[selectedCoach].image} alt={coaches[selectedCoach].name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground font-bebas text-sm px-3 py-1.5 uppercase" style={{ boxShadow: '0 0 25px hsl(271 81% 56% / 0.7)' }}>
                    {coaches[selectedCoach].cred}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em] mb-2 glow-primary">{coaches[selectedCoach].specialty}</p>
                <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-2">{coaches[selectedCoach].name}</h3>
                <p className="font-oswald text-base md:text-lg text-primary mb-4 glow-primary">{coaches[selectedCoach].role}</p>
                <p className="font-oswald text-sm md:text-base text-foreground/80 leading-relaxed mb-6">{coaches[selectedCoach].bio}</p>
                
                <div>
                  <p className="font-bebas text-xs text-muted-foreground uppercase tracking-wider mb-3">Career Highlights</p>
                  <div className="flex flex-wrap gap-2">
                    {coaches[selectedCoach].highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-primary/15 border border-primary/30 px-3 py-1.5 font-oswald text-xs text-foreground/90">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoachesSection;