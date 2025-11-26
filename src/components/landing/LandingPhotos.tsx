import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef1] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    containScroll: false
  });
  
  const [emblaRef2] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    containScroll: false
  });

  // Split photos into two rows
  const halfLength = Math.ceil(photos.length / 2);
  const row1Photos = photos.slice(0, halfLength);
  const row2Photos = photos.slice(halfLength);

  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="bg-[#1a1a1a] py-12 md:py-16 overflow-hidden">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-3xl md:text-6xl font-bebas font-black uppercase text-foreground mb-3 md:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-xl font-oswald font-semibold uppercase text-primary">
              {subtitle}
            </p>
          </div>

          {/* Two-row carousel layout */}
          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div className="overflow-hidden" ref={emblaRef1}>
              <div className="flex gap-3 md:gap-4">
                {row1Photos.map((photo, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_150px] md:flex-[0_0_220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden" ref={emblaRef2}>
              <div className="flex gap-3 md:gap-4">
                {row2Photos.map((photo, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_150px] md:flex-[0_0_220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPhotos;
