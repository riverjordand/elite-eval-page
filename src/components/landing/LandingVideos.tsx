import { useEffect, useRef, useState } from "react";
import SectionDivider from "./SectionDivider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Play videos when they mount on mobile
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(() => {
          // Ignore autoplay errors - browser may block it
        });
      }
    });
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.25; // pixels per frame
    let isUserScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = Date.now();

    const autoScroll = () => {
      if (!container) return;
      
      // On mobile, stop if user is scrolling
      if (!isDesktop && isUserScrolling) return;

      scrollPosition += scrollSpeed;

      // Reset scroll position when reaching the end (seamless loop)
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Only add scroll listener on mobile
    const handleScroll = () => {
      const now = Date.now();
      // Ignore programmatic scrolls (less than 16ms apart)
      if (now - lastScrollTime < 16) {
        lastScrollTime = now;
        return;
      }
      lastScrollTime = now;
      
      isUserScrolling = true;
      scrollPosition = container.scrollLeft;
      
      clearTimeout(scrollTimeout);
      
      // Resume auto-scroll after user stops scrolling for 2 seconds
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        animationFrameId = requestAnimationFrame(autoScroll);
      }, 2000);
    };

    // Only listen to scroll events on mobile
    if (!isDesktop) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Start auto-scroll immediately
    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(scrollTimeout);
      if (!isDesktop) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos];

  const handleVideoClick = (index: number) => {
    // Get the original video index (not the duplicated one)
    const originalIndex = index % videos.length;
    setSelectedVideoIndex(originalIndex);
    setIsDialogOpen(true);
  };

  const handlePrevious = () => {
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex((selectedVideoIndex - 1 + videos.length) % videos.length);
    }
  };

  const handleNext = () => {
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex((selectedVideoIndex + 1) % videos.length);
    }
  };

  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="bg-[#1a1a1a] py-12 md:py-16">
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

        {/* Auto-scrolling container with manual scroll override - full width */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="flex gap-3 md:gap-4" style={{ width: 'max-content' }}>
            {duplicatedVideos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleVideoClick(index)}
                className="flex-shrink-0 w-[70vw] md:w-[350px] aspect-[9/16] rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
              >
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  webkit-playsinline="true"
                />
              </div>
            ))}
          </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-full bg-black border-primary/20 p-0">
          <div className="relative">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsDialogOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Video Container */}
            {selectedVideoIndex !== null && (
              <div className="relative aspect-[9/16] max-h-[80vh] mx-auto">
                <video
                  src={videos[selectedVideoIndex].src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  loop
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Video Counter */}
            {selectedVideoIndex !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full font-oswald text-sm">
                {selectedVideoIndex + 1} / {videos.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
    </>
  );
};

export default LandingVideos;
