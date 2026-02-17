import { useState, useRef, useCallback } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const STORAGE_BASE = "https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video";

const facilities = [
  { title: "Baseball Training", subtitle: "Game Speed", tagline: "Every rep simulates game conditions", description: "Indoor turf, retractable hitting tunnels, real-time data feedback from elite-level equipment.", image: `${STORAGE_BASE}/BaseBallTraining`, features: ["Trackman", "HitTrax", "Rapsodo", "2K sq ft game simulation"], stat: "8K sq ft" },
  { title: "Strength & Conditioning", subtitle: "Power", tagline: "Where raw potential becomes elite performance", description: "Built for rotational athletes with power platforms, athlete-specific machines, and sport-focused programming.", image: `${STORAGE_BASE}/Strengthandconditioning`, features: ["Keiser PRT technology", "Rogue power racks", "VALD Forcedecks & speed lasers", "Kinvent speed sensors"], stat: "Weight Room" },
  { title: "Classroom", subtitle: "Online Schooling", tagline: "Education built for athletes", description: "Dedicated classroom space where middle and high school student-athletes spend 2 hours per day ensuring grades are met with an advisor.", image: `${STORAGE_BASE}/Classroom`, features: ["NCAA-approved standards", "Fully accredited by Cognia", "Weekly grade checks", "College prep focused", "Flexible scheduling"], stat: "Academics" },
  { title: "Recovery & Rehab", subtitle: "Injury Prevention", tagline: "Built-in recovery and rehab keeps athletes on the field", description: "Dedicated recovery area, arm care protocols, mobility focused, and onsite physical therapy by licensed PTs.", image: `${STORAGE_BASE}/RecoveryandRehab`, features: ["Spooner PT on-site (weekly)", "Soft tissue work", "Saunas & red-light therapy", "Hot & cold therapies"], stat: "Full Recovery" },
];

const FacilitySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = (i: number) => { setSelected(i); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelected(null); document.body.style.overflow = 'unset'; };

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = dir === 'left' ? -420 : 420;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36 border-t border-border/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Scottsdale, Arizona</span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-[0.88]">
              The <span className="text-primary">Facility</span>
            </h2>
          </div>
          <p className="font-oswald text-xs text-foreground/30 uppercase tracking-[0.2em]">24,000 Sq Ft · Open 365 Days</p>
        </div>
      </div>

      {/* Scrollable horizontal strip */}
      <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide flex justify-center">
          <div className="flex gap-2 px-6 lg:px-16 pb-4 w-max">
            {facilities.map((f, i) => (
              <div
                key={i}
                onClick={() => openModal(i)}
                className="group relative w-72 md:w-80 lg:w-[420px] aspect-[4/5] overflow-hidden cursor-pointer flex-shrink-0"
              >
                <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                  <p className="font-oswald text-[9px] md:text-[10px] text-primary uppercase tracking-[0.3em] mb-1">{f.subtitle}</p>
                  <h3 className="font-bebas text-lg md:text-2xl lg:text-3xl text-foreground uppercase leading-tight">{f.title}</h3>
                </div>
                <div className="absolute top-3 left-3 md:top-5 md:left-5">
                  <span className="bg-primary text-primary-foreground font-bebas text-[9px] md:text-xs px-2.5 py-1 uppercase tracking-wider">{f.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow buttons - desktop only */}
        <button
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/80 border border-border/20 items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 text-foreground/50 group-hover:text-primary-foreground transition-colors" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/80 border border-border/20 items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
        >
          <ChevronRight className="w-5 h-5 text-foreground/50 group-hover:text-primary-foreground transition-colors" />
        </button>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/90" />
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 border border-border/20 flex items-center justify-center hover:bg-primary transition-colors">
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex flex-col lg:flex-row bg-card border border-border/10 overflow-hidden">
              <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[480px] flex-shrink-0">
                <img src={facilities[selected].image} alt={facilities[selected].title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/30 to-transparent" />
              </div>
              <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.4em] mb-3">{facilities[selected].subtitle}</p>
                <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-[0.9] mb-3">{facilities[selected].title}</h3>
                <p className="font-oswald text-sm text-foreground/40 italic border-l border-primary/30 pl-4 mb-6">"{facilities[selected].tagline}"</p>
                <p className="font-oswald text-sm text-foreground/50 leading-relaxed mb-8">{facilities[selected].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {facilities[selected].features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3 px-4 py-3 border border-border/10">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="font-oswald text-xs text-foreground/60">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitySection;
