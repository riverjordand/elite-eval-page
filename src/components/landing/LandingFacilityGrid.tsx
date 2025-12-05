import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  {
    title: "Training Area",
    description: "Indoor turf, live data, game-environment spacing",
    image: facilityTraining
  },
  {
    title: "Strength & Conditioning",
    description: "Olympic lifting, power development, injury prevention",
    image: facilityStrength
  },
  {
    title: "Video Analysis",
    description: "Multi-angle capture, frame-by-frame breakdowns",
    image: facilityVideo
  },
  {
    title: "Sports Medicine",
    description: "Recovery protocols and preventative care",
    image: facilitySports
  }
];

const LandingFacilityGrid = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Dramatic dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 mb-4 md:mb-5 uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            16,000 Sq Ft
          </div>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase tracking-tight mb-3 md:mb-4 glow-primary">
            Where Elite Athletes Train
          </h2>
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade development built for serious players
          </p>
        </div>
        
        {/* Grid - cinematic cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img 
                src={facility.image} 
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_20px_rgba(0,0,0,0.5)]" />
              
              {/* Primary glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-10">
                <h3 className="font-bebas text-base md:text-2xl lg:text-3xl text-foreground uppercase leading-tight mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="font-oswald text-[11px] md:text-base lg:text-lg text-foreground/70 leading-relaxed">
                  {facility.description}
                </p>
              </div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 lg:h-1.5 bg-gradient-to-r from-primary via-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFacilityGrid;
