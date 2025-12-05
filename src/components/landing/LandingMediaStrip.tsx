import useEmblaCarousel from 'embla-carousel-react';

const photos = [
  "/action-01.jpg", "/action-02.jpg", "/action-03.jpg", "/action-04.jpg",
  "/action-05.jpg", "/action-06.jpg", "/action-07.jpg", "/action-08.jpg",
  "/action-09.jpg", "/action-10.jpg", "/action-11.jpg", "/action-12.jpg",
];

const LandingMediaStrip = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: 'start'
  });

  return (
    <section className="py-8 md:py-12 bg-black overflow-hidden">
      <h2 className="font-bebas text-xl md:text-2xl text-center text-foreground mb-6 uppercase tracking-wide px-4">
        Athletes in Action
      </h2>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="flex-none w-40 h-40 md:w-56 md:h-56"
            >
              <img 
                src={photo} 
                alt={`Training ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
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
