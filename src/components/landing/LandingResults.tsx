import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";
import prestonSigned from "@/assets/athletes/preston-francis-signed.jpg";

interface LandingResultsProps {
  onCtaClick?: () => void;
}

const athletes = [
  { name: "Preston Francis", school: "Glendale CC", image: prestonFrancis },
  { name: "Brayan Moreno", school: "Southwestern CC", image: brayanMoreno },
  { name: "Miles Keogh", school: "Coastal Carolina", image: milesKeogh },
  { name: "Preston Francis", school: "Signed", image: prestonSigned },
];

const LandingResults = ({ onCtaClick }: LandingResultsProps) => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm lg:text-base px-3 md:px-4 py-1 mb-3 md:mb-4 uppercase tracking-widest">
            50+ College Commits
          </div>
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-tight mb-2 md:mb-3">
            Where LPA Athletes Go
          </h2>
          <p className="font-oswald text-xs md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto">
            The path your athlete can take, too
          </p>
        </div>
        
        {/* Athletes grid */}
        <div className="flex justify-center gap-3 md:gap-6 lg:gap-8 mb-10 md:mb-14 overflow-x-auto pb-2 scrollbar-hide">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative flex-none w-32 md:w-48 lg:w-60 xl:w-72">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 md:p-5 lg:p-6 rounded-b-xl">
                <div className="font-bebas text-xs md:text-base lg:text-xl text-foreground">{athlete.name}</div>
                <div className="font-oswald text-[9px] md:text-sm lg:text-base text-primary">{athlete.school}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-sm md:text-lg lg:text-xl px-5 md:px-8 lg:px-10 py-3 md:py-5 lg:py-6 h-auto"
            onClick={onCtaClick}
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingResults;
