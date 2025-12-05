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
    <section className="relative py-16 md:py-20 bg-card/50 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-sm px-4 py-1 mb-4 uppercase tracking-widest">
            D1 & Pro Experience
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight mb-3">
            Meet The Coaches
          </h2>
          <p className="font-oswald text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Coaches who've lived it—and know exactly what it takes
          </p>
        </div>
        
        {/* Coaches grid */}
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {coaches.map((coach, index) => (
            <div key={index} className="flex-none text-center group">
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3">
                {/* Image */}
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Credential badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bebas text-[10px] md:text-xs px-2 py-0.5 rounded whitespace-nowrap">
                  {coach.credential}
                </div>
              </div>
              <div className="font-bebas text-sm md:text-base text-foreground uppercase">{coach.name}</div>
              <div className="font-oswald text-xs text-muted-foreground">{coach.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCoachesCompact;
