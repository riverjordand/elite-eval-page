import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const videos = [
  "/training-video-01.mp4", "/training-video-02.mp4", "/training-video-03.mp4",
  "/training-video-04.mp4", "/training-video-05.mp4", "/training-video-06.mp4",
];

const photos = [
  "/action-01.jpg", "/action-02.jpg", "/action-03.jpg", "/action-04.jpg",
  "/action-05.jpg", "/action-06.jpg", "/action-07.jpg", "/action-08.jpg",
];

const loopedVideos = [...videos, ...videos, ...videos];
const loopedPhotos = [...photos, ...photos, ...photos];

const MediaSection = () => {
  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 0, stopOnInteraction: false, playOnInit: true })]
  );
  
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start', direction: 'rtl' },
    [Autoplay({ delay: 0, stopOnInteraction: false, playOnInit: true })]
  );

  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-card/20 to-black" />
      
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 mb-10 md:mb-14 lg:mb-16 xl:mb-20">
        <div className="text-center">
          <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
            See It In Action
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none">
            Training In Motion
          </h2>
        </div>
      </div>
      
      {/* Videos */}
      <div className="relative mb-4 lg:mb-6 xl:mb-8 overflow-hidden" ref={videoRef}>
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-3 lg:gap-4 xl:gap-6">
          {loopedVideos.map((video, index) => (
            <div key={index} className="flex-none w-56 md:w-80 lg:w-[420px] xl:w-[520px] 2xl:w-[600px] aspect-video">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Photos */}
      <div className="relative overflow-hidden" ref={photoRef}>
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-3 lg:gap-4 xl:gap-6">
          {loopedPhotos.map((photo, index) => (
            <div key={index} className="flex-none w-40 md:w-60 lg:w-80 xl:w-96 2xl:w-[420px] aspect-square">
              <img 
                src={photo} 
                alt={`Training ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
