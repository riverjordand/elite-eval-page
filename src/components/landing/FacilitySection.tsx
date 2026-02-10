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
    <section className="relative py-10 md:py-16 lg:py-20 xl:py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />
      
      {/* Header */}
      <div className="container relative mx-auto px-4 md:px-6 lg:px-12 mb-4 md:mb-8 lg:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 md:gap-4 text-center lg:text-left">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-1.5 md:gap-2 mb-2 md:mb-3">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="font-oswald text-[10px] md:text-xs lg:text-sm text-primary uppercase tracking-[0.15em] md:tracking-[0.2em] glow-primary">
                Gilbert, Arizona
              </span>
            </div>
            <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg">
              16,000 Sq Ft of
              <span className="text-primary glow-primary-intense"> Development</span>
            </h2>
          </div>
          <div className="flex justify-center lg:justify-end gap-4 md:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="font-oswald text-[10px] md:text-xs lg:text-sm text-foreground/70">365 Days</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="font-oswald text-[10px] md:text-xs lg:text-sm text-foreground/70">Pro Equipment</span>
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
                style={{ boxShadow: '0 0 15px hsl(var(--primary) / 0.5)' }}>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
          
          {/* Ambient glow effects */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div 
            className="relative w-full max-w-6xl xl:max-w-7xl max-h-[90vh] overflow-hidden animate-scale-in rounded-2xl lg:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 text-white/80 group-hover:text-white transition-colors" />
            </button>
            
            {/* Desktop: Side by side large layout */}
            <div className="flex flex-col lg:flex-row bg-gradient-to-br from-card via-card to-card/95 border border-white/5 overflow-hidden">
              {/* Image side - larger on desktop */}
              <div className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto lg:min-h-[550px] xl:min-h-[600px] flex-shrink-0">
                <img 
                  src={facilities[selectedFacility].image} 
                  alt={facilities[selectedFacility].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent lg:hidden" />
                
                {/* Stat badge - larger */}
                <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
                  <span 
                    className="bg-primary text-primary-foreground font-bebas text-base lg:text-xl px-4 lg:px-6 py-2 lg:py-3 uppercase tracking-wider rounded-lg" 
                    style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }}
                  >
                    {facilities[selectedFacility].stat}
                  </span>
                </div>
              </div>
              
              {/* Content side - more spacious */}
              <div className="flex-1 p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  {/* Header */}
                  <div>
                    <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4 glow-primary">
                      {facilities[selectedFacility].subtitle}
                    </p>
                    <h3 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-[0.9] mb-4">
                      {facilities[selectedFacility].title}
                    </h3>
                    <p className="font-oswald text-base lg:text-lg xl:text-xl text-primary/80 italic border-l-4 border-primary/40 pl-4">
                      "{facilities[selectedFacility].tagline}"
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="font-oswald text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed">
                    {facilities[selectedFacility].description}
                  </p>
                  
                  {/* Features grid */}
                  <div>
                    <p className="font-bebas text-sm lg:text-base text-muted-foreground uppercase tracking-wider mb-4 lg:mb-5">
                      What's Included
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {facilities[selectedFacility].features.map((feature, fIndex) => (
                        <div 
                          key={fIndex} 
                          className="flex items-center gap-3 lg:gap-4 bg-primary/10 border border-primary/20 px-4 lg:px-5 py-3 lg:py-4 rounded-lg hover:bg-primary/15 hover:border-primary/30 transition-colors"
                        >
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                          </div>
                          <span className="font-oswald text-sm lg:text-base text-foreground/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated borders */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl lg:rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitySection;