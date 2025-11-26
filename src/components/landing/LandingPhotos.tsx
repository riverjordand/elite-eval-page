import SectionDivider from "./SectionDivider";

interface ActionPhoto {
  src: string;
  alt: string;
}

interface LandingPhotosProps {
  title?: string;
  subtitle?: string;
  photos: ActionPhoto[];
}

const LandingPhotos = ({
  title = "Athletes In Action",
  subtitle = "Elite training captured at every moment",
  photos
}: LandingPhotosProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="bg-[#0a0a0a] py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bebas font-black uppercase text-foreground mb-3 md:mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-2xl lg:text-3xl font-oswald font-semibold uppercase text-primary">
              {subtitle}
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-[75vw] aspect-square rounded-lg overflow-hidden bg-muted border-[3px] border-border shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group aspect-square rounded-lg overflow-hidden bg-muted border-[3px] border-border shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
      </div>
    </section>
    </>
  );
};

export default LandingPhotos;
