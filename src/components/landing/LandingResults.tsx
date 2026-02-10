import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 section-dark" />
      
      {/* Dramatic accent lighting */}
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-primary/15 to-transparent" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent" />
      
      {/* Floating orb */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 mb-4 md:mb-5 uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            50+ College Commits
          </div>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase tracking-tight mb-3 md:mb-4 glow-primary">
            Where LPA Athletes Go
          </h2>
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            The path your athlete can take, too
          </p>
        </div>
        
        {/* Athletes grid */}
        <div className="flex justify-center gap-4 md:gap-8 lg:gap-10 mb-12 md:mb-16 overflow-x-auto pb-2 scrollbar-hide">
          {athletes.map((athlete, index) => (
            <div key={index} className="group relative flex-none w-36 md:w-56 lg:w-72 xl:w-80">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border/20 group-hover:border-primary/40 transition-colors duration-500">
                <img 
                  src={athlete.image} 
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <div className="font-bebas text-sm md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">{athlete.name}</div>
                  <div className="font-oswald text-xs md:text-base lg:text-lg text-primary">{athlete.school}</div>
                </div>
                
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/appointments">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base md:text-xl lg:text-2xl px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 h-auto shadow-2xl border-glow transition-all duration-500 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingResults;
