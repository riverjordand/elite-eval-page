import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const coaches = [
  { name: "Eric", image: coachEric, role: "Head Coach" },
  { name: "Joe", image: coachJoe, role: "Pitching" },
  { name: "Marcus", image: coachMarcus, role: "Hitting" },
  { name: "Neil", image: coachNeil, role: "Strength" },
  { name: "Terrell", image: coachTerrell, role: "Development" },
];

const LandingCoachesCompact = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-2xl md:text-3xl text-center text-foreground mb-2 uppercase tracking-wide">
          Meet the Coaches
        </h2>
        <p className="font-oswald text-sm text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          Coaches who've lived it—and know exactly what it takes.
        </p>
        
        <div className="flex justify-center gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {coaches.map((coach, index) => (
            <div key={index} className="flex-none text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/50 mx-auto mb-2">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bebas text-sm text-foreground uppercase">{coach.name}</div>
              <div className="font-oswald text-xs text-muted-foreground">{coach.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCoachesCompact;
