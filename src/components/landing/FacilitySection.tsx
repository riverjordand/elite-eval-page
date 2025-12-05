import { useState } from "react";
import { Check, MapPin, Clock, Zap, X, ChevronRight } from "lucide-react";
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
    stat: "Full Gym"
  },
  { 
    title: "Video Analysis Lab", 
    subtitle: "See What Others Miss",
    tagline: "College-level breakdown technology",
    description: "Multi-angle high-speed cameras at 240+ fps. Frame-by-frame analysis comparing to college and pro standards.",
    image: facilityVideo,
    features: ["High-speed cameras (240+ fps)", "Frame-by-frame analysis", "Pro comparisons", "Progress tracking"],
    stat: "240+ FPS"
  },
  { 
    title: "Sports Medicine", 
    subtitle: "Stay Sharp",
    tagline: "Prevention is better than recovery",
    description: "Recovery protocols, arm care programs, and mobility work built into every athlete's training plan.",
    image: facilitySports,
    features: ["Arm care protocols", "Recovery equipment", "Mobility programming", "Injury prevention"],
    stat: "Integrated"
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
    <section className="relative py-16 lg:py-20 xl:py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />
      
      {/* Header */}
      <div className="container relative mx-auto px-6 lg:px-12 mb-8 lg:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-[0.2em] glow-primary">
                Gilbert, Arizona
              </span>
            </div>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg">
              16,000 Sq Ft of
              <span className="text-primary glow-primary-intense"> Development</span>
            </h2>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-oswald text-xs lg:text-sm text-foreground/70">365 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-oswald text-xs lg:text-sm text-foreground/70">Pro Equipment</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Facility Grid - Edge to edge on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            onClick={() => openModal(index)}
            className="group relative aspect-square lg:aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            
            {/* Click indicator */}
            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            {/* Stat badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-primary text-primary-foreground font-bebas text-[10px] lg:text-xs px-2 py-1 uppercase"
                style={{ boxShadow: '0 0 15px hsl(271 81% 56% / 0.5)' }}>
                {facility.stat}
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <p className="font-oswald text-[10px] lg:text-xs text-primary uppercase tracking-wider mb-1 glow-primary">
                {facility.subtitle}
              </p>
              <h3 className="font-bebas text-lg md:text-xl lg:text-2xl text-foreground uppercase drop-shadow-lg">
                {facility.title}
              </h3>
            </div>
            
            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFacility !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
          
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 80px hsl(271 81% 56% / 0.25)' }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex flex-col md:flex-row bg-card border border-border/50">
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[400px] flex-shrink-0">
                <img src={facilities[selectedFacility].image} alt={facilities[selectedFacility].title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground font-bebas text-sm px-3 py-1.5 uppercase" style={{ boxShadow: '0 0 25px hsl(271 81% 56% / 0.7)' }}>
                    {facilities[selectedFacility].stat}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em] mb-2 glow-primary">{facilities[selectedFacility].subtitle}</p>
                <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-2">{facilities[selectedFacility].title}</h3>
                <p className="font-oswald text-sm md:text-base text-primary/80 italic mb-4">"{facilities[selectedFacility].tagline}"</p>
                <p className="font-oswald text-sm md:text-base text-foreground/80 leading-relaxed mb-6">{facilities[selectedFacility].description}</p>
                
                <div>
                  <p className="font-bebas text-xs text-muted-foreground uppercase tracking-wider mb-3">What's Included</p>
                  <div className="grid grid-cols-2 gap-2">
                    {facilities[selectedFacility].features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-2">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="font-oswald text-xs text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitySection;