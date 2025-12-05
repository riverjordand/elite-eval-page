import welcomeAthlete from "@/assets/welcome-athlete-batting.jpg";

const IntroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Image - positioned on right */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <img 
          src={welcomeAthlete} 
          alt="LPA Athlete" 
          className="absolute right-0 top-0 h-full w-full lg:w-2/3 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Headline */}
          <h2 className="font-bebas uppercase leading-[0.95] tracking-tight mb-8">
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground">
              Welcome To
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary">
              Legendary Prep
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground">
              Academy
            </span>
          </h2>
          
          {/* Body Copy */}
          <div className="space-y-6 mb-8">
            <p className="font-oswald text-base md:text-lg text-foreground/80 leading-relaxed">
              LPA is where Arizona's most driven baseball athletes train to reach the next level 
              — whether that's high-level varsity, college baseball, or pro development.
            </p>
            <p className="font-oswald text-base md:text-lg text-foreground/80 leading-relaxed">
              Our athletes train with D1-level systems, professional coaching, and the same 
              technology used by college programs and MLB player-development.
            </p>
          </div>
          
          {/* Highlight Box */}
          <div className="border-l-2 border-primary/50 pl-6">
            <p className="font-oswald text-lg md:text-xl text-foreground font-semibold mb-1">
              LPA is not a casual training facility.
            </p>
            <p className="font-oswald text-lg md:text-xl text-primary italic">
              It's where athletes come to commit, develop, and excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;