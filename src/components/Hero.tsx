import { Button } from "@/components/ui/button";
import logoBolt from "@/assets/lpa-logo-bolt.webp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] mb-6 animate-fade-in tracking-tight text-white">
            Developing Elite
            <br />
            <span className="text-primary font-black">Student-Athletes</span>
            <br />
            for the Next Level
          </h1>
          
          <p className="font-bebas text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-2xl mx-auto animate-fade-in tracking-wide" style={{ animationDelay: "0.2s" }}>
            Get a complete evaluation of your athlete's strengths, weaknesses, and college-ready potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-lg px-8 py-6 border-glow"
            >
              Book Free Evaluation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wider text-lg px-8 py-6"
            >
              Take a Tour of the Facility
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
