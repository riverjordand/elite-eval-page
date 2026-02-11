import { useState } from "react";
import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { title: "Training Area", subtitle: "Game Speed", tagline: "Every rep simulates game conditions", description: "Indoor turf with game-environment spacing, real-time data feedback from Rapsodo, and pro-level equipment.", image: facilityTraining, features: ["Full regulation mounds", "Live batting metrics", "Velocity & spin tracking", "Game-environment spacing"], stat: "10K+ sq ft" },
  { title: "Strength & Conditioning", subtitle: "Power Building", tagline: "Where raw potential becomes elite performance", description: "Built for rotational athletes with Olympic platforms, baseball-specific machines, and sport-focused programming.", image: facilityStrength, features: ["Olympic lifting platforms", "Baseball-specific machines", "Power & speed equipment", "Mobility stations"], stat: "Full Gym" },
  { title: "Classrooms & Film", subtitle: "Train the Mind", tagline: "Where game IQ meets preparation", description: "Dedicated classroom space for film study, scouting reports, game strategy, and college recruitment workshops.", image: facilityVideo, features: ["Film study & game review", "Scouting report breakdowns", "Recruiting workshops", "Game strategy sessions"], stat: "Game IQ" },
  { title: "Recovery & Arm Care", subtitle: "Recover Faster", tagline: "Built-in recovery keeps athletes healthy", description: "Dedicated recovery area with arm care protocols, mobility stations, and tools to keep athletes performing at their best.", image: facilitySports, features: ["Arm care programs", "Mobility stations", "Recovery tools & equipment", "Soft tissue work"], stat: "Full Recovery" },
];

const FacilitySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  const openModal = (i: number) => { setSelected(i); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelected(null); document.body.style.overflow = 'unset'; };

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36 border-t border-border/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Gilbert, Arizona</span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-[0.88]">
              The <span className="text-primary">Facility</span>
            </h2>
          </div>
          <p className="font-oswald text-xs text-foreground/30 uppercase tracking-[0.2em]">16,000 Sq Ft · Open 365 Days</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0.5">
        {facilities.map((f, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            className={`group relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
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
