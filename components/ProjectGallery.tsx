import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/content1.png', alt: 'Archival Document', caption: 'Historical immigration documents from the early 20th century' },
  { src: '/images/content2.png', alt: 'Immigrant Portrait', caption: 'Portrait photographs from the internment period' },
  { src: '/images/content3.png', alt: 'Ship manifest', caption: 'Ship manifests detailing passenger arrivals' },
  { src: '/images/content4.png', alt: 'Detail view', caption: 'Personal artifacts and correspondence' },
];

const ProjectGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

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

        {/* Desktop: Free floating image composition */}
        <div className="relative h-[800px] hidden md:block w-full">
          <FloatingImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="absolute left-0 top-0 w-[35%] z-10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            speed={1}
            onClick={() => openLightbox(0)}
          />

          <FloatingImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="absolute left-[30%] top-[20%] w-[25%] z-20 shadow-2xl cursor-pointer"
            speed={1.5}
            onClick={() => openLightbox(1)}
          />

          <FloatingImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="absolute right-0 bottom-0 w-[45%] z-10 sepia-[.3] hover:sepia-0 transition-all duration-700 cursor-pointer"
            speed={0.8}
            onClick={() => openLightbox(2)}
          />

          <FloatingImage
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="absolute right-[10%] top-[5%] w-[18%] z-30 shadow-xl aspect-square object-cover cursor-pointer"
            speed={2}
            onClick={() => openLightbox(3)}
          />
        </div>

        {/* Mobile View (Grid) */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${index === 0 ? 'h-96' : 'h-64'} object-cover shadow-lg ${index % 2 === 0 ? 'grayscale hover:grayscale-0' : ''} transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <p className="text-white text-lg font-light">{galleryImages[selectedImage].caption}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Helper component for mouse-reactive floating
const FloatingImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  onClick?: () => void;
}> = ({ src, alt, className, speed = 1, onClick }) => {
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
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default ProjectGallery;
