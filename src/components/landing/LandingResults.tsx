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
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-sm px-4 py-1 mb-4 uppercase tracking-widest">
            50+ College Commits
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight mb-3">
            Where LPA Athletes Go
          </h2>
          <p className="font-oswald text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            The path your athlete can take, too
          </p>
        </div>
        
        {/* Athletes grid */}
        <div className="flex justify-center gap-3 md:gap-4 lg:gap-6 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative flex-none w-32 md:w-40 lg:w-48">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 rounded-b-lg">
                <div className="font-bebas text-xs md:text-sm text-foreground">{athlete.name}</div>
                <div className="font-oswald text-[10px] md:text-xs text-primary">{athlete.school}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-base md:text-lg px-6 md:px-8 py-4 md:py-5 h-auto"
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
