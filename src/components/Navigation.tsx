import { Button } from "@/components/ui/button";
import logoText from "@/assets/lpa-logo-text.webp";

interface NavigationProps {
  onBookNowClick?: () => void;
}

const Navigation = ({ onBookNowClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <img 
            src={logoText} 
            alt="Legendary Prep Academy" 
            className="h-9 md:h-12 w-auto"
          />

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider border-glow text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto min-h-[48px]"
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
