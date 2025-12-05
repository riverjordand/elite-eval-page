import { TrendingUp } from "lucide-react";

const stats = [
  { value: "50+", label: "College Commits", sublabel: "D1, D2, D3 & JUCO" },
  { value: "16K", label: "Sq Ft Facility", sublabel: "Indoor Training Complex" },
  { value: "5", label: "D1 Programs", sublabel: "On Coaching Staff" },
  { value: "8.5", label: "Avg MPH Gain", sublabel: "First 6 Months" },
];

const StatsSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container relative mx-auto px-6 lg:px-20 py-10 md:py-14 lg:py-16 xl:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative group">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground/50 hidden lg:block" />
                <div className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-none">
                  {stat.value}
                </div>
              </div>
              <div className="font-bebas text-base md:text-lg lg:text-xl xl:text-2xl text-primary-foreground uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="font-oswald text-xs md:text-sm lg:text-base text-primary-foreground/60 mt-2">
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