import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/hero.png';
    img.onload = () => setImageLoaded(true);

    const mobileImg = new Image();
    mobileImg.src = '/images/hero-mobile.png';
    mobileImg.onload = () => setMobileImageLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-visible bg-stone-800">
      {/* Background placeholder while loading */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-700 to-stone-800" />

      {/* Desktop hero image - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: imageLoaded ? `url('/images/hero.png')` : 'none',
        }}
      />

      {/* Mobile hero image - visible only on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileImageLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: mobileImageLoaded ? `url('/images/hero-mobile.png')` : 'none',
        }}
      />

      {/* Mobile headline - only visible on mobile */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
          style={{ transform: 'translateY(-3rem)' }}
        >
          <h1 className="organetto-style text-5xl sm:text-6xl text-white mb-2 drop-shadow-lg" style={{ letterSpacing: '-0.02em' }}>
            ADAPTATION
          </h1>
          <p className="organetto-style text-xl sm:text-2xl text-white/90 tracking-widest drop-shadow-lg">
            AMIDST ADVERSITY
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient - smooth bleed into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(41, 37, 36, 0.2) 20%, rgba(41, 37, 36, 0.5) 40%, rgba(41, 37, 36, 0.7) 60%, rgba(249, 248, 246, 0.8) 80%, rgb(249, 248, 246) 100%)'
        }}
      />
      {/* Extended fade overlay for seamless transition */}
      <div
        className="absolute -bottom-32 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgb(249, 248, 246) 0%, rgba(249, 248, 246, 0) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 w-24 bg-gradient-to-r from-white/80 to-white/20 mb-6"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-light text-stone-100 font-sans tracking-wide">
            South Slavic Enemy Aliens from <br className="hidden md:block" />
            <span className="font-semibold text-white">Austria-Hungary</span> in the U.S. <br className="hidden md:block" />
            during World War
          </h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4 z-20 group cursor-pointer"
        onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest text-stone-600 group-hover:text-stone-800 transition-colors">Scroll to Explore</span>
        <div className="p-3 border border-stone-400/50 rounded-full backdrop-blur-sm group-hover:border-stone-600 group-hover:bg-white/20 transition-all duration-300">
          <ArrowDown className="w-4 h-4 text-stone-600 animate-bounce group-hover:text-stone-800" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
