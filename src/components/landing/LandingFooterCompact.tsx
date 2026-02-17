import lpaArch from "@/assets/lpa-arch.png";

const LandingFooterCompact = () => {
  return (
    <footer className="relative py-fluid-xl overflow-hidden">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative mx-auto px-fluid-container-px">
        <div className="flex flex-col items-center">
          {/* Logo with glow */}
          <div className="relative mb-fluid-sm">
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
            <img 
              src={lpaArch} 
              alt="LPA" 
              className="relative h-12 md:h-16 lg:h-20 w-auto opacity-80"
            />
          </div>
          
          {/* Info */}
          <p className="font-bebas text-fluid-2xl text-foreground uppercase tracking-widest mb-fluid-xs">
            Legendary Prep Academy
          </p>
          <p className="font-oswald text-fluid-lg text-muted-foreground mb-fluid-md">
            Scottsdale, Arizona
          </p>
          
          {/* Copyright */}
          <p className="font-oswald text-fluid-sm text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooterCompact;
