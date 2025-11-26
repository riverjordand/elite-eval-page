import { Button } from "@/components/ui/button";
import logoBolt from "@/assets/lpa-logo-bolt.webp";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-7xl mx-auto relative">
          {/* Large background logo */}
          <img 
            src={logoBolt} 
            alt="LPA Logo" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] object-contain opacity-10 animate-fade-in pointer-events-none" 
            style={{ animationDelay: "0.1s" }}
          />
          
          <div className="relative z-10 mb-6">
            <h1 className="font-bebas uppercase leading-[0.75] animate-fade-in tracking-tight text-white text-center font-black">
              <span className="block text-4xl md:text-6xl lg:text-[7rem] xl:text-[8.5rem] whitespace-nowrap">Developing Elite</span>
              <span className="block text-3xl md:text-5xl lg:text-[5.8rem] xl:text-[7rem] text-primary">Student-Athletes</span>
              <span className="block text-3xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem]">For The Next Level</span>
            </h1>
          </div>
          
          <p className="font-oswald text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in font-semibold tracking-wide uppercase" style={{
          animationDelay: "0.2s"
        }}>
            Get a complete evaluation of your athlete's strengths, weaknesses, and college-ready potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-lg px-8 py-6 border-glow">
              Book Free Evaluation
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-wider text-lg px-8 py-6">
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
    </section>;
};
export default Hero;