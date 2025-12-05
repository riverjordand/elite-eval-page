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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Ambient light */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            50+ College Commits
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none mb-4">
            Where They Go
          </h2>
          <p className="font-oswald text-sm md:text-lg text-muted-foreground">
            The path your athlete can take too.
          </p>
        </div>
        
        {/* Athletes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative w-40 md:w-56 lg:w-64">
              <div className="aspect-[3/4] overflow-hidden bg-card">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bebas text-base md:text-lg text-foreground">{athlete.name}</h3>
                  <p className="font-oswald text-xs md:text-sm text-primary">{athlete.school}</p>
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
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 h-auto rounded-none"
          >
            Start Your Journey
            <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
