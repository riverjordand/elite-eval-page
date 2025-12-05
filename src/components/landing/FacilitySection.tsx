import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  { title: "Training Area", subtitle: "Indoor turf with real-time data feedback", image: facilityTraining },
  { title: "Strength & Conditioning", subtitle: "Olympic lifting and baseball-specific power", image: facilityStrength },
  { title: "Video Analysis", subtitle: "Multi-angle capture and frame-by-frame breakdowns", image: facilityVideo },
  { title: "Sports Medicine", subtitle: "Recovery protocols and injury prevention", image: facilitySports },
];

const FacilitySection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 bg-black overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 mb-10 md:mb-14 lg:mb-16 xl:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
              16,000 Square Feet
            </p>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none">
              The Facility
            </h2>
          </div>
          <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground max-w-md">
            Professional-grade equipment and spaces built for serious development.
          </p>
        </div>
      </div>
      
      {/* Image Grid - 2x2 on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
        {facilities.map((facility, index) => (
          <div key={index} className="group relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img 
              src={facility.image} 
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
              <h3 className="font-bebas text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground uppercase mb-1 lg:mb-2">
                {facility.title}
              </h3>
              <p className="font-oswald text-[10px] md:text-xs lg:text-sm text-foreground/60 hidden md:block">
                {facility.subtitle}
              </p>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitySection;
