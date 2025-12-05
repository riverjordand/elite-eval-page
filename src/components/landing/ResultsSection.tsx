import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";
import prestonSigned from "@/assets/athletes/preston-francis-signed.jpg";

interface ResultsSectionProps {
  onCtaClick?: () => void;
}

const athletes = [
  { name: "Preston Francis", school: "Glendale CC", image: prestonFrancis },
  { name: "Brayan Moreno", school: "Southwestern CC", image: brayanMoreno },
  { name: "Miles Keogh", school: "Coastal Carolina", image: milesKeogh },
  { name: "Preston Francis", school: "Signed", image: prestonSigned },
];

const ResultsSection = ({ onCtaClick }: ResultsSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
            50+ College Commits
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none mb-4 lg:mb-6">
            Where They Go
          </h2>
          <p className="font-oswald text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground">
            The path your athlete can take too.
          </p>
        </div>
        
        {/* Athletes - 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-card">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <h3 className="font-bebas text-base md:text-lg lg:text-xl xl:text-2xl text-foreground">{athlete.name}</h3>
                  <p className="font-oswald text-xs md:text-sm lg:text-base text-primary">{athlete.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={onCtaClick}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-base md:text-lg lg:text-xl xl:text-2xl px-8 lg:px-12 py-5 lg:py-6 xl:py-7 h-auto"
          >
            Start Your Journey
            <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
