import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const coaches = [
  { name: "Mark", image: coachMarcus, role: "Head Coach", cred: "Former D1 & Pro" },
  { name: "Joe", image: coachJoe, role: "Hitting Coordinator", cred: "MLB Scout" },
  { name: "Eric", image: coachEric, role: "Pitching Coordinator", cred: "2nd Round Pick" },
  { name: "Terrell", image: coachTerrell, role: "Development Coach", cred: "D1 Player" },
  { name: "Will", image: coachNeil, role: "Director", cred: "13+ Years" },
];

const CoachesSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
            D1 & Pro Experience
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none mb-4 lg:mb-6">
            The Coaching Staff
          </h2>
          <p className="font-oswald text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto">
            Coaches who've played at the highest levels and know what it takes to get there.
          </p>
        </div>
        
        {/* Coaches - 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="group text-center">
              <div className="relative aspect-[3/4] mb-3 lg:mb-4 overflow-hidden bg-card">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-2 md:bottom-3 lg:bottom-4 left-2 md:left-3 lg:left-4 right-2 md:right-3 lg:right-4">
                  <span className="inline-block bg-primary text-primary-foreground font-bebas text-[9px] md:text-[10px] lg:text-xs px-2 py-1 uppercase tracking-wider">
                    {coach.cred}
                  </span>
                </div>
              </div>
              
              <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase">{coach.name}</h3>
              <p className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground">{coach.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
