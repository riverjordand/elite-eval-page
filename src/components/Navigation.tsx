import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoArch from "@/assets/lpa-arch.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="w-full px-4 md:px-6 lg:px-12 xl:px-20 py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <Link to="/">
            <img 
              src={logoArch} 
              alt="Legendary Prep Academy" 
              className="h-10 md:h-12 lg:h-14 w-auto -my-1 md:-my-2"
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              to="/staff" 
              className="font-bebas text-sm md:text-base lg:text-lg text-foreground/80 hover:text-primary uppercase tracking-wider transition-colors"
            >
              Meet The Staff
            </Link>
            <Link 
              to="/apply" 
              className="font-bebas text-sm md:text-base lg:text-lg text-foreground/80 hover:text-primary uppercase tracking-wider transition-colors"
            >
              Apply
            </Link>

            <Link to="/apply">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider md:tracking-widest border-glow text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-10 py-3 md:py-5 lg:py-6 h-auto min-h-[40px] md:min-h-[48px] transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
