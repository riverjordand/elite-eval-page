import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const LandingFooterCompact = () => {
  return (
    <footer className="relative py-12 md:py-16 lg:py-20 bg-black border-t border-border/30 overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src={lpaBolt} 
            alt="LPA" 
            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 opacity-70"
          />
          
          {/* Info */}
          <p className="font-bebas text-xl md:text-2xl lg:text-3xl text-foreground uppercase tracking-wider mb-1 md:mb-2">
            Legendary Prep Academy
          </p>
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
            Scottsdale, Arizona
          </p>
          
          {/* Copyright */}
          <p className="font-oswald text-xs md:text-sm lg:text-base text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooterCompact;
