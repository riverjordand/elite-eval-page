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

  const halfLength = Math.ceil(photos.length / 2);
  const row1Photos = photos.slice(0, halfLength);
  const row2Photos = photos.slice(halfLength);

  return (
    <>
      <SectionDivider fromColor="#000000" toColor="#050505" />
      <section className="section-darker py-20 md:py-28 lg:py-40 overflow-hidden">
        {/* Header */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 mb-12 md:mb-16 lg:mb-24">
          <div className="max-w-[1800px] mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
              Athletes In<br />
              <span className="text-primary glow-primary">Action</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-oswald text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Two-row carousel layout - Full width */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Row 1 */}
          <div className="overflow-hidden" ref={emblaRef1}>
            <div className="flex gap-4 lg:gap-6">
              {row1Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_180px] md:flex-[0_0_280px] lg:flex-[0_0_350px] xl:flex-[0_0_400px] aspect-square rounded-xl lg:rounded-2xl overflow-hidden bg-muted border border-border/30"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden" ref={emblaRef2}>
            <div className="flex gap-4 lg:gap-6">
              {row2Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_180px] md:flex-[0_0_280px] lg:flex-[0_0_350px] xl:flex-[0_0_400px] aspect-square rounded-xl lg:rounded-2xl overflow-hidden bg-muted border border-border/30"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPhotos;
