import logo from "@/assets/originstack-logo.png";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.1_0.02_250)] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={logo} alt="OriginStack Solutions" className="h-14 w-auto mb-4" />
            <p className="text-white/70 text-sm italic mb-4">"From Origin to Innovation."</p>
            <p className="text-white/60 text-sm">
              Engineering modern software, AI, and cloud platforms for ambitious teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-smooth">
                  Industries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Software Development</li>
              <li>AI Solutions</li>
              <li>Cloud Solutions</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@originstacktech.com"
                  className="hover:text-white transition-smooth"
                >
                  info@originstacktech.com
                </a>
              </li>
              <a
                    href="https://originstacktech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-smooth"
                  >
                    www.originstacktech.com
                  </a>
            </ul>
                         {/* SOCIAL ICONS (ADDED BELOW CONTACT) */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/company/originstack-technologies-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/originstack.solutions?igsh=MTlnOWticTNucm13dw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <div>© 2026 OriginStack Solutions. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white transition-smooth">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-smooth">
              Terms
            </a>
          </div>
        </div>
   
      </div>
    </footer>
  );
}