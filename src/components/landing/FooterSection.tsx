import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lpaArch from "@/assets/lpa-arch.png";

const FooterSection = () => {
  return (
    <footer className="relative">
      {/* CTA Band */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-primary-foreground uppercase leading-[0.88] mb-2">
                Ready to Join?
              </h2>
              <p className="font-oswald text-sm text-primary-foreground/60">
                Take the first step toward elite development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/appointments">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bebas uppercase tracking-[0.2em] text-sm px-8 py-5 h-auto transition-all duration-300">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/appointments">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bebas uppercase tracking-[0.2em] text-sm px-8 py-5 h-auto transition-all duration-300">
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card/50 border-t border-border/10">
        <div className="container mx-auto px-6 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={lpaArch} alt="LPA" className="h-6 w-auto opacity-60" />
                <span className="font-bebas text-sm text-foreground/50 uppercase tracking-wider">Legendary Prep Academy</span>
              </div>
              <p className="font-oswald text-[11px] text-foreground/25 leading-relaxed mb-4">
                Arizona's premier baseball development academy. Transforming serious athletes into college-ready players.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="text-foreground/20 hover:text-primary transition-colors"><Icon className="w-4 h-4" /></a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bebas text-xs text-foreground/30 uppercase tracking-[0.3em] mb-4">Links</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/appointments", label: "Book a Tour" }, { to: "/apply", label: "Apply" },
                  { to: "/schedule", label: "Schedule" }, { to: "/staff", label: "Staff" },
                  { to: "/contact", label: "Contact" },
                ].map(link => (
                  <li key={link.to}><Link to={link.to} className="font-oswald text-[11px] text-foreground/25 hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bebas text-xs text-foreground/30 uppercase tracking-[0.3em] mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-oswald text-[11px] text-foreground/25">2855 S Higley Rd, Suite 102<br />Gilbert, AZ 85295</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                  <a href="tel:+14805551234" className="font-oswald text-[11px] text-foreground/25 hover:text-primary transition-colors">(480) 555-1234</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                  <a href="mailto:info@legendaryprepaz.com" className="font-oswald text-[11px] text-foreground/25 hover:text-primary transition-colors">info@legendaryprepaz.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-oswald text-[9px] text-foreground/15 uppercase tracking-wider">© 2024 Legendary Prep Academy</p>
            <div className="flex gap-6">
              <a href="#" className="font-oswald text-[9px] text-foreground/15 hover:text-primary uppercase tracking-wider transition-colors">Privacy</a>
              <a href="#" className="font-oswald text-[9px] text-foreground/15 hover:text-primary uppercase tracking-wider transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
