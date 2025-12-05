import { Check, MapPin, Clock, Zap } from "lucide-react";
import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { 
    title: "Training Area", 
    subtitle: "Where Game Speed Happens",
    description: "Indoor turf with game-environment spacing, real-time data feedback, and pro-level equipment. Every rep simulates game conditions.",
    image: facilityTraining,
    features: ["Full pitching mounds", "Batting cages with metrics", "Real-time velocity tracking"]
  },
  { 
    title: "Strength & Conditioning", 
    subtitle: "Build Explosive Power",
    description: "Olympic lifting platforms, baseball-specific equipment, and programming designed by coaches who understand rotational athletes.",
    image: facilityStrength,
    features: ["Olympic lifting platforms", "Baseball-specific machines", "Power & speed equipment"]
  },
  { 
    title: "Video Analysis Lab", 
    subtitle: "See What Others Miss",
    description: "Multi-angle high-speed cameras capture every movement. Our coaches break down mechanics frame-by-frame like college programs do.",
    image: facilityVideo,
    features: ["High-speed cameras", "Frame-by-frame analysis", "Side-by-side comparisons"]
  },
  { 
    title: "Sports Medicine", 
    subtitle: "Stay Healthy, Stay Sharp",
    description: "Injury prevention isn't optional. Recovery protocols, arm care, and mobility work are built into every athlete's program.",
    image: facilitySports,
    features: ["Arm care protocols", "Recovery equipment", "Mobility programming"]
  },
];

const FacilitySection = () => {
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
          <div key={index} className="group relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden">
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 cinematic-vignette opacity-40" />
            
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
            
            {/* Animated border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-primary via-primary/80 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 delay-100" />
          </div>
        ))}
      </div>
      
      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FacilitySection;