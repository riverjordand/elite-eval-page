const stats = [
  { value: "50+", label: "Years Pro Experience" },
  { value: "500+", label: "Athletes Coached" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
];

const LandingStatsBar = () => {
  return (
    <section className="bg-primary py-4 md:py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-2xl md:text-3xl text-primary-foreground">
                {stat.value}
              </div>
              <div className="font-oswald text-xs md:text-sm text-primary-foreground/80 uppercase tracking-wide">
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
