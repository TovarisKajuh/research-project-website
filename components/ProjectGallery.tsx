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

const storyParagraphs = [
  {
    title: "Leaving the Old World",
    text: "They came from the hills of Slovenia, the farms of Croatia, the villages of Serbia. Carrying little more than hope and a few cherished photographs, thousands of South Slavic families boarded steamships bound for America in the early 1900s, seeking prosperity in a land they had only heard of in letters from those who had gone before."
  },
  {
    title: "A New Beginning",
    text: "Ellis Island greeted them with long lines, medical inspections, and immigration officers who often misspelled their names. Yet they persevered. They settled in mining towns of Pennsylvania, steel mills of Ohio, and stockyards of Chicago—building new lives while clinging to the customs, foods, and songs of their homeland."
  },
  {
    title: "The Shadow of War",
    text: "When war erupted in Europe in 1914, their world changed overnight. Though many had fled the Austro-Hungarian Empire seeking freedom, they were now viewed with suspicion. By 1917, they became 'Enemy Aliens'—their movements restricted, their loyalty questioned, their American dreams suddenly uncertain."
  },
  {
    title: "Resilience and Legacy",
    text: "Despite the hardships, they endured. They raised American children, built churches and fraternal halls, and quietly contributed to the fabric of their new nation. Their stories, captured in faded photographs and handwritten letters, remind us that the struggle for belonging is a timeless human experience."
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
  const [activeStory, setActiveStory] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="relative py-32 overflow-hidden w-full bg-gradient-to-b from-white via-sepia-50 to-white">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
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
            A visual journey through the lives of South Slavic immigrants—their hopes, their struggles, and their enduring legacy in America.
          </motion.p>
        </div>

        {/* Desktop: Photo Album Layout */}
        <div className="hidden md:block">
          {/* Album Page 1 - Top Row */}
          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-start gap-8"
            >
              {/* Left ornament */}
              <CornerOrnament className="w-16 h-16 text-stone-400 mt-8 flex-shrink-0" />

              {/* Photo group 1 */}
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

              {/* Photo group 2 - stacked */}
              <div className="relative mt-12">
                <AlbumPhoto
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  rotation={2}
                  delay={0.1}
                  onClick={() => openLightbox(1)}
                  size="medium"
                />
              </div>

              {/* Photo group 3 */}
              <div className="relative -mt-4">
                <AlbumPhoto
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  rotation={-1}
                  delay={0.2}
                  onClick={() => openLightbox(2)}
                  size="large"
                />
              </div>

              {/* Right ornament */}
              <CornerOrnament className="w-16 h-16 text-stone-400 mt-8 flex-shrink-0" flip />
            </motion.div>

            {/* Story text for first row */}
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

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center my-12"
          >
            <DividerOrnament className="w-64 h-8 text-stone-300" />
          </motion.div>

          {/* Album Page 2 - Middle Row */}
          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-6"
            >
              {/* Photo group 4 */}
              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  rotation={1}
                  delay={0}
                  onClick={() => openLightbox(3)}
                  size="small"
                />
              </div>

              {/* Central large photo */}
              <div className="relative mx-4">
                <div className="absolute -inset-4 border border-stone-300 opacity-30" style={{ transform: 'rotate(-1deg)' }} />
                <AlbumPhoto
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  rotation={0}
                  delay={0.1}
                  onClick={() => openLightbox(4)}
                  size="xlarge"
                />
                <FlowerOrnament className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 text-stone-400" />
                <FlowerOrnament className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 text-stone-400" />
              </div>

              {/* Photo group 5 */}
              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  rotation={-2}
                  delay={0.2}
                  onClick={() => openLightbox(5)}
                  size="small"
                />
              </div>
            </motion.div>

            {/* Story text for middle row */}
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

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center my-12"
          >
            <DividerOrnament className="w-64 h-8 text-stone-300" />
          </motion.div>

          {/* Album Page 3 - Bottom Row */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-end gap-8"
            >
              {/* Left ornament */}
              <CornerOrnament className="w-16 h-16 text-stone-400 mb-8 flex-shrink-0 rotate-90" />

              {/* Photo group 6 */}
              <div className="relative mb-8">
                <AlbumPhoto
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  rotation={2}
                  delay={0}
                  onClick={() => openLightbox(6)}
                  size="medium"
                />
              </div>

              {/* Photo group 7 */}
              <div className="relative">
                <AlbumPhoto
                  src={galleryImages[7].src}
                  alt={galleryImages[7].alt}
                  rotation={-2}
                  delay={0.1}
                  onClick={() => openLightbox(7)}
                  size="large"
                />
                <FlowerOrnament className="absolute -bottom-4 -left-4 w-8 h-8 text-stone-400" />
              </div>

              {/* Right ornament */}
              <CornerOrnament className="w-16 h-16 text-stone-400 mb-8 flex-shrink-0 -rotate-90" flip />
            </motion.div>

            {/* Final story texts */}
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                  {storyParagraphs[2].title}
                </h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  {storyParagraphs[2].text}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <h4 className="text-lg font-display font-bold text-stone-800 uppercase tracking-wide mb-3">
                  {storyParagraphs[3].title}
                </h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  {storyParagraphs[3].text}
                </p>
              </motion.div>
            </div>
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
          {storyParagraphs.map((story, storyIndex) => (
            <motion.div
              key={storyIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: storyIndex * 0.1 }}
              className="relative"
            >
              {/* Image pair */}
              <div className="flex gap-3 mb-6">
                <motion.div
                  className="flex-1 relative"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightbox(storyIndex * 2)}
                >
                  <div className="bg-white p-2 shadow-lg" style={{ transform: `rotate(${-2 + storyIndex}deg)` }}>
                    <img
                      src={galleryImages[storyIndex * 2]?.src || galleryImages[0].src}
                      alt={galleryImages[storyIndex * 2]?.alt || 'Historical photo'}
                      className="w-full h-40 object-cover sepia-[0.2]"
                    />
                  </div>
                </motion.div>
                {galleryImages[storyIndex * 2 + 1] && (
                  <motion.div
                    className="flex-1 relative mt-4"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openLightbox(storyIndex * 2 + 1)}
                  >
                    <div className="bg-white p-2 shadow-lg" style={{ transform: `rotate(${2 - storyIndex}deg)` }}>
                      <img
                        src={galleryImages[storyIndex * 2 + 1].src}
                        alt={galleryImages[storyIndex * 2 + 1].alt}
                        className="w-full h-40 object-cover sepia-[0.2]"
                      />
                    </div>
                  </motion.div>
                )}
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
              </div>

              {storyIndex < storyParagraphs.length - 1 && (
                <DividerOrnament className="w-32 h-6 mx-auto text-stone-300 mt-8" />
              )}
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
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full bg-white p-4 shadow-2xl"
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

// Album Photo Component with photo-frame styling
const AlbumPhoto: React.FC<{
  src: string;
  alt: string;
  rotation: number;
  delay: number;
  onClick: () => void;
  size: 'small' | 'medium' | 'large' | 'xlarge';
}> = ({ src, alt, rotation, delay, onClick, size }) => {
  const sizeClasses = {
    small: 'w-36 h-44',
    medium: 'w-48 h-56',
    large: 'w-56 h-64',
    xlarge: 'w-72 h-80',
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
