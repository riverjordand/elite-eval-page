import SectionDivider from "./SectionDivider";

interface TrainingVideo {
  src: string;
  alt: string;
}

interface LandingVideosProps {
  title?: string;
  subtitle?: string;
  videos: TrainingVideo[];
}

const LandingVideos = ({
  title = "Training In Motion",
  subtitle = "See our elite development program in action",
  videos
}: LandingVideosProps) => {
  return (
    <>
      <SectionDivider />
      <section className="bg-[#0a0a0a] py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bebas font-black uppercase text-foreground mb-3 md:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg font-oswald font-semibold uppercase text-primary">
              {subtitle}
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] aspect-[9/16] rounded-lg overflow-hidden bg-muted"
                >
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex md:gap-6 md:justify-center">
            {videos.map((video, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] aspect-[9/16] rounded-lg overflow-hidden bg-muted hover:scale-105 transition-transform duration-300"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingVideos;
