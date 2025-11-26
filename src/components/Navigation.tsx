import { Button } from "@/components/ui/button";
import logoText from "@/assets/lpa-logo-text.webp";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logoText} 
            alt="Legendary Prep Academy" 
            className="h-8 md:h-10 w-auto"
          />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">
              The Academy
            </a>
            <a href="#staff" className="text-foreground hover:text-primary transition-colors">
              Meet The Staff
            </a>
            <a href="#commitments" className="text-foreground hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider border-glow"
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
