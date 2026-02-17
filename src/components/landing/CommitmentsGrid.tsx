import { useEffect, useRef, useState, useCallback } from "react";

const commitments = [
  { name: "Scottsdale CC" },
  { name: "Southwestern College" },
  { name: "Texas Tech University" },
  { name: "University of Mary" },
  { name: "Coastal Carolina" },
  { name: "Ole Miss" },
  { name: "Utah Valley University" },
  { name: "New Mexico St. University" },
  { name: "Glendale CC" },
  { name: "Justice University" },
  { name: "Youngstown St. University" },
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

        {/* Logo grid - clean, evenly spaced */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6">
          {commitments.map((school, i) => (
            <div
              key={school.name}
              className="flex flex-col items-center gap-2.5 group transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${60 + i * 30}ms`,
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full border border-border/30 bg-card/50 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                <span className="font-bebas text-lg md:text-xl lg:text-2xl text-primary">{school.name.charAt(0)}</span>
              </div>
              <span className="font-oswald text-[9px] md:text-[10px] text-foreground/50 uppercase tracking-wider text-center leading-tight group-hover:text-foreground/80 transition-colors">
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
