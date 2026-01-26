import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-['Playfair_Display'] text-2xl font-normal transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Eternal Frames
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 md:hidden bg-card rounded-lg shadow-xl p-6 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center rounded-full bg-primary px-6 py-2.5 text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
