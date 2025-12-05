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
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm px-3 py-1 mb-3 uppercase tracking-widest">
            50+ College Commits
          </div>
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight mb-2">
            Where LPA Athletes Go
          </h2>
          <p className="font-oswald text-xs md:text-sm text-muted-foreground max-w-md mx-auto">
            The path your athlete can take, too
          </p>
        </div>
        
        {/* Athletes grid */}
        <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative flex-none w-28 md:w-36 lg:w-44">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-2 md:p-3 rounded-b-lg">
                <div className="font-bebas text-[10px] md:text-xs text-foreground">{athlete.name}</div>
                <div className="font-oswald text-[9px] md:text-[10px] text-primary">{athlete.school}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-sm md:text-base px-5 md:px-6 py-3 md:py-4 h-auto"
            onClick={onCtaClick}
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingResults;
