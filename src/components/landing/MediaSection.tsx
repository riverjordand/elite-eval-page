import { useState, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const videos = [
  "/training-video-01.mp4", "/training-video-02.mp4", "/training-video-03.mp4",
  "/training-video-04.mp4", "/training-video-05.mp4", "/training-video-06.mp4",
];

const photos = Array.from({ length: 68 }, (_, i) => `/action-${String(i + 1).padStart(2, '0')}.jpg`);

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MediaSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<{ type: 'photo' | 'video'; src: string; index: number } | null>(null);
  const randomizedPhotos = useMemo(() => shuffleArray(photos), []);

  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 2200, stopOnInteraction: false, stopOnMouseEnter: false })]
  );
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const closeLightbox = () => setLightbox(null);
  const navigateLightbox = (dir: 'prev' | 'next') => {
    if (!lightbox) return;
    const items = lightbox.type === 'photo' ? randomizedPhotos : videos;
    const idx = dir === 'next' ? (lightbox.index + 1) % items.length : (lightbox.index - 1 + items.length) % items.length;
    setLightbox({ ...lightbox, src: items[idx], index: idx });
  };

  return (
    <>
      <section ref={ref} className="relative py-20 md:py-28 lg:py-36 border-t border-border/10 overflow-hidden">
        <div className={`container mx-auto px-6 lg:px-16 mb-14 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">See It In Action</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-foreground uppercase leading-none">
              Training In Motion
            </h2>
          </div>
        </div>

        <div className={`relative mb-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden" ref={videoRef}>
            <div className="flex gap-2">
              {videos.map((video, i) => (
                <div key={i} className="flex-[0_0_auto] w-64 md:w-80 lg:w-[460px] xl:w-[540px] cursor-pointer group" onClick={() => setLightbox({ type: 'video', src: video, index: i })}>
                  <div className="aspect-video relative overflow-hidden">
                    <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary-foreground border-b-[6px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden" ref={photoRef}>
            <div className="flex gap-2">
              {randomizedPhotos.map((photo, i) => (
                <div key={i} className="flex-[0_0_auto] w-48 md:w-64 lg:w-80 xl:w-96 cursor-pointer group" onClick={() => setLightbox({ type: 'photo', src: photo, index: i })}>
                  <div className="aspect-square relative overflow-hidden">
                    <img src={photo} alt={`Training ${i + 1}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 z-50 p-2 text-foreground/50 hover:text-foreground" onClick={closeLightbox}><X className="w-7 h-7" /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground/50 hover:text-foreground" onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}><ChevronLeft className="w-8 h-8" /></button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-foreground/50 hover:text-foreground" onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}><ChevronRight className="w-8 h-8" /></button>
          <div className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === 'photo' ? <img src={lightbox.src} alt="Training" className="max-w-full max-h-[90vh] object-contain" /> : <video src={lightbox.src} controls autoPlay className="max-w-full max-h-[90vh]" />}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaSection;
