import { useState, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  "/training-video-01.mp4", "/training-video-02.mp4", "/training-video-03.mp4",
  "/training-video-04.mp4", "/training-video-05.mp4", "/training-video-06.mp4",
];

const photos = [
  "/action-01.jpg", "/action-02.jpg", "/action-03.jpg", "/action-04.jpg",
  "/action-05.jpg", "/action-06.jpg", "/action-07.jpg", "/action-08.jpg",
  "/action-09.jpg", "/action-10.jpg", "/action-11.jpg", "/action-12.jpg",
  "/action-13.jpg", "/action-14.jpg", "/action-15.jpg", "/action-16.jpg",
  "/action-17.jpg", "/action-18.jpg", "/action-19.jpg", "/action-20.jpg",
  "/action-21.jpg", "/action-22.jpg", "/action-23.jpg", "/action-24.jpg",
  "/action-25.jpg", "/action-26.jpg", "/action-27.jpg", "/action-28.jpg",
  "/action-29.jpg", "/action-30.jpg", "/action-31.jpg", "/action-32.jpg",
  "/action-33.jpg", "/action-34.jpg", "/action-35.jpg", "/action-36.jpg",
  "/action-37.jpg", "/action-38.jpg", "/action-39.jpg", "/action-40.jpg",
  "/action-41.jpg", "/action-42.jpg", "/action-43.jpg", "/action-44.jpg",
  "/action-45.jpg", "/action-46.jpg", "/action-47.jpg", "/action-48.jpg",
  "/action-49.jpg", "/action-50.jpg", "/action-51.jpg", "/action-52.jpg",
  "/action-53.jpg", "/action-54.jpg", "/action-55.jpg", "/action-56.jpg",
  "/action-57.jpg", "/action-58.jpg", "/action-59.jpg", "/action-60.jpg",
  "/action-61.jpg", "/action-62.jpg", "/action-63.jpg", "/action-64.jpg",
  "/action-65.jpg", "/action-66.jpg", "/action-67.jpg", "/action-68.jpg",
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MediaSection = () => {
  const [lightbox, setLightbox] = useState<{ type: 'photo' | 'video'; src: string; index: number } | null>(null);
  const randomizedPhotos = useMemo(() => shuffleArray(photos), []);
  
  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );
  
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const openLightbox = (type: 'photo' | 'video', src: string, index: number) => {
    setLightbox({ type, src, index });
  };

  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightbox) return;
    const items = lightbox.type === 'photo' ? randomizedPhotos : videos;
    const newIndex = direction === 'next' 
      ? (lightbox.index + 1) % items.length 
      : (lightbox.index - 1 + items.length) % items.length;
    setLightbox({ ...lightbox, src: items[newIndex], index: newIndex });
  };

  return (
    <>
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
        
        {/* Header */}
        <div className="container mx-auto px-6 lg:px-16 mb-12 md:mb-16 relative z-10">
          <div className="text-center">
            <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
              See It In Action
            </p>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none">
              Training In Motion
            </h2>
          </div>
        </div>
        
        {/* Videos */}
        <div className="relative mb-3 lg:mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={videoRef}>
            <div className="flex gap-2 lg:gap-3">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-0 w-60 md:w-80 lg:w-[440px] xl:w-[520px] cursor-pointer group"
                  onClick={() => openLightbox('video', video, index)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-primary-foreground border-b-6 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Photos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={photoRef}>
            <div className="flex gap-2 lg:gap-3">
              {randomizedPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-0 w-44 md:w-64 lg:w-80 xl:w-96 cursor-pointer group"
                  onClick={() => openLightbox('photo', photo, index)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={photo} 
                      alt={`Training ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 z-50 p-2 text-foreground/60 hover:text-foreground transition-colors" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground/60 hover:text-foreground transition-colors" onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground/60 hover:text-foreground transition-colors" onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}>
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === 'photo' ? (
              <img src={lightbox.src} alt="Training" className="max-w-full max-h-[90vh] object-contain" />
            ) : (
              <video src={lightbox.src} controls autoPlay className="max-w-full max-h-[90vh]" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaSection;
