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
            <div key={index} className="text-center relative group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground/60 hidden lg:block group-hover:scale-110 transition-transform" />
                <div 
                  className="font-bebas text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-none"
                  style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                >
                  {stat.value}
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