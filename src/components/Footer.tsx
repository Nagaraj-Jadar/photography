import { Instagram, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-4">
              Eternal Frames
            </h3>
            <p className="text-primary-foreground/80 font-light text-sm leading-relaxed">
              Capturing timeless moments with elegance, emotion, and cinematic artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <p className="text-primary-foreground/80 text-sm">
                hello@eternalframes.com
              </p>
              <p className="text-primary-foreground/80 text-sm">
                +91 81529 48407
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-primary-foreground/10 p-2.5 text-primary-foreground transition-all hover:bg-primary-foreground/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-primary-foreground/10 p-2.5 text-primary-foreground transition-all hover:bg-primary-foreground/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@eternalframes.com"
                className="flex items-center justify-center rounded-full bg-primary-foreground/10 p-2.5 text-primary-foreground transition-all hover:bg-primary-foreground/20"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm font-light">
            © {currentYear} Eternal Frames. All rights reserved. Crafted with love for your special moments.
          </p>
        </div>
      </div>
    </footer>
  );
}
