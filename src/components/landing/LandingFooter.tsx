const actionPhotos = [
  { src: "/action-01.jpg", caption: "Strength Training" },
  { src: "/action-02.jpg", caption: "Bat Training" },
  { src: "/action-03.jpg", caption: "Batting Practice" },
  { src: "/action-04.jpg", caption: "Core Development" },
  { src: "/action-05.jpg", caption: "Mental Focus" },
  { src: "/action-06.jpg", caption: "Field Practice" },
  { src: "/action-07.jpg", caption: "Pitching Mechanics" },
  { src: "/action-08.jpg", caption: "Team Culture" },
  { src: "/action-09.jpg", caption: "Defensive Skills" },
  { src: "/action-10.jpg", caption: "Outfield Training" }
];

const LandingFooter = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Athletes In Action Photos */}
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bebas font-black uppercase text-center text-foreground mb-8 md:mb-12">
            Athletes In Action
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {actionPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-sm md:text-base font-oswald font-semibold uppercase text-white">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Legal */}
      <div className="py-6 md:py-8 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground font-oswald">
              <p className="text-center md:text-left">© {new Date().getFullYear()} Legendary Prep Academy. All rights reserved.</p>
              <div className="flex gap-4 md:gap-6">
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
