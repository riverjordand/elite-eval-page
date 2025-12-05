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
    bio: "Played at Oregon, drafted by the Diamondbacks. Knows exactly what college coaches want to see because he's been there.",
    highlight: true
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
        
        {/* Coaches Grid - Redesigned */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {coaches.map((coach, index) => (
            <div key={index} className="group relative">
              <div 
                className={`relative aspect-[3/4] overflow-hidden bg-card transition-all duration-500 ${
                  coach.highlight ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ 
                  boxShadow: coach.highlight 
                    ? '0 0 60px hsl(271 81% 56% / 0.3), 0 25px 50px -12px rgba(0,0,0,0.6)' 
                    : '0 25px 50px -12px rgba(0,0,0,0.6)' 
                }}
              >
                {/* Image */}
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                />
                
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                
                {/* Hover overlay - bio reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Glowing credential badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="relative">
                    {/* Glow effect behind badge */}
                    <div 
                      className="absolute inset-0 bg-primary blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"
                      style={{ transform: 'scale(1.5)' }}
                    />
                    <span 
                      className="relative inline-block bg-primary text-primary-foreground font-bebas text-[10px] lg:text-xs px-2 py-1 uppercase tracking-wider border border-primary-foreground/20"
                      style={{ 
                        boxShadow: '0 0 20px hsl(271 81% 56% / 0.6), inset 0 0 10px hsl(271 81% 56% / 0.3)' 
                      }}
                    >
                      {coach.cred}
                    </span>
                  </div>
                </div>
                
                {/* Default info - visible normally */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase drop-shadow-lg">
                    {coach.name}
                  </h3>
                  <p className="font-oswald text-xs lg:text-sm text-primary glow-primary">
                    {coach.role}
                  </p>
                </div>
                
                {/* Hover info - bio reveal */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase mb-1 drop-shadow-lg">
                    {coach.name}
                  </h3>
                  <p className="font-oswald text-xs lg:text-sm text-primary glow-primary mb-3">
                    {coach.role}
                  </p>
                  <p className="font-oswald text-[11px] lg:text-xs text-foreground/90 leading-relaxed line-clamp-4">
                    {coach.bio}
                  </p>
                </div>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {/* Top border */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 origin-right" />
                  {/* Left border */}
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200 origin-top" />
                  {/* Right border */}
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300 origin-bottom" />
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-500" />
              </div>
              
              {/* Glow under card on hover */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="font-oswald text-sm lg:text-base text-muted-foreground">
            <span className="text-primary glow-primary">Hover</span> over each coach to learn more about their journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;