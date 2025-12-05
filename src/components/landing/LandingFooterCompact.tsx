import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const LandingFooterCompact = () => {
  return (
    <footer className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo with glow */}
          <div className="relative mb-6 md:mb-8">
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-80"
            />
          </div>
          
          {/* Info */}
          <p className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-widest mb-2 md:mb-3">
            Legendary Prep Academy
          </p>
          <p className="font-oswald text-base md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10">
            Scottsdale, Arizona
          </p>
          
          {/* Copyright */}
          <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooterCompact;
