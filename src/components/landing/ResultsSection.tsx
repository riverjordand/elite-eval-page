import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";

const commits = [
  { name: "Brayan Moreno", school: "Southwestern CC", position: "RHP", stat: "+8 MPH", image: brayanMoreno },
  { name: "Miles Keogh", school: "Coastal Carolina", position: "INF", stat: "D1 Commit", image: milesKeogh },
  { name: "Preston Francis", school: "Glendale CC", position: "OF", stat: "3 Offers", image: prestonFrancis },
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
            Where They <span className="text-primary">Ended Up</span>
          </h2>
          <p className="font-oswald text-sm text-foreground/30 max-w-md mx-auto">
            These athletes started where yours is now. With the right training, they're playing at the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-16">
          {commits.map((commit, i) => (
            <div
              key={i}
              className={`group relative aspect-[3/4] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <img src={commit.image} alt={commit.name} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-[1.13] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground font-bebas text-[10px] px-2.5 py-1 uppercase tracking-wider">{commit.stat}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="font-oswald text-[10px] uppercase tracking-[0.2em]">{commit.school}</span>
                </div>
                <h3 className="font-bebas text-2xl lg:text-3xl text-foreground uppercase leading-tight">{commit.name}</h3>
                <p className="font-oswald text-[10px] text-foreground/40 uppercase tracking-wider mt-1">{commit.position}</p>
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
