import { useEffect, useRef, useState, useCallback } from "react";

// Alternating rows: 6 - 5
const row1 = [
  { name: "Ole Miss", logo: "/colleges/ole-miss.png" },
  { name: "Coastal Carolina", logo: "/colleges/coastal-carolina.png" },
  { name: "Texas Tech University", logo: "/colleges/texas-tech.png" },
  { name: "University of Mary", logo: "/colleges/university-of-mary.png" },
  { name: "Utah Valley University", logo: "/colleges/utah-valley.png?v=3" },
  { name: "New Mexico St. University", logo: "/colleges/new-mexico-state.png?v=2", scale: 1.4 },
];

const row2 = [
  { name: "Youngstown St. University", logo: "/colleges/youngstown-state.png?v=2", scale: 1.4 },
  { name: "Southwestern College", logo: "/colleges/southwestern-college.png?v=2", scale: 2 },
  { name: "Scottsdale CC", logo: "/colleges/scottsdale-cc.png?v=2" },
  { name: "Glendale CC", logo: "/colleges/glendale-cc.png?v=2" },
  { name: "Justice University", logo: "/colleges/justice-university.png?v=2" },
];

const allRows = [row1, row2];

const LogoItem = ({ school, visible, delay }: { school: { name: string; logo: string; scale?: number }; visible: boolean; delay: number }) => (
  <div
    className="flex flex-col items-center gap-3 group transition-all duration-500"
    style={{ opacity: visible ? 1 : 0, transitionDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
      <img
        src={school.logo}
        alt={school.name}
        className="w-full h-full object-contain brightness-125 group-hover:scale-105 transition-all duration-300"
        style={school.scale ? { transform: `scale(${school.scale})` } : undefined}
        loading="lazy"
      />
    </div>
    <span className="font-oswald text-[8px] md:text-[9px] text-foreground/40 uppercase tracking-wider text-center leading-tight group-hover:text-foreground/70 transition-colors max-w-[80px]">
      {school.name}
    </span>
  </div>
);

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

  let globalIndex = 0;

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

        {/* Alternating rows: 4 - 3 - 4 */}
        <div className="flex flex-col gap-10 md:gap-12">
          {allRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
              {row.map((school) => {
                const delay = 60 + globalIndex * 30;
                globalIndex++;
                return <LogoItem key={school.name} school={school} visible={visible} delay={delay} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsGrid;
