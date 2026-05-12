import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoBadge from "@/assets/lpa-badge-seafoam.png";

const navLinks = [
{ to: "/", label: "Home" },
{ to: "/experience", label: "The LPA Experience" },
{ to: "/staff", label: "Meet The Staff" },
{ to: "/schedule", label: "Schedule" },
{ to: "/sponsors", label: "Sponsors" },
{ to: "/apply", label: "Apply" },
{ to: "/contact", label: "Contact Us" }];


const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="w-full px-fluid-container-px py-3 md:py-4 lg:py-5">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src={logoBadge}
              alt="Legendary Prep Academy"
              className="h-12 md:h-14 lg:h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-fluid-gap">
            {navLinks.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              className={`font-bebas text-fluid-sm uppercase tracking-wider transition-colors ${
              location.pathname === link.to ? "text-primary" : "text-foreground/80 hover:text-primary"}`
              }>
                {link.label}
              </Link>
            )}
            <Link to="/appointments">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest border-glow text-fluid-sm px-fluid-md py-5 lg:py-6 h-auto min-h-[48px] transition-all duration-300 hover:scale-105">
                Book Tour
              </Button>
            </Link>
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/appointments" onClick={() => setMobileOpen(false)}>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-fluid-sm px-4 py-2.5 h-auto border-glow">
                Book Tour 
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1.5"
              aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen &&
      <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/30">
          <div className="flex flex-col px-fluid-md py-4 space-y-1">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMobileOpen(false)}
            className={`font-bebas text-fluid-xl uppercase tracking-wider py-3 border-b border-border/10 transition-colors ${
            location.pathname === link.to ? "text-primary" : "text-foreground/80"}`
            }>
                {link.label}
              </Link>
          )}
          </div>
        </div>
      }
    </nav>);
};

export default Navigation;
