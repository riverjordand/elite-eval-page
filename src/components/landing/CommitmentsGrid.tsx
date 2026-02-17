import { useEffect, useRef, useState, useCallback } from "react";

const allSchools = [
  { name: "Ole Miss", logo: "/colleges/ole-miss.png" },
  { name: "Coastal Carolina", logo: "/colleges/coastal-carolina.png" },
  { name: "Texas Tech University", logo: "/colleges/texas-tech.png" },
  { name: "University of Mary", logo: "/colleges/university-of-mary.png" },
  { name: "Utah Valley University", logo: "/colleges/utah-valley.png?v=3" },
  { name: "New Mexico St. University", logo: "/colleges/new-mexico-state.png?v=2", scale: 1.4 },
  { name: "Youngstown St. University", logo: "/colleges/youngstown-state.png?v=2", scale: 1.4 },
  { name: "Southwestern College", logo: "/colleges/southwestern-college.png?v=2", scale: 3, offsetY: -4 },
  { name: "Scottsdale CC", logo: "/colleges/scottsdale-cc.png?v=2", scale: 1.4 },
  { name: "Glendale CC", logo: "/colleges/glendale-cc.png?v=2" },
  { name: "Justice University", logo: "/colleges/justice-university.png?v=2" },
];

// Desktop: 6 top / 5 bottom
const desktopRow1 = allSchools.slice(0, 6);
const desktopRow2 = allSchools.slice(6);

// Mobile: 4 / 4 / 3
const mobileRow1 = allSchools.slice(0, 4);
const mobileRow2 = allSchools.slice(4, 8);
const mobileRow3 = allSchools.slice(8);

type School = { name: string; logo: string; scale?: number; offsetY?: number };

const LogoItem = ({ school, visible, delay }: { school: School; visible: boolean; delay: number }) => (
  <div
    className="flex flex-col items-center gap-2 group transition-all duration-500"
    style={{ opacity: visible ? 1 : 0, transitionDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
      <img
        src={school.logo}
        alt={school.name}
        className="w-full h-full object-contain brightness-125 group-hover:scale-105 transition-all duration-300"
        style={{
          ...(school.scale ? { transform: `scale(${school.scale})${school.offsetY ? ` translateY(${school.offsetY}px)` : ''}` } : {}),
          ...(!school.scale && school.offsetY ? { transform: `translateY(${school.offsetY}px)` } : {}),
        }}
        loading="lazy"
      />
    </div>
    <span className="font-oswald text-[7px] md:text-[9px] text-foreground/40 uppercase tracking-wider text-center leading-tight group-hover:text-foreground/70 transition-colors max-w-[70px] md:max-w-[80px]">
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

  return (
    <section ref={ref} className="relative py-12 md:py-24 lg:py-28 border-y border-border/10">
      <div className="container relative mx-auto px-4 md:px-6 lg:px-16">
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-8 md:mb-16">
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

        {/* Mobile: 4-4-3 grid */}
        <div className="md:hidden flex flex-col gap-6">
          {[mobileRow1, mobileRow2, mobileRow3].map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-4">
              {row.map((school, i) => {
                const idx = (rowIdx === 0 ? 0 : rowIdx === 1 ? 4 : 8) + i;
                return <LogoItem key={school.name} school={school} visible={visible} delay={60 + idx * 30} />;
              })}
            </div>
          ))}
        </div>

        {/* Desktop: 6-5 alternating */}
        <div className="hidden md:flex flex-col gap-12">
          {[desktopRow1, desktopRow2].map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-12 lg:gap-16">
              {row.map((school, i) => {
                const idx = (rowIdx === 0 ? 0 : 6) + i;
                return <LogoItem key={school.name} school={school} visible={visible} delay={60 + idx * 30} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsGrid;
