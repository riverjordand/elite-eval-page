const stats = [
  { value: "50+", label: "Years Pro Experience" },
  { value: "500+", label: "Athletes Coached" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
];

const LandingStatsBar = () => {
  return (
    <section className="relative bg-primary py-5 md:py-6 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-black/10 skew-x-[-20deg] -translate-x-1/4" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-black">
                {stat.value}
              </div>
              <div className="font-oswald text-xs md:text-sm text-primary-foreground/80 uppercase tracking-wider">
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
