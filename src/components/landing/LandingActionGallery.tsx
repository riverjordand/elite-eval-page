import SectionDivider from "./SectionDivider";

interface MediaItem {
  type: 'photo' | 'video';
  src: string;
  alt: string;
}

interface LandingActionGalleryProps {
  title?: string;
  subtitle?: string;
  media: MediaItem[];
}

const LandingActionGallery = ({
  title = "Elite Training In Action",
  subtitle = "Real athletes. Real results. Real development.",
  media
}: LandingActionGalleryProps) => {
  return (
    <>
      <SectionDivider />
      <section className="bg-[#1a1a1a] py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bebas font-black uppercase text-foreground mb-3 md:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg font-oswald font-semibold uppercase text-primary">
              {subtitle}
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {media.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[75vw] aspect-square rounded-lg overflow-hidden bg-muted"
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {media.map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden bg-muted hover:scale-105 transition-transform duration-300"
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingActionGallery;
