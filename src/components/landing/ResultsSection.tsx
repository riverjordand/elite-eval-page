import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import brayanMoreno from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import milesKeogh from "@/assets/athletes/miles-keogh-coastal.jpg";
import prestonFrancis from "@/assets/athletes/preston-francis-glendale.jpg";

const commits = [
  { name: "Brayan Moreno", school: "Southwestern CC", position: "RHP", stat: "+8 MPH", image: brayanMoreno },
  { name: "Miles Keogh", school: "Coastal Carolina", position: "INF", stat: "D1 Commit", image: milesKeogh },
  { name: "Preston Francis", school: "Glendale CC", position: "OF", stat: "3 Offers", image: prestonFrancis },
];

const ResultsSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-oswald text-xs text-accent uppercase tracking-[0.3em]">50+ College Commits</span>
          </div>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-4">
            Athlete <span className="text-primary">Success Stories</span>
          </h2>
          <p className="font-oswald text-sm text-foreground/50 max-w-lg mx-auto">
            These athletes started where yours is now. With the right training, they're now playing at the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {commits.map((commit, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden">
              <img src={commit.image} alt={commit.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-oswald text-xs uppercase tracking-wider">{commit.school}</span>
                </div>
                <h3 className="font-bebas text-2xl text-foreground uppercase mb-1">{commit.name}</h3>
                <span className="font-oswald text-xs text-foreground/50">{commit.position}</span>
                <div className="mt-3 inline-block bg-primary/15 border border-primary/20 px-3 py-1">
                  <span className="font-bebas text-primary text-sm">{commit.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/appointments">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base lg:text-lg px-10 py-6 h-auto transition-all duration-300 hover:scale-[1.02]">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
