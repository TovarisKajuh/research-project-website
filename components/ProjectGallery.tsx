import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/content1.png', alt: 'Archival Document', caption: 'Historical immigration documents from the early 20th century' },
  { src: '/images/content2.png', alt: 'Immigrant Portrait', caption: 'Portrait photographs from the internment period' },
  { src: '/images/content3.png', alt: 'Ship manifest', caption: 'Ship manifests detailing passenger arrivals' },
  { src: '/images/content4.png', alt: 'Detail view', caption: 'Personal artifacts and correspondence' },
  { src: '/images/content5.jpg', alt: 'Ellis Island Emigration', caption: 'Emigrants at Ellis Island processing center' },
  { src: '/images/content6.avif', alt: 'Immigration Processing', caption: 'Immigration officials processing new arrivals' },
  { src: '/images/content7.jpg', alt: 'Historical Research', caption: 'Archival research and document preservation' },
  { src: '/images/content8.webp', alt: 'Slavic Immigrant Family', caption: 'A Slavic immigrant family in America' },
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
        <div className="relative h-[900px] hidden md:block w-full">
          {/* Row 1 - Top */}
          <FloatingImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="absolute left-0 top-0 w-[32%] z-10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            onClick={() => openLightbox(0)}
          />

          <FloatingImage
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="absolute right-[8%] top-[2%] w-[16%] z-30 shadow-xl cursor-pointer"
            onClick={() => openLightbox(3)}
          />

          <FloatingImage
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            className="absolute right-[28%] top-[0%] w-[20%] z-20 sepia-[.2] hover:sepia-0 transition-all duration-700 cursor-pointer shadow-lg"
            onClick={() => openLightbox(6)}
          />

          {/* Row 2 - Middle */}
          <FloatingImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="absolute left-[28%] top-[22%] w-[22%] z-20 shadow-2xl cursor-pointer"
            onClick={() => openLightbox(1)}
          />

          <FloatingImage
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="absolute right-0 top-[18%] w-[24%] z-15 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer shadow-lg"
            onClick={() => openLightbox(4)}
          />

          <FloatingImage
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            className="absolute left-[5%] top-[38%] w-[18%] z-25 shadow-xl cursor-pointer"
            onClick={() => openLightbox(7)}
          />

          {/* Row 3 - Bottom */}
          <FloatingImage
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            className="absolute left-[25%] bottom-[15%] w-[20%] z-15 sepia-[.3] hover:sepia-0 transition-all duration-700 cursor-pointer shadow-lg"
            onClick={() => openLightbox(5)}
          />

          <FloatingImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="absolute right-0 bottom-0 w-[40%] z-10 sepia-[.3] hover:sepia-0 transition-all duration-700 cursor-pointer"
            onClick={() => openLightbox(2)}
          />
        </div>

        {/* Mobile View (Grid) */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className={`cursor-pointer ${index === 0 ? 'col-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${index === 0 ? 'h-64' : 'h-48'} object-cover shadow-lg ${index % 2 === 0 ? 'grayscale hover:grayscale-0' : ''} transition-all duration-500`}
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

// Helper component for floating images
const FloatingImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, className, onClick }) => {
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
