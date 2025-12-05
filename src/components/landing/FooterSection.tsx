import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const FooterSection = () => {
  return (
    <footer className="relative py-16 md:py-20 bg-black">
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src={lpaBolt} 
            alt="LPA" 
            className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-60"
          />
          
          {/* Name */}
          <p className="font-bebas text-xl md:text-2xl text-foreground uppercase tracking-widest mb-2">
            Legendary Prep Academy
          </p>
          <p className="font-oswald text-sm md:text-base text-muted-foreground mb-8">
            Scottsdale, Arizona
          </p>
          
          {/* Copyright */}
          <p className="font-oswald text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
