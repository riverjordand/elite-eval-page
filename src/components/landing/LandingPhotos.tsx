import { useEffect, useRef } from "react";
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
  const scrollContainer1Ref = useRef<HTMLDivElement>(null);
  const scrollContainer2Ref = useRef<HTMLDivElement>(null);

  // Auto-scroll for Row 1
  useEffect(() => {
    const scrollContainer = scrollContainer1Ref.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scrollSpeed = 0.15;

    const scroll = () => {
      scrollPos += scrollSpeed;
      
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Auto-scroll for Row 2 (opposite direction)
  useEffect(() => {
    const scrollContainer = scrollContainer2Ref.current;
    if (!scrollContainer) return;

    // Start at the end for reverse scroll
    let scrollPos = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 0.15;

    const scroll = () => {
      scrollPos -= scrollSpeed; // Subtract instead of add for reverse
      
      // Reset to middle when reaching start
      if (scrollPos <= 0) {
        scrollPos = scrollContainer.scrollWidth / 2;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Split photos into two rows and duplicate for seamless loop
  const halfLength = Math.ceil(photos.length / 2);
  const row1Photos = [...photos.slice(0, halfLength), ...photos.slice(0, halfLength)];
  const row2Photos = [...photos.slice(halfLength), ...photos.slice(halfLength)];

  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="bg-[#0a0a0a] py-12 md:py-16 overflow-hidden">
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

          {/* Two-row auto-scroll layout */}
          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div 
              ref={scrollContainer1Ref}
              className="flex overflow-x-hidden gap-3 md:gap-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {row1Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] md:w-[220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg"
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

            {/* Row 2 */}
            <div 
              ref={scrollContainer2Ref}
              className="flex overflow-x-hidden gap-3 md:gap-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {row2Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] md:w-[220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg"
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
      </section>
    </>
  );
};

export default LandingPhotos;
