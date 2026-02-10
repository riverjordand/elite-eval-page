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
    <section ref={ref} className="relative py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className={`font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            Where Our Athletes Play
          </p>
          <h2
            className={`font-bebas text-2xl md:text-4xl lg:text-5xl uppercase leading-none transition-all duration-700`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            Recent Player <span className="text-primary">Commitments</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-6 md:gap-8">
          {commitments.map((school, i) => (
            <div
              key={school.name}
              className="flex flex-col items-center gap-2 group transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${80 + i * 40}ms`,
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <span className="font-bebas text-[7px] sm:text-[8px] md:text-[10px] text-foreground/40 uppercase tracking-wide text-center leading-tight group-hover:text-foreground/70 transition-colors">
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
