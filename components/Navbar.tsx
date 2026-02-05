import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research', href: '#gallery' },
    { name: 'Profile', href: '#researcher' },
    { name: 'Affiliations', href: '#affiliations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md border-b border-stone-100 shadow-sm'
            : 'bg-transparent text-white' // Assuming hero image is dark-ish
        }`}
      >
        <div className="relative group flex items-center gap-3">
          <a href="https://ff.um.si/" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo-1.svg" alt="Faculty of Arts, University of Maribor" className={`h-5 md:h-6 ${scrolled ? '' : 'brightness-0 invert'} opacity-20 hover:opacity-40 transition-opacity`} />
          </a>
          <a href="https://www.aris-rs.si/sl/" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo-2.png" alt="ARIS - Slovenian Research and Innovation Agency" className={`h-5 md:h-6 ${scrolled ? '' : 'brightness-0 invert'} opacity-20 hover:opacity-40 transition-opacity`} />
          </a>
          <a href="https://www.um.si/objava/univerza-v-mariboru-praznuje-50-let/" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo-3.svg" alt="University of Maribor 50th Anniversary" className={`h-5 md:h-6 ${scrolled ? '' : 'brightness-0 invert'} opacity-20 hover:opacity-40 transition-opacity`} />
          </a>
          <div className={`absolute top-full left-0 mt-2 px-3 py-2 text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${scrolled ? 'bg-stone-900 text-white' : 'bg-white text-stone-900'}`}>
            A postdoctoral project at the Department of History, Faculty of Arts, University of Maribor.
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold tracking-widest uppercase relative transition-all duration-300 hover:-translate-y-0.5 ${scrolled ? 'text-stone-800 hover:text-stone-600' : 'text-stone-100 hover:text-white'}`}
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