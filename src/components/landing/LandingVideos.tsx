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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isMobile) return;

    let animationFrameId: number;
    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.5;

    const continuousScroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(continuousScroll);
    };

    animationFrameId = requestAnimationFrame(continuousScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.play().catch(() => {});
      }
    });
  }, []);

  const duplicatedVideos = [...videos, ...videos];

  const handleVideoClick = (index: number) => {
    setSelectedVideoIndex(index % videos.length);
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
      <SectionDivider fromColor="#050505" toColor="#000000" />
      <section className="section-dark py-20 md:py-28 lg:py-40">
        {/* Header */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 mb-12 md:mb-16 lg:mb-24">
          <div className="max-w-[1800px] mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
              Training In<br />
              <span className="text-primary glow-primary">Motion</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-oswald text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Continuous auto-scrolling container - Full width */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 lg:gap-6" style={{ width: 'max-content' }}>
            {duplicatedVideos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleVideoClick(index)}
                className="flex-[0_0_70vw] md:flex-[0_0_400px] lg:flex-[0_0_450px] xl:flex-[0_0_500px] aspect-[9/16] rounded-xl lg:rounded-2xl overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity border border-border/30"
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
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-full bg-black border-primary/20 p-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

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
