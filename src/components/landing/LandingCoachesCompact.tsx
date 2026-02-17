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
    <section className="relative py-fluid-section overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 section-dark" />
      
      {/* Dramatic lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      
      <div className="container relative mx-auto px-fluid-container-px">
        {/* Section header */}
        <div className="text-center mb-fluid-xl">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-fluid-xs px-fluid-sm py-1.5 mb-fluid-xs uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            D1 & Pro Experience
          </div>
          <h2 className="font-bebas text-fluid-4xl text-foreground uppercase tracking-tight mb-fluid-xs glow-primary">
            Meet The Coaches
          </h2>
          <p className="font-oswald text-fluid-base text-muted-foreground max-w-2xl mx-auto">
            Coaches who've lived it—and know exactly what it takes
          </p>
        </div>
        
        {/* Coaches grid */}
        <div className="flex justify-center gap-fluid-gap-lg overflow-x-auto pb-2 scrollbar-hide">
          {coaches.map((coach, index) => (
            <div key={index} className="flex-none text-center group">
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mb-fluid-xs">
                {/* Glow ring on hover */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden border-2 border-border/30 group-hover:border-primary/60 transition-all duration-500 shadow-2xl">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                
                {/* Credential badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bebas text-fluid-xs px-3 md:px-4 py-1 md:py-1.5 rounded whitespace-nowrap shadow-lg border-glow">
                  {coach.credential}
                </div>
              </div>
              <div className="font-bebas text-fluid-lg text-foreground uppercase group-hover:text-primary transition-colors">{coach.name}</div>
              <div className="font-oswald text-fluid-sm text-muted-foreground">{coach.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCoachesCompact;
