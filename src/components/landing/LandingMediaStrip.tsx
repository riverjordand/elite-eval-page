import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const baseVideos = [
  "/training-video-01.mp4", "/training-video-02.mp4", "/training-video-03.mp4",
  "/training-video-04.mp4", "/training-video-05.mp4", "/training-video-06.mp4",
];

const basePhotos = [
  "/action-01.jpg", "/action-02.jpg", "/action-03.jpg", "/action-04.jpg",
  "/action-05.jpg", "/action-06.jpg", "/action-07.jpg", "/action-08.jpg",
  "/action-09.jpg", "/action-10.jpg", "/action-11.jpg", "/action-12.jpg",
];

// Duplicate for seamless infinite scroll
const videos = [...baseVideos, ...baseVideos, ...baseVideos];
const photos = [...basePhotos, ...basePhotos, ...basePhotos];

const LandingMediaStrip = () => {
  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'end' },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
    <section className="relative py-14 md:py-20 lg:py-28 overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 section-darker" />
      
      {/* Atmospheric effects */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 mb-8 md:mb-12 lg:mb-16">
        <div className="text-center">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-xs md:text-sm lg:text-base px-4 md:px-6 py-1.5 mb-4 md:mb-5 uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            Live Training
          </div>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase tracking-tight mb-2 md:mb-3 glow-primary">
            Training In Motion
          </h2>
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground">
            The energy, culture, and work that pushes players to grow
          </p>
        </div>
      </div>
      
      {/* Videos row */}
      <div className="relative mb-4 md:mb-6 lg:mb-8 overflow-hidden" ref={videoRef}>
        {/* Side fades for cinematic effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-3 md:gap-5 lg:gap-6">
          {videos.map((video, index) => (
            <div key={index} className="flex-none w-48 md:w-80 lg:w-[420px] xl:w-[500px] aspect-video rounded-xl lg:rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
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
      
      {/* Photos row */}
      <div className="relative overflow-hidden" ref={photoRef}>
        {/* Side fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-3 md:gap-5 lg:gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="flex-none w-36 md:w-60 lg:w-80 xl:w-[360px] aspect-square rounded-xl lg:rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
              <img 
                src={photo} 
                alt={`Action ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingMediaStrip;
