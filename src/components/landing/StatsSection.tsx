import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 50, suffix: "+", label: "College Commits" },
  { value: 16, suffix: "K", label: "Sq Ft Facility" },
  { value: 4, suffix: "", label: "Pro Coaches" },
  { value: 8.5, suffix: "", label: "Avg MPH Gain", decimal: true },
];

const CountUp = ({ target, suffix, decimal, triggered }: { target: number; suffix: string; decimal?: boolean; triggered: boolean }) => {
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
  const display = decimal ? current.toFixed(1) : Math.round(current).toString();
  return <>{display}{suffix}</>;
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
    <section ref={ref} className="border-y border-border/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-8 md:py-10 lg:py-14 text-center transition-all duration-1000 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className="font-bebas text-3xl md:text-5xl lg:text-6xl text-primary leading-none mb-2 transition-all duration-700"
                style={{
                  textShadow: visible ? '0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.1)' : 'none',
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} triggered={visible} />
              </div>
              <div
                className="font-oswald text-[9px] md:text-[11px] text-foreground/30 uppercase tracking-[0.3em] transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${500 + index * 150}ms`,
                }}
              >
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
