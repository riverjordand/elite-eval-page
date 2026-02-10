import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lpaArch from "@/assets/lpa-arch.png";

const FooterSection = () => {
  return (
    <footer className="relative bg-card/50">
      {/* Final CTA Band */}
      <div className="border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16 py-16 md:py-20 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-4">
            Ready To Join <span className="text-primary">The Academy?</span>
          </h2>
          <p className="font-oswald text-sm text-foreground/50 max-w-md mx-auto mb-8">
            Take the first step toward elite development. Apply today or schedule a tour of our facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/appointments">
              <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base px-8 py-5 h-auto transition-all duration-300">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/appointments">
              <Button variant="outline" className="font-bebas uppercase tracking-widest text-base px-8 py-5 h-auto border-border/20 text-foreground/60 hover:bg-foreground/5 hover:border-foreground/30 transition-all duration-300">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={lpaArch} alt="LPA" className="h-7 w-auto opacity-80" />
              <span className="font-bebas text-base text-foreground/80 uppercase tracking-wider">Legendary Prep Academy</span>
            </div>
            <p className="font-oswald text-xs text-foreground/40 mb-4 leading-relaxed">
              Arizona's premier baseball development academy. Transforming serious athletes into college-ready players.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-foreground/30 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-foreground/30 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-foreground/30 hover:text-primary transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-sm text-foreground/60 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/appointments", label: "Book a Tour" },
                { to: "/apply", label: "Apply" },
                { to: "/schedule", label: "Schedule" },
                { to: "/sponsors", label: "Sponsors" },
                { to: "/staff", label: "Meet the Staff" },
                { to: "/contact", label: "Contact Us" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-oswald text-xs text-foreground/40 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-sm text-foreground/60 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-oswald text-xs text-foreground/40">2855 S Higley Rd, Suite 102<br />Gilbert, AZ 85295</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <a href="tel:+14805551234" className="font-oswald text-xs text-foreground/40 hover:text-primary transition-colors">(480) 555-1234</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <a href="mailto:info@legendaryprepaz.com" className="font-oswald text-xs text-foreground/40 hover:text-primary transition-colors">info@legendaryprepaz.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-oswald text-[10px] text-foreground/25">© 2024 Legendary Prep Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-oswald text-[10px] text-foreground/25 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-oswald text-[10px] text-foreground/25 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
