import { useEffect, useRef, useState, useCallback } from "react";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "College Commits", sublabel: "D1, D2, D3 & JUCO" },
  { value: 16, suffix: "K", label: "Sq Ft Facility", sublabel: "Indoor Training Complex" },
  { value: 5, suffix: "", label: "D1 Programs", sublabel: "On Coaching Staff" },
  { value: 8.5, suffix: "", label: "Avg MPH Gain", sublabel: "First 6 Months", decimal: true },
];

const CountUp = ({ target, suffix, decimal, triggered }: { target: number; suffix: string; decimal?: boolean; triggered: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
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
    <section ref={ref} className="relative bg-primary overflow-hidden">
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative mx-auto px-6 lg:px-20 py-6 md:py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative group transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground/60 hidden lg:block group-hover:scale-110 transition-transform" />
                <div 
                  className="font-bebas text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-none"
                  style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} triggered={visible} />
                </div>
              </div>
              <div className="font-bebas text-sm md:text-base lg:text-lg text-primary-foreground uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="font-oswald text-[10px] md:text-xs text-primary-foreground/70 mt-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
