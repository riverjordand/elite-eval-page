import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 12, suffix: "", label: "College Commits", sub: "SEC · D1 · D2 · JUCO" },
  { value: 4, suffix: "", label: "Teams", sub: "13U · 14U · JV · Varsity" },
  { value: 12, suffix: "", label: "Staff & Coaches", sub: "Former Pro & D1 Players" },
  { value: 24, suffix: "K", label: "Sq Ft Facility", sub: "Elite Training Space" },
];

const CountUp = ({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let frame: number;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [triggered, target]);
  return <>{Math.round(current)}{suffix}</>;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setVisible(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(onIntersect, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [onIntersect]);

  return (
    <section ref={ref} className="bg-primary py-10 md:py-14">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-4 transition-all duration-1000 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Decorative accent */}
              <div className="flex justify-center mb-2">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-primary-foreground/50">
                  <path d="M2 6 L6 2 L10 6 L14 2 L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Number */}
              <div className="font-bebas text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-none mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} triggered={visible} />
              </div>

              {/* Label */}
              <div className="font-oswald text-[10px] md:text-xs text-primary-foreground font-semibold uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>

              {/* Subtitle */}
              <div className="font-oswald text-[8px] md:text-[10px] text-primary-foreground/50 uppercase tracking-[0.15em]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
