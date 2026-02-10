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
    <section ref={ref} className="relative py-12 md:py-16 lg:py-20 bg-card/30 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
        <h2
          className="font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center mb-8 md:mb-12 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Recent Player <span className="text-primary">Commitments</span>
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-8">
          {commitments.map((school, i) => (
            <div
              key={school.name}
              className="flex flex-col items-center gap-2 group transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                transitionDelay: `${100 + i * 50}ms`,
              }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="max-w-full max-h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <span className="font-bebas text-[8px] sm:text-[9px] md:text-xs text-muted-foreground uppercase tracking-wide text-center leading-tight">
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
