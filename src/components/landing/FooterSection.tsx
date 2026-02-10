import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import lpaArch from "@/assets/lpa-arch.png";

const FooterSection = () => {
  return (
    <footer className="relative bg-black pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={lpaArch} alt="LPA" className="h-8 w-auto" />
              <span className="font-bebas text-lg text-foreground uppercase tracking-wider">Legendary Prep Academy</span>
            </div>
            <p className="font-oswald text-sm text-muted-foreground mb-4">
              Arizona's premier baseball development academy. Transforming serious athletes into college-ready players.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-foreground uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Free Evaluation</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Training Programs</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Meet the Coaches</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-foreground uppercase mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Elite Membership</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Private Lessons</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Pitching Development</a></li>
              <li><a href="#" className="font-oswald text-sm text-muted-foreground hover:text-primary">Hitting Academy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-foreground uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="font-oswald text-sm text-muted-foreground">2855 S Higley Rd, Suite 102<br />Gilbert, AZ 85295</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+14805551234" className="font-oswald text-sm text-muted-foreground hover:text-primary">(480) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@legendaryprepaz.com" className="font-oswald text-sm text-muted-foreground hover:text-primary">info@legendaryprepaz.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-oswald text-xs text-muted-foreground">© 2024 Legendary Prep Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-oswald text-xs text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="font-oswald text-xs text-muted-foreground hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;