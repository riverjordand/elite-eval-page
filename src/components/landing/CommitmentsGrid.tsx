import { useEffect, useRef, useState, useCallback } from "react";

const commitments = [
  { name: "North Carolina", logo: "/colleges/north-carolina.png" },
  { name: "NC State", logo: "/colleges/nc-state.png" },
  { name: "Vanderbilt", logo: "/colleges/vanderbilt.png" },
  { name: "Duke", logo: "/colleges/duke.png" },
  { name: "Wake Forest", logo: "/colleges/wake-forest.png" },
  { name: "East Carolina", logo: "/colleges/east-carolina.png" },
  { name: "High Point", logo: "/colleges/high-point.png" },
  { name: "Appalachian State", logo: "/colleges/appalachian-state.png" },
  { name: "Charleston Southern", logo: "/colleges/charleston-southern.png" },
  { name: "Gardner Webb", logo: "/colleges/gardner-webb.png" },
  { name: "Jacksonville", logo: "/colleges/jacksonville.png" },
  { name: "Rice", logo: "/colleges/rice.png" },
  { name: "UNC Wilmington", logo: "/colleges/unc-wilmington.png" },
  { name: "Liberty", logo: "/colleges/liberty.png" },
  { name: "George Washington", logo: "/colleges/george-washington.png" },
  { name: "Penn State", logo: "/colleges/penn-state.png" },
  { name: "Indiana", logo: "/colleges/indiana.png" },
  { name: "USC Upstate", logo: "/colleges/usc-upstate.png" },
  { name: "UNC Charlotte", logo: "/colleges/unc-charlotte.png" },
  { name: "Old Dominion", logo: "/colleges/old-dominion.png" },
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
        <div className="grid grid-cols-5 md:grid-cols-10 gap-y-10 gap-x-6">
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
                  className="max-w-full max-h-full object-contain opacity-100 brightness-125 group-hover:scale-105 transition-all duration-300"
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
