import { useState } from "react";
import { Award, Star, Users, X, ChevronDown } from "lucide-react";
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
    bio: "Played at Oregon, drafted by the Diamondbacks. Knows exactly what college coaches want to see because he's been there.",
    highlights: ["4 years D1 at Oregon", "Drafted by Arizona Diamondbacks", "50+ athletes coached to college"]
  },
  { 
    name: "Coach Joe", 
    image: coachJoe, 
    role: "Hitting Coordinator", 
    cred: "MLB Scout Experience",
    bio: "Spent years evaluating talent for MLB organizations. He can spot — and fix — swing flaws that other coaches miss.",
    highlights: ["MLB scouting experience", "Expert swing analysis", "Data-driven approach"]
  },
  { 
    name: "Coach Eric", 
    image: coachEric, 
    role: "Pitching Coordinator", 
    cred: "2nd Round Pick",
    bio: "A high draft pick who built an 8-year pro career. Teaches the mechanics and mentality that separate good from elite.",
    highlights: ["2nd round MLB draft pick", "8-year pro career", "Velocity development specialist"]
  },
  { 
    name: "Coach Terrell", 
    image: coachTerrell, 
    role: "Development Coach", 
    cred: "D1 Player",
    bio: "Four years at a Power 5 program. Specializes in turning raw athleticism into polished, recruitable skill sets.",
    highlights: ["Power 5 program athlete", "Recruiting guidance expert", "Athletic development focus"]
  },
  { 
    name: "Coach Will", 
    image: coachNeil, 
    role: "Academy Director", 
    cred: "13+ Years Development",
    bio: "Built LPA from the ground up. Has guided hundreds of athletes from beginners to college commits.",
    highlights: ["Founded LPA", "500+ athletes developed", "Program design expert"]
  },
];

const stats = [
  { icon: Award, value: "50+", label: "Years Combined Pro Experience" },
  { icon: Star, value: "5", label: "D1 Programs Represented" },
  { icon: Users, value: "500+", label: "Athletes Developed" },
];

const CoachesSection = () => {
  const [expandedCoach, setExpandedCoach] = useState<number | null>(null);

  const toggleCoach = (index: number) => {
    setExpandedCoach(expandedCoach === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Atmospheric glows */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14 xl:mb-16">
          <p className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-4 glow-primary">
            Learn From The Best
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-5 lg:mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            Coaches Who've Been There
          </h2>
          <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every coach on staff has played at the D1 or professional level. They don't just teach baseball — 
            they've lived the journey your athlete is trying to make.
          </p>
        </div>

        {/* Stats Bar */}
        <div 
          className="grid grid-cols-3 gap-4 lg:gap-8 bg-card/40 backdrop-blur-sm border border-border/30 p-5 lg:p-8 mb-10 lg:mb-14"
          style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 60px rgba(107,63,175,0.05)' }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary hidden sm:block group-hover:scale-110 transition-transform" />
                <span className="font-bebas text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground glow-primary">{stat.value}</span>
              </div>
              <span className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Coaches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {coaches.map((coach, index) => {
            const isExpanded = expandedCoach === index;
            
            return (
              <div 
                key={index} 
                className={`relative transition-all duration-500 ${
                  isExpanded ? 'col-span-2 md:col-span-3 lg:col-span-2 row-span-2 z-20' : 'z-10'
                }`}
              >
                <div 
                  onClick={() => toggleCoach(index)}
                  className={`relative overflow-hidden bg-card cursor-pointer transition-all duration-500 ${
                    isExpanded 
                      ? 'aspect-auto min-h-[400px] md:min-h-[450px]' 
                      : 'aspect-[3/4]'
                  } ${isExpanded ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-primary/50'}`}
                  style={{ 
                    boxShadow: isExpanded 
                      ? '0 0 80px hsl(271 81% 56% / 0.4), 0 30px 60px -15px rgba(0,0,0,0.7)' 
                      : '0 25px 50px -12px rgba(0,0,0,0.6)' 
                  }}
                >
                  {/* Image */}
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isExpanded ? 'brightness-[0.3] scale-110' : 'brightness-100 hover:scale-105'
                    }`}
                  />
                  
                  {/* Default overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${
                    isExpanded ? 'opacity-0' : 'opacity-100'
                  }`} />
                  
                  {/* Glowing credential badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="relative">
                      <div 
                        className={`absolute inset-0 bg-primary blur-lg transition-all duration-500 ${
                          isExpanded ? 'opacity-100 blur-xl' : 'opacity-60'
                        }`}
                        style={{ transform: 'scale(1.5)' }}
                      />
                      <span 
                        className="relative inline-block bg-primary text-primary-foreground font-bebas text-[10px] lg:text-xs px-2 py-1 uppercase tracking-wider border border-primary-foreground/20"
                        style={{ boxShadow: '0 0 20px hsl(271 81% 56% / 0.6)' }}
                      >
                        {coach.cred}
                      </span>
                    </div>
                  </div>
                  
                  {/* Expand indicator - only show when not expanded */}
                  {!isExpanded && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ChevronDown className="w-4 h-4 text-white/80" />
                      </div>
                    </div>
                  )}
                  
                  {/* Close button - only show when expanded */}
                  {isExpanded && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary transition-colors">
                        <X className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                  
                  {/* Default info - visible when collapsed */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 lg:p-5 transition-all duration-500 ${
                    isExpanded ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase drop-shadow-lg">
                      {coach.name}
                    </h3>
                    <p className="font-oswald text-xs lg:text-sm text-primary glow-primary">
                      {coach.role}
                    </p>
                  </div>
                  
                  {/* Expanded content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-5 lg:p-8 transition-all duration-500 ${
                    isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}>
                    {/* Name and role */}
                    <div className="mb-4">
                      <h3 className="font-bebas text-3xl lg:text-4xl text-foreground uppercase drop-shadow-lg mb-1">
                        {coach.name}
                      </h3>
                      <p className="font-oswald text-sm lg:text-base text-primary glow-primary">
                        {coach.role}
                      </p>
                    </div>
                    
                    {/* Bio */}
                    <p className="font-oswald text-sm lg:text-base text-foreground/90 leading-relaxed mb-5">
                      {coach.bio}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      <p className="font-bebas text-xs text-primary uppercase tracking-wider">Career Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {coach.highlights.map((highlight, hIndex) => (
                          <span 
                            key={hIndex}
                            className="inline-block bg-primary/20 border border-primary/30 px-3 py-1 font-oswald text-xs text-foreground/80"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated borders when expanded */}
                  {isExpanded && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/80 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-primary" />
                      <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary via-primary/80 to-transparent" />
                      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/80 to-primary" />
                    </div>
                  )}
                </div>
                
                {/* Glow under card */}
                <div 
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-xl transition-opacity duration-500 ${
                    isExpanded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="font-oswald text-sm lg:text-base text-muted-foreground">
            <span className="text-primary glow-primary">Click</span> on any coach to learn more about their journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;