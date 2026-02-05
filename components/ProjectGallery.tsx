import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  // Section 1: "Leaving the Old World" - 2 images
  { src: '/images/gallery-1.png', alt: 'Steamship arriving in New York', caption: 'A steamship arrives in New York Harbor, the Statue of Liberty welcoming new arrivals' },
  { src: '/images/gallery-2.png', alt: 'Agricultural life in homeland', caption: 'Working the fields in the old country — the life they left behind' },
  // Section 2: "A New Beginning" - 3 images
  { src: '/images/gallery-3.png', alt: 'Immigrants on dock', caption: 'Newly arrived immigrants on the dock, gazing at the Manhattan skyline' },
  { src: '/images/gallery-4.png', alt: 'Immigrant children in garden', caption: 'Children of immigrants tending the family garden in their new homeland' },
  { src: '/images/gallery-5.png', alt: 'Immigrant family home', caption: 'An immigrant family on the porch of their American home' },
  // Section 3: "The Shadow of War" - 3 images
  { src: '/images/gallery-6.png', alt: 'Enemy Alien designation', caption: 'The mark of suspicion — Enemy Alien status divided loyalties and identities' },
  { src: '/images/gallery-7.png', alt: 'Memorial certificate', caption: 'In Memory Of — many immigrants proved their loyalty with the ultimate sacrifice' },
  { src: '/images/gallery-8.png', alt: 'Soldier portrait', caption: 'A young immigrant soldier in U.S. Army uniform, ready to serve his new country' },
  // Section 4: "Resilience and Legacy" - 1 image (borderless)
  { src: '/images/gallery-9.png', alt: 'Immigrant legacy', caption: 'From distant shores to American soil — the enduring legacy of South Slavic immigrants' },
];

const storyParagraphs = [
  {
    title: "Leaving the Old World",
    text: "They came from the Austro-Hungarian lands inhabited by Slovenians, Croats, and Serbs–mountain villages, market towns, and rural districts where opportunities were limited and the future often felt predetermined. In the last decades of the nineteenth century and the years before the First World War, hundreds of thousands set out for the United States, drawn by the promise of wages and mobility they had often encountered first in letters from relatives and neighbors who had gone ahead. Most did not leave as whole families: the typical migrant was a young man traveling alone, intending to earn money and either return home or send for others later. Some did go back; many stayed, and over time wives, children, siblings, and friends followed, turning individual departures into chain migrations that would carry them, at least at first, through the gates of Ellis Island."
  },
  {
    title: "A New Beginning",
    text: "At Ellis Island they faced long lines, medical inspections, and quick questions from officials working in unfamiliar languages. Still, they pressed on. Many found work in Pennsylvania's mining towns, in Ohio's steel country, and in Chicago's stockyards–building new lives while keeping the customs, foods, and songs that tied them to home."
  },
  {
    title: "The Shadow of War",
    text: "The war that broke out in Europe in 1914 felt distant at first–an unfolding catastrophe across the Atlantic. But when the United States entered the conflict in April 1917, everyday life for immigrants from the Austro-Hungarian Empire changed quickly. Suspicion sharpened, questions multiplied, and familiar accents could suddenly draw unwanted attention. After December 1917, when the U.S. declared war on Austria-Hungary, many were officially classified as \"enemy aliens.\" Registration and restrictions followed; movement could be limited, loyalties questioned, and the promise of an American future made suddenly uncertain."
  },
  {
    title: "Resilience and Legacy",
    text: "Despite the hardships, they endured. Many found ways to prove their loyalty in the most direct terms—by registering, complying with restrictions, and, for thousands, serving in the U.S. armed forces. At home they held communities together through mutual-aid societies, fraternal organizations, churches, and neighborhood networks that offered work leads, loans, translation help, and support in times of illness or loss. Their experiences—preserved in photographs, letters, and official papers—show how perseverance, duty, and community could coexist with suspicion, and how the search for belonging can be both deeply personal and stubbornly enduring.",
    boldText: "This project is helping to keep that record from fading—building a repository of memoirs and newly uncovered sources so the story can be told in their own words."
  }
];

// SVG Ornament Components
const CornerOrnament: React.FC<{ className?: string; flip?: boolean }> = ({ className, flip }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <path
      d="M5 95 Q5 50 50 50 Q95 50 95 5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M10 95 Q10 55 50 55 Q90 55 90 10"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="25" cy="72" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="72" cy="28" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const DividerOrnament: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 30" fill="none">
    <path
      d="M0 15 H70 M130 15 H200"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.4"
    />
    <circle cx="100" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="100" cy="15" r="2" fill="currentColor" opacity="0.4" />
    <path d="M75 15 L85 10 L95 15 L85 20 Z" fill="currentColor" opacity="0.3" />
    <path d="M125 15 L115 10 L105 15 L115 20 Z" fill="currentColor" opacity="0.3" />
  </svg>
);

const FlowerOrnament: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4" />
    <ellipse cx="20" cy="12" rx="3" ry="6" fill="currentColor" opacity="0.2" />
    <ellipse cx="20" cy="28" rx="3" ry="6" fill="currentColor" opacity="0.2" />
    <ellipse cx="12" cy="20" rx="6" ry="3" fill="currentColor" opacity="0.2" />
    <ellipse cx="28" cy="20" rx="6" ry="3" fill="currentColor" opacity="0.2" />
  </svg>
);

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
    <section id="gallery" className="relative pt-16 pb-12 overflow-hidden w-full bg-sepia-50">
      {/* Top gradient for smooth transition from Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(249, 248, 246, 1) 0%, rgba(249, 248, 246, 0) 100%)'
        }}
      />
      {/* Bottom gradient for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 248, 246, 0.5) 50%, rgba(249, 248, 246, 1) 100%)'
        }}
      />
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-black text-stone-900 leading-tight uppercase tracking-wide"
          >
            Fragments of Displacement
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6"
          >
            <DividerOrnament className="w-48 h-8 mx-auto text-stone-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-stone-600 font-light text-lg leading-relaxed max-w-2xl mx-auto italic"
          >
            A visual journey through the lives of South Slavic immigrants from Austria-Hungary—their hopes, their struggles, and their search for identity in WWI America.
          </motion.p>
        </div>

        {/* Desktop: Photo Album Layout */}
        <div className="hidden md:block">
          {/* Album Page 1 - "Leaving the Old World" - 2 images */}
          <div className="relative mb-16">
            <div
              className="absolute inset-0 -inset-x-24 -inset-y-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(68, 64, 60, 0.12) 0%, rgba(68, 64, 60, 0.06) 30%, rgba(68, 64, 60, 0.02) 50%, transparent 65%)',
                filter: 'blur(20px)'
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-start gap-12 relative z-10"
            >
              <CornerOrnament className="w-16 h-16 text-stone-400 mt-8 flex-shrink-0" />

              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  rotation={-3}
                  delay={0}
                  onClick={() => openLightbox(0)}
                  size="large"
                />
                <FlowerOrnament className="absolute -bottom-4 -right-4 w-8 h-8 text-stone-400" />
              </div>

              <div className="relative mt-12">
                <AlbumPhoto
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  rotation={2}
                  delay={0.1}
                  onClick={() => openLightbox(1)}
                  size="large"
                />
              </div>

              <CornerOrnament className="w-16 h-16 text-stone-400 mt-8 flex-shrink-0" flip />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto mt-12 text-center"
            >
              <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                {storyParagraphs[0].title}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                {storyParagraphs[0].text}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center my-12"
          >
            <DividerOrnament className="w-64 h-8 text-stone-300" />
          </motion.div>

          {/* Album Page 2 - "A New Beginning" - 3 images */}
          <div className="relative mb-16">
            <div
              className="absolute inset-0 -inset-x-24 -inset-y-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(68, 64, 60, 0.14) 0%, rgba(68, 64, 60, 0.07) 30%, rgba(68, 64, 60, 0.02) 50%, transparent 65%)',
                filter: 'blur(20px)'
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-6 relative z-10"
            >
              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  rotation={1}
                  delay={0}
                  onClick={() => openLightbox(2)}
                  size="medium"
                />
              </div>

              <div className="relative mx-4">
                <div className="absolute -inset-4 border border-stone-300 opacity-30" style={{ transform: 'rotate(-1deg)' }} />
                <AlbumPhoto
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  rotation={0}
                  delay={0.1}
                  onClick={() => openLightbox(3)}
                  size="xlarge"
                />
                <FlowerOrnament className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 text-stone-400" />
                <FlowerOrnament className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 text-stone-400" />
              </div>

              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  rotation={-2}
                  delay={0.2}
                  onClick={() => openLightbox(4)}
                  size="medium"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto mt-12 text-center"
            >
              <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                {storyParagraphs[1].title}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                {storyParagraphs[1].text}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center my-12"
          >
            <DividerOrnament className="w-64 h-8 text-stone-300" />
          </motion.div>

          {/* Album Page 3 - "The Shadow of War" - 3 images */}
          <div className="relative mb-16">
            <div
              className="absolute inset-0 -inset-x-24 -inset-y-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 45%, rgba(68, 64, 60, 0.12) 0%, rgba(68, 64, 60, 0.06) 30%, rgba(68, 64, 60, 0.02) 50%, transparent 65%)',
                filter: 'blur(20px)'
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-end gap-8 relative z-10"
            >
              <CornerOrnament className="w-16 h-16 text-stone-400 mb-8 flex-shrink-0 rotate-90" />

              <div className="relative mb-8">
                <AlbumPhoto
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  rotation={2}
                  delay={0}
                  onClick={() => openLightbox(5)}
                  size="medium"
                />
              </div>

              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  rotation={-1}
                  delay={0.1}
                  onClick={() => openLightbox(6)}
                  size="large"
                />
                <FlowerOrnament className="absolute -bottom-4 -left-4 w-8 h-8 text-stone-400" />
              </div>

              <div className="relative mb-4">
                <AlbumPhoto
                  src={galleryImages[7].src}
                  alt={galleryImages[7].alt}
                  rotation={-2}
                  delay={0.2}
                  onClick={() => openLightbox(7)}
                  size="medium"
                />
              </div>

              <CornerOrnament className="w-16 h-16 text-stone-400 mb-8 flex-shrink-0 -rotate-90" flip />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto mt-12 text-center"
            >
              <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                {storyParagraphs[2].title}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                {storyParagraphs[2].text}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center my-12"
          >
            <DividerOrnament className="w-64 h-8 text-stone-300" />
          </motion.div>

          {/* Album Page 4 - "Resilience and Legacy" - 1 featured image (borderless, 10% smaller) */}
          <div className="relative">
            <div
              className="absolute inset-0 -inset-x-24 -inset-y-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(68, 64, 60, 0.14) 0%, rgba(68, 64, 60, 0.07) 30%, rgba(68, 64, 60, 0.02) 50%, transparent 65%)',
                filter: 'blur(20px)'
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center relative z-10"
            >
              {/* Borderless featured image - full size, free floating */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openLightbox(8)}
                className="cursor-pointer"
              >
                <img
                  src={galleryImages[8].src}
                  alt={galleryImages[8].alt}
                  className="max-w-full h-auto sepia-[0.15] hover:sepia-0 transition-all duration-500"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto mt-16 text-center"
            >
              <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                {storyParagraphs[3].title}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                {storyParagraphs[3].text}
              </p>
              {storyParagraphs[3].boldText && (
                <p className="text-stone-600 font-semibold leading-relaxed mt-4">
                  {storyParagraphs[3].boldText}
                </p>
              )}
            </motion.div>
          </div>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <DividerOrnament className="w-48 h-8 text-stone-400" />
          </motion.div>
        </div>

        {/* Mobile View - Story Cards with Images */}
        <div className="md:hidden space-y-12">
          {storyParagraphs.map((story, storyIndex) => {
            // Map story index to image indices based on new layout
            const imageIndices = storyIndex === 0 ? [0, 1] :
                                 storyIndex === 1 ? [2, 3, 4] :
                                 storyIndex === 2 ? [5, 6, 7] : [8];

            return (
              <motion.div
                key={storyIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: storyIndex * 0.1 }}
                className="relative"
              >
                {/* Image display */}
                <div className={`flex gap-3 mb-6 ${imageIndices.length === 1 ? 'justify-center' : ''}`}>
                  {imageIndices.slice(0, 2).map((imgIndex, i) => (
                    <motion.div
                      key={imgIndex}
                      className={`${imageIndices.length === 1 ? 'w-3/4' : 'flex-1'} relative ${i === 1 ? 'mt-4' : ''}`}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openLightbox(imgIndex)}
                    >
                      <div className="bg-white p-2 shadow-lg" style={{ transform: `rotate(${-2 + i * 3}deg)` }}>
                        <img
                          src={galleryImages[imgIndex].src}
                          alt={galleryImages[imgIndex].alt}
                          className="w-full h-40 object-cover sepia-[0.2]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Story text */}
                <div className="text-center px-4">
                  <FlowerOrnament className="w-8 h-8 mx-auto text-stone-400 mb-3" />
                  <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-2">
                    {story.title}
                  </h4>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {story.text}
                  </p>
                  {story.boldText && (
                    <p className="text-stone-600 font-semibold text-sm leading-relaxed mt-3">
                      {story.boldText}
                    </p>
                  )}
                </div>

                {storyIndex < storyParagraphs.length - 1 && (
                  <DividerOrnament className="w-32 h-6 mx-auto text-stone-300 mt-8" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal - Redesigned with caption on image */}
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
              className="relative max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Thin white border that fits the image */}
              <div className="bg-white p-1 inline-block">
                <div className="relative">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="max-w-[90vw] max-h-[85vh] object-contain block"
                  />
                  {/* Caption overlay on image - bottom left */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
                    }}
                  >
                    <p className="text-white font-elegant italic text-lg md:text-xl drop-shadow-lg">
                      {galleryImages[selectedImage].caption}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Album Photo Component with photo-frame styling
const AlbumPhoto: React.FC<{
  src: string;
  alt: string;
  rotation: number;
  delay: number;
  onClick: () => void;
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'featured';
}> = ({ src, alt, rotation, delay, onClick, size }) => {
  const sizeClasses = {
    small: 'w-36 h-44 md:w-[216px] md:h-[264px]',
    medium: 'w-48 h-56 md:w-[288px] md:h-[336px]',
    large: 'w-56 h-64 md:w-[336px] md:h-[384px]',
    xlarge: 'w-72 h-80 md:w-[432px] md:h-[480px]',
    featured: 'w-80 h-96 md:w-[540px] md:h-[600px]', // 50% larger than xlarge
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{
        y: -10,
        rotate: 0,
        scale: 1.05,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      className={`${sizeClasses[size]} bg-white p-3 shadow-xl cursor-pointer relative group`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Photo */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500"
        />
      </div>

      {/* Subtle tape effect on corners */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-amber-100/60 opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ transform: 'rotate(-2deg)' }} />

      {/* Photo aging effect */}
      <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
    </motion.div>
  );
};

export default ProjectGallery;
