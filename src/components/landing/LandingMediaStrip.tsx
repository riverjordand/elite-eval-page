import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const videos = [
  "/training-video-01.mp4", "/training-video-02.mp4", "/training-video-03.mp4",
  "/training-video-04.mp4", "/training-video-05.mp4", "/training-video-06.mp4",
];

const photos = [
  "/action-01.jpg", "/action-02.jpg", "/action-03.jpg", "/action-04.jpg",
  "/action-05.jpg", "/action-06.jpg", "/action-07.jpg", "/action-08.jpg",
  "/action-09.jpg", "/action-10.jpg", "/action-11.jpg", "/action-12.jpg",
];

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
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight mb-2">
            Training In Motion
          </h2>
          <p className="font-oswald text-sm md:text-base text-muted-foreground">
            The energy, culture, and work that pushes players to grow
          </p>
        </div>
      </div>
      
      {/* Videos row */}
      <div className="mb-4 overflow-hidden" ref={videoRef}>
        <div className="flex gap-3 md:gap-4">
          {videos.map((video, index) => (
            <div key={index} className="flex-none w-48 md:w-64 lg:w-80 aspect-video rounded-lg overflow-hidden">
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
      
      {/* Photos row - opposite direction */}
      <div className="overflow-hidden" ref={photoRef}>
        <div className="flex gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="flex-none w-36 md:w-48 lg:w-56 aspect-square rounded-lg overflow-hidden">
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
