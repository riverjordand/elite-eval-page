import { MapPin, Phone, Mail } from "lucide-react";
import logoText from "@/assets/lpa-logo-text.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img 
              src={logoText} 
              alt="Legendary Prep Academy" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Arizona's first and only professional baseball prep academy. Developing elite student-athletes for college and professional baseball.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-muted-foreground hover:text-primary transition-colors">
                  The Academy
                </a>
              </li>
              <li>
                <a href="#staff" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet The Staff
                </a>
              </li>
              <li>
                <a href="#commitments" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Phoenix, Arizona
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@legendaryprep.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@legendaryprep.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Legendary Prep Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
