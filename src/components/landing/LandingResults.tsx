import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";

const athletes = [
  { name: "Brayan Moreno", school: "Southwestern CC", image: brayanMoreno },
  { name: "Miles Keogh", school: "Coastal Carolina", image: milesKeogh },
  { name: "Preston Francis", school: "Glendale CC", image: prestonFrancis },
];

const LandingResults = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-2xl md:text-3xl text-center text-foreground mb-2 uppercase tracking-wide">
          Where LPA Athletes Go
        </h2>
        <p className="font-oswald text-sm text-center text-muted-foreground mb-8">
          Recent commitments from our program.
        </p>
        
        <div className="flex justify-center gap-4 md:gap-6">
          {athletes.map((athlete, index) => (
            <div key={index} className="relative flex-none w-28 md:w-40">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 rounded-b-lg">
                <div className="font-bebas text-xs text-foreground">{athlete.name}</div>
                <div className="font-oswald text-[10px] text-primary">{athlete.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingResults;
