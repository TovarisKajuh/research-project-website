import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#gallery' },
    { name: 'Research', href: '#/research' },
    { name: 'Database', href: '#/database' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md border-b border-stone-100 shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        {/* Logo Section with 3 logos */}
        <div
          className="relative flex items-center gap-2 md:gap-3 lg:gap-4"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img
            src="/images/nav-logo-1.svg"
            alt="University Logo 1"
            className={`h-6 md:h-8 lg:h-10 w-auto transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
          <img
            src="/images/nav-logo-2.png"
            alt="University Logo 2"
            className={`h-6 md:h-8 lg:h-10 w-auto transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
          <img
            src="/images/nav-logo-3.svg"
            alt="University Logo 3"
            className={`h-6 md:h-8 lg:h-10 w-auto transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />

          {/* Floating hover text with cinematic fade-in */}
          <AnimatePresence>
            {logoHovered && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`absolute -bottom-10 md:-bottom-12 left-0 text-lg md:text-xl lg:text-2xl font-elegant italic whitespace-nowrap drop-shadow-md ${
                  scrolled ? 'text-stone-600' : 'text-white/90'
                }`}
              >
                A postdoctoral project at the Department of History, Faculty of Arts, University of Maribor.
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase relative transition-all duration-300 hover:-translate-y-0.5 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 ${scrolled ? 'text-stone-800 hover:text-stone-600' : 'text-stone-100 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-stone-800' : 'bg-white'}`} />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
             <X className={scrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
             <Menu className={scrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-950 text-white flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold uppercase tracking-widest hover:text-stone-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
