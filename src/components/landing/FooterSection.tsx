import lpaBolt from "@/assets/lpa-logo-bolt.webp";

const FooterSection = () => {
  return (
    <footer className="relative py-12 md:py-16 lg:py-20 bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left - Logo and info */}
          <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            <img 
              src={lpaBolt} 
              alt="LPA" 
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 opacity-60"
            />
            <div>
              <p className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase tracking-widest">
                Legendary Prep Academy
              </p>
              <p className="font-oswald text-sm lg:text-base text-muted-foreground">
                Scottsdale, Arizona
              </p>
            </div>
          </div>
          
          {/* Right - Copyright */}
          <p className="font-oswald text-xs lg:text-sm text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
