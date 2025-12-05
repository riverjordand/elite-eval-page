const stats = [
  { value: "50+", label: "College Commits" },
  { value: "16K", label: "Sq Ft Facility" },
  { value: "5", label: "D1 Programs" },
  { value: "500+", label: "Athletes Trained" },
];

const StatsSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24 py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 xl:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-primary-foreground leading-none">
                {stat.value}
              </div>
              <div className="font-oswald text-[10px] md:text-xs lg:text-sm text-primary-foreground/70 uppercase tracking-[0.2em] mt-1 lg:mt-2">
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
