import { useState } from "react";
import { Check, MapPin, Clock, Zap, X, ChevronRight } from "lucide-react";
import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { 
    title: "Training Area", 
    subtitle: "Where Game Speed Happens",
    tagline: "Every rep simulates game conditions",
    description: "Our indoor turf space is designed for real baseball development. With game-environment spacing, real-time data feedback from Rapsodo technology, and pro-level equipment, athletes train in conditions that mirror actual competition.",
    image: facilityTraining,
    features: [
      "Full regulation pitching mounds",
      "Batting cages with live metrics",
      "Real-time velocity & spin tracking",
      "Game-environment spacing",
      "Pro-level training equipment"
    ],
    stat: "10,000+ sq ft"
  },
  { 
    title: "Strength & Conditioning", 
    subtitle: "Build Explosive Power",
    tagline: "Where raw potential becomes elite performance",
    description: "Our strength facility is built specifically for rotational athletes. Olympic lifting platforms, baseball-specific machines, and programming designed by coaches who understand the unique demands of the sport.",
    image: facilityStrength,
    features: [
      "Olympic lifting platforms",
      "Baseball-specific machines",
      "Power & speed equipment",
      "Mobility stations",
      "Performance tracking"
    ],
    stat: "Full Gym"
  },
  { 
    title: "Video Analysis Lab", 
    subtitle: "See What Others Miss",
    tagline: "College-level breakdown technology",
    description: "Multi-angle high-speed cameras capture every movement at 240+ frames per second. Our coaches break down mechanics frame-by-frame, comparing your athlete's form to college and pro standards.",
    image: facilityVideo,
    features: [
      "High-speed cameras (240+ fps)",
      "Frame-by-frame analysis",
      "Side-by-side pro comparisons",
      "Biomechanics breakdown",
      "Progress tracking over time"
    ],
    stat: "240+ FPS"
  },
  { 
    title: "Sports Medicine", 
    subtitle: "Stay Healthy, Stay Sharp",
    tagline: "Prevention is better than recovery",
    description: "Injury prevention isn't optional at LPA. Recovery protocols, arm care programs, and mobility work are built into every athlete's training plan. We keep athletes on the field and performing at their peak.",
    image: facilitySports,
    features: [
      "Arm care protocols",
      "Recovery equipment",
      "Mobility programming",
      "Injury prevention focus",
      "Performance optimization"
    ],
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
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 bg-black overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      
      {/* Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Header */}
      <div className="container relative mx-auto px-6 lg:px-20 mb-10 lg:mb-14 xl:mb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] glow-primary">
                Gilbert, Arizona
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              16,000 Sq Ft of Pure
              <span className="block text-primary glow-primary-intense">Development</span>
            </h2>
          </div>
          <div>
            <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-5 lg:mb-6">
              This isn't a warehouse with batting cages. It's a professional training complex built specifically 
              for developing the next generation of college and pro players.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 group">
                <Clock className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-sm lg:text-base text-foreground/70">Open 365 Days</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-sm lg:text-base text-foreground/70">Pro-Level Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Facility Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            onClick={() => openModal(index)}
            className="group relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute inset-0 cinematic-vignette opacity-40" />
            
            {/* Click indicator */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center"
                style={{ boxShadow: '0 0 20px hsl(271 81% 56% / 0.6)' }}>
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            
            {/* Stat badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-lg opacity-60 group-hover:opacity-100 transition-opacity" style={{ transform: 'scale(1.5)' }} />
                <span className="relative inline-block bg-primary text-primary-foreground font-bebas text-xs px-2 py-1 uppercase tracking-wider"
                  style={{ boxShadow: '0 0 20px hsl(271 81% 56% / 0.6)' }}>
                  {facility.stat}
                </span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 xl:p-8">
              <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-wider mb-2 glow-primary">
                {facility.subtitle}
              </p>
              <h3 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase mb-3 drop-shadow-lg">
                {facility.title}
              </h3>
              <div className="flex flex-wrap gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                {facility.features.slice(0, 2).map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-primary" />
                    <span className="font-oswald text-xs lg:text-sm text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
      
      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Modal Overlay */}
      {selectedFacility !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          
          {/* Atmospheric glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              boxShadow: '0 0 100px hsl(271 81% 56% / 0.3), 0 40px 80px -20px rgba(0,0,0,0.8)',
            }}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/80 hover:border-primary transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex flex-col md:flex-row bg-card border border-border/50">
              {/* Facility Image */}
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[500px] flex-shrink-0">
                <img 
                  src={facilities[selectedFacility].image} 
                  alt={facilities[selectedFacility].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                
                {/* Stat badge on image */}
                <div className="absolute top-4 left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary blur-xl opacity-80" style={{ transform: 'scale(2)' }} />
                    <span 
                      className="relative inline-block bg-primary text-primary-foreground font-bebas text-base px-4 py-2 uppercase tracking-wider"
                      style={{ boxShadow: '0 0 30px hsl(271 81% 56% / 0.8)' }}
                    >
                      {facilities[selectedFacility].stat}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Facility Info */}
              <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto">
                {/* Subtitle */}
                <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em] mb-2 glow-primary">
                  {facilities[selectedFacility].subtitle}
                </p>
                
                {/* Title */}
                <h3 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-2">
                  {facilities[selectedFacility].title}
                </h3>
                
                {/* Tagline */}
                <p className="font-oswald text-lg md:text-xl text-primary/80 italic mb-6">
                  "{facilities[selectedFacility].tagline}"
                </p>
                
                {/* Description */}
                <p className="font-oswald text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                  {facilities[selectedFacility].description}
                </p>
                
                {/* Features */}
                <div>
                  <p className="font-bebas text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    What's Included
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facilities[selectedFacility].features.map((feature, fIndex) => (
                      <div 
                        key={fIndex}
                        className="flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-3"
                        style={{ boxShadow: 'inset 0 0 20px hsl(271 81% 56% / 0.05)' }}
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-oswald text-sm text-foreground/90">{feature}</span>
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
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitySection;