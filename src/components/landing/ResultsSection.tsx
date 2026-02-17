import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";

const commits = [
  { school: "Scottsdale CC", stat: "Committed", image: milesKeogh },
  { school: "Southwestern College", stat: "Committed", image: brayanMoreno },
  { school: "Texas Tech University", stat: "Committed", image: prestonFrancis },
  { school: "University of Mary", stat: "Committed", image: milesKeogh },
  { school: "Coastal Carolina", stat: "Committed", image: brayanMoreno },
  { school: "Ole Miss", stat: "Committed", image: prestonFrancis },
  { school: "Utah Valley University", stat: "Committed", image: milesKeogh },
  { school: "New Mexico St. University", stat: "Committed", image: brayanMoreno },
  { school: "Glendale CC", stat: "Committed", image: prestonFrancis },
  { school: "Justice University", stat: "Committed", image: milesKeogh },
  { school: "Youngstown St. University", stat: "Committed", image: brayanMoreno },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36">
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className={`text-center mb-14 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Success Stories</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-foreground uppercase leading-none mb-4">
            Signed and <span className="text-primary">Committed</span>
          </h2>
          <p className="font-oswald text-sm text-foreground/30 max-w-lg mx-auto">
            These athletes started where yours is now. With the right training and development, they're playing at the next level.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-16">
          {commits.map((commit, i) => (
            <div
              key={i}
              className={`group relative aspect-[3/4] overflow-hidden rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <img src={commit.image} alt={commit.school} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-[1.13] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 text-primary mb-1">
                  <MapPin className="w-3 h-3" />
                  <span className="font-oswald text-[9px] uppercase tracking-[0.15em]">{commit.stat}</span>
                </div>
                <h3 className="font-bebas text-base md:text-lg lg:text-xl text-foreground uppercase leading-tight">{commit.school}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link to="/appointments">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-12 py-6 h-auto transition-all duration-300">
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
