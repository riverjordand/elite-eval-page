import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 80% of viewport height
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        onClick={onClick}
        size="lg"
        className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:scale-105"
      >
        Book Free Evaluation
        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
