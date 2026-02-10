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
            <p className="font-oswald text-xs lg:text-sm text-accent uppercase tracking-[0.3em] mb-3 glow-accent">
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
                    style={{ boxShadow: '0 0 12px hsl(var(--primary) / 0.5)' }}>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
          
          {/* Ambient glow effects */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
          
          <div 
            className="relative w-full max-w-5xl xl:max-w-6xl max-h-[90vh] overflow-hidden animate-scale-in rounded-2xl lg:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-colors" />
            </button>
            
            {/* Desktop: Side by side large layout */}
            <div className="flex flex-col lg:flex-row bg-gradient-to-br from-card via-card to-card/95 border border-white/5 overflow-hidden">
              {/* Image side - portrait oriented for coaches */}
              <div className="relative w-full lg:w-2/5 xl:w-1/3 aspect-[3/4] lg:aspect-auto lg:min-h-[550px] xl:min-h-[600px] flex-shrink-0">
                <img 
                  src={coaches[selectedCoach].image} 
                  alt={coaches[selectedCoach].name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                
                {/* Credential badge - larger and more prominent */}
                <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
                  <span 
                    className="bg-primary text-primary-foreground font-bebas text-base lg:text-xl px-4 lg:px-6 py-2 lg:py-3 uppercase tracking-wider rounded-lg" 
                    style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }}
                  >
                    {coaches[selectedCoach].cred}
                  </span>
                </div>
              </div>
              
              {/* Content side - more spacious */}
              <div className="flex-1 p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  {/* Header */}
                  <div>
                    <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4 glow-primary">
                      {coaches[selectedCoach].specialty}
                    </p>
                    <h3 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-[0.9] mb-3 lg:mb-4">
                      {coaches[selectedCoach].name}
                    </h3>
                    <p className="font-oswald text-lg lg:text-xl xl:text-2xl text-primary glow-primary">
                      {coaches[selectedCoach].role}
                    </p>
                  </div>
                  
                  {/* Bio */}
                  <p className="font-oswald text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed border-l-4 border-primary/30 pl-5 lg:pl-6">
                    {coaches[selectedCoach].bio}
                  </p>
                  
                  {/* Career highlights */}
                  <div>
                    <p className="font-bebas text-sm lg:text-base text-muted-foreground uppercase tracking-wider mb-4 lg:mb-5">
                      Career Highlights
                    </p>
                    <div className="flex flex-wrap gap-3 lg:gap-4">
                      {coaches[selectedCoach].highlights.map((highlight, hIndex) => (
                        <div 
                          key={hIndex} 
                          className="flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 lg:px-5 py-3 lg:py-4 rounded-lg hover:bg-primary/15 hover:border-primary/30 transition-colors"
                        >
                          <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary flex-shrink-0" />
                          <span className="font-oswald text-sm lg:text-base text-foreground/90">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated borders */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl lg:rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoachesSection;