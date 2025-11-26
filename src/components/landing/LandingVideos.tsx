import { useEffect, useRef } from "react";
import SectionDivider from "./SectionDivider";

interface TrainingVideo {
  src: string;
  alt: string;
}

interface LandingVideosProps {
  title?: string;
  subtitle?: string;
  videos: TrainingVideo[];
}

const LandingVideos = ({
  title = "Training In Motion",
  subtitle = "See our elite development program in action",
  videos
}: LandingVideosProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.25; // pixels per frame

    const autoScroll = () => {
      if (!container) return;

      scrollPosition += scrollSpeed;

      // Reset scroll position when reaching the end (seamless loop)
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos];

  return (
    <>
      <SectionDivider />
      <section className="bg-[#0a0a0a] py-12 md:py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bebas font-black uppercase text-foreground mb-3 md:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg font-oswald font-semibold uppercase text-primary">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Auto-scrolling container - full width */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-hidden pb-4 scrollbar-hide"
        >
          <div className="flex gap-3 md:gap-4" style={{ width: 'max-content' }}>
            {duplicatedVideos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[70vw] md:w-[280px] aspect-[9/16] rounded-lg overflow-hidden bg-muted"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingVideos;
