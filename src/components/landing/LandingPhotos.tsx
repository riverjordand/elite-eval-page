import { useEffect, useRef, useState } from "react";
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
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll for Row 1 - continuous on all devices
  useEffect(() => {
    const scrollContainer = scrollContainer1Ref.current;
    if (!scrollContainer) return;

    let scrollPos = scrollContainer.scrollLeft;
    const scrollSpeed = 0.4;
    let animationId: number;

    const scroll = () => {
      if (isUserInteracting) return;
      
      scrollPos += scrollSpeed;
      
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isUserInteracting]);

  // Auto-scroll for Row 2 - continuous opposite direction
  useEffect(() => {
    const scrollContainer = scrollContainer2Ref.current;
    if (!scrollContainer) return;

    let scrollPos = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 0.4;
    let animationId: number;

    const scroll = () => {
      if (isUserInteracting) return;
      
      scrollPos -= scrollSpeed;
      
      if (scrollPos <= 0) {
        scrollPos = scrollContainer.scrollWidth / 2;
      }
      
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isUserInteracting]);

  // Handle user interaction
  useEffect(() => {
    const container1 = scrollContainer1Ref.current;
    const container2 = scrollContainer2Ref.current;
    if (!container1 || !container2) return;

    const handleInteractionStart = () => {
      setIsUserInteracting(true);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };

    const handleInteractionEnd = () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      interactionTimeoutRef.current = setTimeout(() => {
        setIsUserInteracting(false);
      }, 1500);
    };

    const containers = [container1, container2];
    containers.forEach(container => {
      container.addEventListener('touchstart', handleInteractionStart);
      container.addEventListener('touchend', handleInteractionEnd);
      container.addEventListener('scroll', handleInteractionStart);
      container.addEventListener('mousedown', handleInteractionStart);
      container.addEventListener('mouseup', handleInteractionEnd);
    });

    return () => {
      containers.forEach(container => {
        container.removeEventListener('touchstart', handleInteractionStart);
        container.removeEventListener('touchend', handleInteractionEnd);
        container.removeEventListener('scroll', handleInteractionStart);
        container.removeEventListener('mousedown', handleInteractionStart);
        container.removeEventListener('mouseup', handleInteractionEnd);
      });
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
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
