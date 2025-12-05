import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const coaches = [
  { name: "Mark", image: coachMarcus, role: "Head Coach", cred: "Former D1 & Pro" },
  { name: "Joe", image: coachJoe, role: "Hitting", cred: "MLB Scout" },
  { name: "Eric", image: coachEric, role: "Pitching", cred: "2nd Round Pick" },
  { name: "Terrell", image: coachTerrell, role: "Development", cred: "D1 Player" },
  { name: "Will", image: coachNeil, role: "Director", cred: "13+ Years" },
];

const CoachesSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Ambient light */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            D1 & Pro Experience
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none mb-4">
            The Coaching Staff
          </h2>
          <p className="font-oswald text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
            Coaches who've played at the highest levels and know what it takes to get there.
          </p>
        </div>
        
        {/* Coaches */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {coaches.map((coach, index) => (
            <div key={index} className="group text-center w-32 md:w-44 lg:w-52">
              {/* Image */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-card">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Credential badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-primary text-primary-foreground font-bebas text-[10px] md:text-xs px-2 py-1 uppercase tracking-wider">
                    {coach.cred}
                  </span>
                </div>
              </div>
              
              {/* Info */}
              <h3 className="font-bebas text-lg md:text-xl text-foreground uppercase">{coach.name}</h3>
              <p className="font-oswald text-xs md:text-sm text-muted-foreground">{coach.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
