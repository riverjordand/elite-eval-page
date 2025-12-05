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

const MediaSection = () => {
  const [videoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );
  
  const [photoRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  return (
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
      
      {/* Videos Carousel - scrolls left */}
      <div className="relative mb-4 lg:mb-6 xl:mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 xl:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden" ref={videoRef}>
          <div className="flex gap-3 lg:gap-4 xl:gap-6">
            {videos.map((video, index) => (
              <div key={index} className="flex-[0_0_auto] min-w-0 w-56 md:w-80 lg:w-[420px] xl:w-[520px] 2xl:w-[600px]">
                <div className="aspect-video">
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
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
            {photos.map((photo, index) => (
              <div key={index} className="flex-[0_0_auto] min-w-0 w-40 md:w-60 lg:w-80 xl:w-96 2xl:w-[420px]">
                <div className="aspect-square">
                  <img 
                    src={photo} 
                    alt={`Training ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;