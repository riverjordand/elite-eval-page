import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const LandingFooterCompact = () => {
  return (
    <footer className="py-8 bg-black border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <img 
          src={lpaBolt} 
          alt="LPA" 
          className="w-10 h-10 mx-auto mb-3 opacity-60"
        />
        <p className="font-oswald text-xs text-muted-foreground mb-2">
          Legendary Prep Academy · Scottsdale, AZ
        </p>
        <p className="font-oswald text-[10px] text-muted-foreground/60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooterCompact;
