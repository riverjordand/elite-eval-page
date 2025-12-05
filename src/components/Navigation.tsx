import { Button } from "@/components/ui/button";
import logoText from "@/assets/lpa-logo-text.webp";

interface NavigationProps {
  onBookNowClick?: () => void;
}

const Navigation = ({ onBookNowClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-4 md:py-5 lg:py-6">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <img 
            src={logoText} 
            alt="Legendary Prep Academy" 
            className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto"
          />

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest border-glow text-base md:text-lg lg:text-xl px-8 md:px-10 lg:px-12 py-5 md:py-6 lg:py-7 h-auto min-h-[48px] transition-all duration-300 hover:scale-105"
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
