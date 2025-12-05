const stats = [
  { value: "50+", label: "Years Pro Experience" },
  { value: "500+", label: "Athletes Coached" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
];

const LandingStatsBar = () => {
  return (
    <section className="relative py-6 md:py-8 lg:py-10 overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-full bg-white/10 blur-3xl" />
        <div className="absolute top-0 right-1/3 w-48 h-full bg-white/5 blur-2xl" />
      </div>
      
      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-black/20 skew-x-[-20deg] -translate-x-1/3" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/10 skew-x-[-20deg] translate-x-1/3" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-black leading-none drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-oswald text-[10px] md:text-sm lg:text-base text-primary-foreground/80 uppercase tracking-widest mt-1 md:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingStatsBar;
