import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CampBanner = () => (
  <Link
    to="/camps"
    className="fixed top-[72px] md:top-[88px] lg:top-[104px] left-0 right-0 z-[60] block w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
  >
    <div className="container mx-auto px-4 py-2.5 md:py-3 flex items-center justify-center gap-3 text-center">
      <span className="font-bebas uppercase tracking-[0.2em] text-sm md:text-base">
        Camp Registration Now Open
      </span>
      <ArrowRight className="w-4 h-4" />
    </div>
  </Link>
);

export default CampBanner;