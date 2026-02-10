import { Button } from "@/components/ui/button";
import logoLegendary from "@/assets/lpa-logo-legendary.png";

interface NavigationProps {
  onBookNowClick?: () => void;
}

const Navigation = ({ onBookNowClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="w-full px-4 md:px-6 lg:px-12 xl:px-20 py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <img 
            src={logoLegendary} 
            alt="Legendary Prep Academy" 
            className="h-12 md:h-14 lg:h-16 w-auto -my-2 md:-my-3"
          />

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider md:tracking-widest border-glow text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-10 py-3 md:py-5 lg:py-6 h-auto min-h-[40px] md:min-h-[48px] transition-all duration-300 hover:scale-105"
            onClick={onBookNowClick}
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
