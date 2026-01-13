import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="NUPEC Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-serif font-bold text-lg">NUPEC</h3>
                <p className="text-primary-foreground/70 text-xs">Est. 1987</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              National Unity and Peace Corps - A paramilitary organization dedicated to fostering unity, peace, and conflict resolution across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Leadership", path: "/leadership" },
                { label: "Core Mandates", path: "/mandates" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Block1 Flat 1, Section 1, Yenagoa Street Area II Garki, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +234 803 608 0424
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  nigerianpeacecorps.org
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Registration */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4">
              <p className="text-xs text-primary-foreground/60 mb-1">CAC Registration</p>
              <p className="text-sm font-medium">CAC/IT/ NO. 6265</p>
              <p className="text-xs text-primary-foreground/60 mt-2">Registered: 4th August 1992</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} National Unity and Peace Corps (NUPEC). All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Licensed & Supervised by Ministry of Interior
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
