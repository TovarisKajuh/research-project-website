import React from 'react';
import { motion } from 'framer-motion';

const ProjectGallery: React.FC = () => {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        <div className="mb-24 md:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-4 block"
          >
            Visual Archives
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight uppercase tracking-wide"
          >
            Fragments of <br />Displacement
          </motion.h3>
          <p className="mt-6 text-stone-600 font-light text-lg leading-relaxed">
            Exploration of primary sources, archival photographs, and government documents revealing the lived experiences of immigrants designated as threats.
          </p>
        </div>

        {/* 
           Free floating image composition.
           On mobile: Stacked.
           On Desktop: Overlapping and positioned absolutely within a relative container.
        */}
        <div className="relative h-[800px] hidden md:block w-full">
            {/* Image 1 - Large Left */}
            <FloatingImage 
              src="https://picsum.photos/600/800?random=1" 
              alt="Archival Document"
              className="absolute left-0 top-0 w-[35%] z-10 grayscale hover:grayscale-0 transition-all duration-700"
              speed={1}
            />

            {/* Image 2 - Center overlap */}
            <FloatingImage 
              src="https://picsum.photos/500/600?random=2" 
              alt="Immigrant Portrait"
              className="absolute left-[30%] top-[20%] w-[25%] z-20 shadow-2xl"
              speed={1.5}
            />

             {/* Image 3 - Wide bottom right */}
             <FloatingImage 
              src="https://picsum.photos/700/500?random=3" 
              alt="Ship manifest"
              className="absolute right-0 bottom-0 w-[45%] z-10 sepia-[.3] hover:sepia-0 transition-all duration-700"
              speed={0.8}
            />

            {/* Image 4 - Small top right detail */}
            <FloatingImage 
              src="https://picsum.photos/300/300?random=4" 
              alt="Detail view"
              className="absolute right-[10%] top-[5%] w-[18%] z-30 shadow-xl aspect-square object-cover"
              speed={2}
            />
        </div>

        {/* Mobile View (Grid) */}
        <div className="md:hidden grid grid-cols-1 gap-8">
           <img src="https://picsum.photos/600/800?random=1" alt="Archival 1" className="w-full h-96 object-cover shadow-lg grayscale" />
           <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/500/600?random=2" alt="Archival 2" className="w-full h-64 object-cover shadow-lg" />
             <img src="https://picsum.photos/300/300?random=4" alt="Archival 3" className="w-full h-64 object-cover shadow-lg grayscale" />
           </div>
           <img src="https://picsum.photos/700/500?random=3" alt="Archival 4" className="w-full h-64 object-cover shadow-lg sepia-[.3]" />
        </div>

      </div>
    </section>
  );
};

// Helper component for mouse-reactive floating
const FloatingImage: React.FC<{ src: string; alt: string; className?: string; speed?: number }> = ({ src, alt, className, speed = 1 }) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        zIndex: 50,
        transition: { duration: 0.4, ease: "backOut" }
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default ProjectGallery;