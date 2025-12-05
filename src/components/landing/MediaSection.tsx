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

// Triple for seamless loop
const loopedVideos = [...videos, ...videos, ...videos];
const loopedPhotos = [...photos, ...photos, ...photos];

const MediaSection = () => {
  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'end' },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-card/30 to-black" />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            See It In Action
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none">
            Training In Motion
          </h2>
        </div>
      </div>
      
      {/* Videos */}
      <div className="relative mb-6 overflow-hidden" ref={videoRef}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4">
          {loopedVideos.map((video, index) => (
            <div key={index} className="flex-none w-64 md:w-96 lg:w-[480px] aspect-video">
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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4">
          {loopedPhotos.map((photo, index) => (
            <div key={index} className="flex-none w-48 md:w-72 lg:w-80 aspect-square">
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
