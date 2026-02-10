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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-card/20 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-oswald text-sm text-primary uppercase tracking-[0.3em]">50+ College Commits</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-4">
            Athlete <span className="text-primary">Success Stories</span>
          </h2>
          <p className="font-oswald text-base text-muted-foreground max-w-xl mx-auto">
            These athletes started where yours is now. With the right training, they're now playing at the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {commits.map((commit, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden">
              <img src={commit.image} alt={commit.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-oswald text-sm uppercase tracking-wider">{commit.school}</span>
                </div>
                <h3 className="font-bebas text-2xl text-foreground uppercase mb-1">{commit.name}</h3>
                <span className="font-oswald text-sm text-foreground/60">{commit.position}</span>
                <div className="mt-3 inline-block bg-primary/20 border border-primary/30 px-3 py-1">
                  <span className="font-bebas text-primary text-sm">{commit.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/appointments">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-lg px-10 py-6 h-auto">
              Apply Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;