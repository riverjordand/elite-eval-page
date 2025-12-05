import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { title: "Training Area", image: facilityTraining },
  { title: "Strength & Conditioning", image: facilityStrength },
  { title: "Video Analysis", image: facilityVideo },
  { title: "Sports Medicine", image: facilitySports },
];

const FacilitySection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            16,000 Square Feet
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none">
            The Facility
          </h2>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {facilities.map((facility, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden">
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-bebas text-lg md:text-2xl text-foreground uppercase">
                {facility.title}
              </h3>
            </div>
            
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitySection;
