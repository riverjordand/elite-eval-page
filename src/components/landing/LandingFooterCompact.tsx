import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const LandingFooterCompact = () => {
  return (
    <footer className="relative py-10 md:py-12 bg-black border-t border-border/30 overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src={lpaBolt} 
            alt="LPA" 
            className="w-12 h-12 mb-4 opacity-70"
          />
          
          {/* Info */}
          <p className="font-bebas text-lg text-foreground uppercase tracking-wider mb-1">
            Legendary Prep Academy
          </p>
          <p className="font-oswald text-sm text-muted-foreground mb-4">
            Scottsdale, Arizona
          </p>
          
          {/* Copyright */}
          <p className="font-oswald text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooterCompact;
