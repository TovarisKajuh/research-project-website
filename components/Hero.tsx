import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero.png';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-visible bg-stone-800">
      {/* Background placeholder while loading */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-700 to-stone-800" />

      {/* Main hero image - no filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: imageLoaded ? `url('/images/hero.png')` : 'none',
        }}
      />

      {/* Bottom grain transition - bleeds into dark gallery section */}
      <div className="grain-fade-to-dark" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="h-1 w-24 bg-white/50 backdrop-blur mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-light text-stone-100 font-sans tracking-wide">
            South Slavic Enemy Aliens from <br className="hidden md:block" />
            <span className="font-semibold text-white">Austria-Hungary</span> in the U.S. <br className="hidden md:block" />
            during World War
          </h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4 z-20"
      >
        <span className="text-xs uppercase tracking-widest text-stone-300">Scroll to Explore</span>
        <div className="p-3 border border-stone-400/50 rounded-full backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-stone-300 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
