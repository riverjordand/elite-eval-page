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
    <section className="relative py-20 md:py-28 lg:py-36 bg-black overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-16 mb-12 lg:mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-oswald text-sm text-primary uppercase tracking-[0.3em]">
                Gilbert, Arizona
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-4">
              16,000 Sq Ft of Pure
              <span className="block text-primary">Development</span>
            </h2>
          </div>
          <div>
            <p className="font-oswald text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              This isn't a warehouse with batting cages. It's a professional training complex built specifically 
              for developing the next generation of college and pro players. Every square foot has purpose.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-oswald text-sm text-foreground/70">Open 365 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="font-oswald text-sm text-foreground/70">Pro-Level Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Facility Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
        {facilities.map((facility, index) => (
          <div key={index} className="group relative aspect-[4/3] overflow-hidden">
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-oswald text-xs text-primary uppercase tracking-wider mb-2">
                {facility.subtitle}
              </p>
              <h3 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase mb-3">
                {facility.title}
              </h3>
              <p className="font-oswald text-sm text-foreground/70 mb-4 max-w-md hidden lg:block">
                {facility.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {facility.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-primary" />
                    <span className="font-oswald text-xs text-foreground/60">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitySection;