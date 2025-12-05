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
    <section className="py-10 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-6 md:mb-10 lg:mb-14">
        <div className="text-center">
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-tight mb-1 md:mb-2">
            Training In Motion
          </h2>
          <p className="font-oswald text-xs md:text-base lg:text-lg text-muted-foreground">
            The energy, culture, and work that pushes players to grow
          </p>
        </div>
      </div>
      
      {/* Videos row */}
      <div className="mb-3 md:mb-4 lg:mb-6 overflow-hidden" ref={videoRef}>
        <div className="flex gap-2 md:gap-4 lg:gap-6">
          {videos.map((video, index) => (
            <div key={index} className="flex-none w-44 md:w-72 lg:w-96 xl:w-[450px] aspect-video rounded-lg lg:rounded-xl overflow-hidden">
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
      <div className="overflow-hidden" ref={photoRef}>
        <div className="flex gap-2 md:gap-4 lg:gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="flex-none w-32 md:w-52 lg:w-72 xl:w-80 aspect-square rounded-lg lg:rounded-xl overflow-hidden">
              <img 
                src={photo} 
                alt={`Action ${index + 1}`}
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

export default LandingMediaStrip;
