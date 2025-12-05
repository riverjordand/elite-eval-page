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

// Shuffle array function
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
  
  // Randomize photos on mount
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
      <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-card/20 to-black" />
        
        {/* Header */}
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 mb-10 md:mb-14 lg:mb-16 xl:mb-20 relative z-10">
          <div className="text-center">
            <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
              See It In Action
            </p>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none">
              Training In Motion
            </h2>
          </div>
        </div>
        
        {/* Videos Carousel */}
        <div className="relative mb-4 lg:mb-6 xl:mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={videoRef}>
            <div className="flex gap-3 lg:gap-4 xl:gap-6">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-0 w-56 md:w-80 lg:w-[420px] xl:w-[520px] 2xl:w-[600px] cursor-pointer group"
                  onClick={() => openLightbox('video', video, index)}
                >
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Photos Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={photoRef}>
            <div className="flex gap-3 lg:gap-4 xl:gap-6">
              {randomizedPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_auto] min-w-0 w-40 md:w-60 lg:w-80 xl:w-96 2xl:w-[420px] cursor-pointer group"
                  onClick={() => openLightbox('photo', photo, index)}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img 
                      src={photo} 
                      alt={`Training ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          {/* Content */}
          <div 
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === 'photo' ? (
              <img 
                src={lightbox.src} 
                alt="Training" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh]"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaSection;