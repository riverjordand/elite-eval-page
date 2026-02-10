import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      } 
      bottom-0 left-0 right-0 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]
      bg-gradient-to-t from-background via-background/95 to-transparent
      md:bg-transparent md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:right-auto md:p-0 md:pb-0
      `}
    >
      <Link to="/appointments">
        <Button
          size="lg"
          className="
            w-full md:w-auto
            group bg-primary hover:bg-primary/90 text-primary-foreground 
            font-bebas uppercase tracking-[0.15em] 
            text-base md:text-lg 
            px-6 md:px-8 
            py-4 md:py-6 
            h-auto 
            shadow-[0_0_30px_hsl(var(--primary)/0.5)] 
            hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] 
            transition-all duration-300 
            md:hover:scale-105
          "
        >
          Book Free Evaluation
          <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
