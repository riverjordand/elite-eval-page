const stats = [
  { value: "50+", label: "College Commits" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
  { value: "500+", label: "Athletes Trained" },
];

const StatsSection = () => {
  return (
    <section className="relative py-8 md:py-12 bg-primary overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-none">
                {stat.value}
              </div>
              <div className="font-oswald text-[10px] md:text-xs text-primary-foreground/70 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
