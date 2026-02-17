import { useEffect, useRef, useState, useCallback } from "react";

const commitments = [
  { name: "Scottsdale CC", logo: "/colleges/scottsdale-cc.png?v=2" },
  { name: "Southwestern College", logo: "/colleges/southwestern-college.png" },
  { name: "Texas Tech University", logo: "/colleges/texas-tech.png" },
  { name: "University of Mary", logo: "/colleges/university-of-mary.png" },
  { name: "Coastal Carolina", logo: "/colleges/coastal-carolina.png" },
  { name: "Ole Miss", logo: "/colleges/ole-miss.png" },
  { name: "Utah Valley University", logo: "/colleges/utah-valley.png?v=3" },
  { name: "New Mexico St. University", logo: "/colleges/new-mexico-state.png" },
  { name: "Glendale CC", logo: "/colleges/glendale-cc.png" },
  { name: "Justice University", logo: "/colleges/justice-university.png" },
  { name: "Youngstown St. University", logo: "/colleges/youngstown-state.png?v=2" },
];

const CommitmentsGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setVisible(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(onIntersect, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [onIntersect]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-28 border-y border-border/10">
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Our Athletes at the Next Level</span>
            </div>
            <h2 className={`font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-none transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              Recent <span className="text-primary">Commitments</span>
            </h2>
          </div>
          <p className={`font-oswald text-xs text-foreground/30 uppercase tracking-[0.2em] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            And Counting
          </p>
        </div>

        {/* Logo rows */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-14">
          {commitments.map((school, i) => (
            <div
              key={school.name}
              className="flex flex-col items-center gap-2.5 group transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${60 + i * 30}ms`,
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="max-w-full max-h-full object-contain brightness-125 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="font-oswald text-[8px] md:text-[9px] text-foreground/40 uppercase tracking-wider text-center leading-tight group-hover:text-foreground/70 transition-colors hidden md:block">
                {school.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsGrid;
