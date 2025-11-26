import { useRef, useEffect } from "react";
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

  // Add drag-to-scroll functionality with momentum
  useEffect(() => {
    const addDragScroll = (container: HTMLDivElement) => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let velocity = 0;
      let lastX = 0;
      let lastTime = 0;
      let animationFrame: number;

      const handleMouseDown = (e: MouseEvent) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        lastX = e.pageX;
        lastTime = Date.now();
        velocity = 0;
        cancelAnimationFrame(animationFrame);
      };

      const handleMouseLeave = () => {
        if (isDown) {
          isDown = false;
          container.style.cursor = 'grab';
          container.style.userSelect = '';
          applyMomentum();
        }
      };

      const handleMouseUp = () => {
        if (isDown) {
          isDown = false;
          container.style.cursor = 'grab';
          container.style.userSelect = '';
          applyMomentum();
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        
        const x = e.pageX - container.offsetLeft;
        const currentTime = Date.now();
        const timeDelta = currentTime - lastTime;
        
        if (timeDelta > 0) {
          velocity = (lastX - e.pageX) / timeDelta;
        }
        
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
        
        lastX = e.pageX;
        lastTime = currentTime;
      };

      const applyMomentum = () => {
        const friction = 0.92;
        const minVelocity = 0.5;
        
        const animate = () => {
          if (Math.abs(velocity) > minVelocity) {
            container.scrollLeft += velocity * 10;
            velocity *= friction;
            animationFrame = requestAnimationFrame(animate);
          }
        };
        
        if (Math.abs(velocity) > minVelocity) {
          animate();
        }
      };

      container.style.cursor = 'grab';
      container.style.scrollBehavior = 'auto';
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrame);
      };
    };

    const container1 = scrollContainer1Ref.current;
    const container2 = scrollContainer2Ref.current;

    if (container1) {
      const cleanup1 = addDragScroll(container1);
      if (container2) {
        const cleanup2 = addDragScroll(container2);
        return () => {
          cleanup1();
          cleanup2();
        };
      }
      return cleanup1;
    }
  }, []);

  // Split photos into two rows and duplicate for seamless loop
  const halfLength = Math.ceil(photos.length / 2);
  const row1Photos = photos.slice(0, halfLength);
  const row2Photos = photos.slice(halfLength);

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

          {/* Two-row manual scroll layout */}
          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div 
              ref={scrollContainer1Ref}
              className="flex overflow-x-auto gap-3 md:gap-4 scrollbar-hide snap-x snap-mandatory pb-2"
            >
              {row1Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] md:w-[220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg snap-center"
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
              className="flex overflow-x-auto gap-3 md:gap-4 scrollbar-hide snap-x snap-mandatory pb-2"
            >
              {row2Photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] md:w-[220px] aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border shadow-lg snap-center"
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
