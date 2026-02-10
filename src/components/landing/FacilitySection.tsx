import { useState } from "react";
import { Check, X, ChevronRight } from "lucide-react";
import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { 
    title: "Training Area", 
    subtitle: "Game Speed",
    tagline: "Every rep simulates game conditions",
    description: "Indoor turf with game-environment spacing, real-time data feedback from Rapsodo, and pro-level equipment.",
    image: facilityTraining,
    features: ["Full regulation mounds", "Live batting metrics", "Velocity & spin tracking", "Game-environment spacing"],
    stat: "10K+ sq ft"
  },
  { 
    title: "Strength & Conditioning", 
    subtitle: "Power Building",
    tagline: "Where raw potential becomes elite performance",
    description: "Built for rotational athletes with Olympic platforms, baseball-specific machines, and sport-focused programming.",
    image: facilityStrength,
    features: ["Olympic lifting platforms", "Baseball-specific machines", "Power & speed equipment", "Mobility stations"],
    stat: "Full Training Facility"
  },
  { 
    title: "Classrooms & Film Study", 
    subtitle: "Train the Mind",
    tagline: "Where game IQ meets preparation",
    description: "Dedicated classroom space for film study, scouting reports, game strategy, and college recruitment workshops.",
    image: facilityVideo,
    features: ["Film study & game review", "Scouting report breakdowns", "Recruiting workshops", "Game strategy sessions"],
    stat: "Game IQ"
  },
  { 
    title: "Recovery & Arm Care", 
    subtitle: "Recover Faster",
    tagline: "Built-in recovery keeps athletes healthy",
    description: "Dedicated recovery area with arm care protocols, mobility stations, and tools to keep athletes performing at their best.",
    image: facilitySports,
    features: ["Arm care programs", "Mobility stations", "Recovery tools & equipment", "Soft tissue work"],
    stat: "Full Recovery"
  },
];

const FacilitySection = () => {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedFacility(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFacility(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      
      {/* Header */}
      <div className="container relative mx-auto px-6 lg:px-16 mb-8 md:mb-12">
        <div className="max-w-2xl">
          <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
            Gilbert, Arizona
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none">
            16,000 Sq Ft of
            <span className="text-primary"> Development</span>
          </h2>
        </div>
      </div>
      
      {/* Facility Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5">
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            onClick={() => openModal(index)}
            className="group relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            
            {/* Click indicator */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            {/* Stat badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-primary-foreground font-bebas text-[10px] lg:text-xs px-2.5 py-1 uppercase tracking-wider">
                {facility.stat}
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <p className="font-oswald text-[10px] text-primary uppercase tracking-wider mb-1">
                {facility.subtitle}
              </p>
              <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase">
                {facility.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFacility !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-30 w-10 h-10 rounded-full bg-black/60 border border-border/30 flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex flex-col lg:flex-row bg-card border border-border/20 overflow-hidden">
              <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[500px] flex-shrink-0">
                <img 
                  src={facilities[selectedFacility].image} 
                  alt={facilities[selectedFacility].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/40 to-transparent" />
              </div>
              
              <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <p className="font-oswald text-xs text-primary uppercase tracking-[0.3em] mb-3">
                  {facilities[selectedFacility].subtitle}
                </p>
                <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-[0.9] mb-3">
                  {facilities[selectedFacility].title}
                </h3>
                <p className="font-oswald text-sm text-foreground/50 italic border-l-2 border-primary/30 pl-4 mb-6">
                  "{facilities[selectedFacility].tagline}"
                </p>
                <p className="font-oswald text-sm lg:text-base text-foreground/70 leading-relaxed mb-8">
                  {facilities[selectedFacility].description}
                </p>
                
                <div>
                  <p className="font-bebas text-xs text-foreground/40 uppercase tracking-widest mb-4">What's Included</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facilities[selectedFacility].features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3 bg-primary/5 border border-primary/10 px-4 py-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-oswald text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
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
