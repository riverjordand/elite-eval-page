import { useEffect, useRef, useState, useCallback } from "react";

export const useParallax = (speed = 0.3) => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;
    // Only calculate when element is near viewport
    if (rect.bottom < -200 || rect.top > windowH + 200) return;
    const center = rect.top + rect.height / 2;
    const viewCenter = windowH / 2;
    setOffset((center - viewCenter) * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { ref, offset };
};
