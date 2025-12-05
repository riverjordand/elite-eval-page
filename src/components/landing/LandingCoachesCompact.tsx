import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const coaches = [
  { name: "Mark", image: coachMarcus, title: "Head Coach", credential: "Former D1 & Pro" },
  { name: "Joe", image: coachJoe, title: "Hitting Coordinator", credential: "MLB Scout" },
  { name: "Eric", image: coachEric, title: "Coordinator", credential: "2nd Round Pick" },
  { name: "Terrell", image: coachTerrell, title: "Assistant", credential: "D1 Player" },
  { name: "Will", image: coachNeil, title: "CEO", credential: "13+ Years" },
];

const LandingCoachesCompact = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-card/50 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm lg:text-base px-3 md:px-4 py-1 mb-3 md:mb-4 uppercase tracking-widest">
            D1 & Pro Experience
          </div>
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-tight mb-2 md:mb-3">
            Meet The Coaches
          </h2>
          <p className="font-oswald text-xs md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto">
            Coaches who've lived it—and know exactly what it takes
          </p>
        </div>
        
        {/* Coaches grid */}
        <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto pb-2 scrollbar-hide">
          {coaches.map((coach, index) => (
            <div key={index} className="flex-none text-center group">
              <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 mb-3 md:mb-4">
                {/* Image */}
                <div className="w-full h-full rounded-xl overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Credential badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bebas text-[9px] md:text-xs lg:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded whitespace-nowrap">
                  {coach.credential}
                </div>
              </div>
              <div className="font-bebas text-sm md:text-lg lg:text-xl text-foreground uppercase">{coach.name}</div>
              <div className="font-oswald text-[10px] md:text-sm lg:text-base text-muted-foreground">{coach.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCoachesCompact;
