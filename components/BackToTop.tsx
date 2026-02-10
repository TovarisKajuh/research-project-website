import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
                     w-11 h-11 md:w-12 md:h-12
                     bg-stone-800/90 hover:bg-stone-900
                     text-white shadow-lg hover:shadow-xl
                     rounded-full flex items-center justify-center
                     backdrop-blur-sm border border-stone-700/50
                     transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
