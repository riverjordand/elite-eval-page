const stats = [
  { value: "50+", label: "Years Pro Experience" },
  { value: "500+", label: "Athletes Coached" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
];

const LandingStatsBar = () => {
  return (
    <section className="relative bg-primary py-4 md:py-5 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-black/10 skew-x-[-20deg] -translate-x-1/4" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-black leading-none">
                {stat.value}
              </div>
              <div className="font-oswald text-[10px] md:text-xs text-primary-foreground/80 uppercase tracking-wider mt-1">
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
