import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone-900">
      {/* 
        IMAGE PLACEHOLDER:
        The prompt specifies a huge image placeholder.
        I'm using a dark, moody placeholder to simulate the "High Contrast" requirement 
        and allow white text to pop.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
           // Using a grayscale distinct architectural or historical placeholder
           backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
        {/* Subtext container */}
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
        className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4"
      >
        <span className="text-xs uppercase tracking-widest text-white/70">Scroll to Explore</span>
        <div className="p-3 border border-white/20 rounded-full backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;