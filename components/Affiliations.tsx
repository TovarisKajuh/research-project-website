import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: '/images/logo-um.svg', alt: 'University of Maribor' },
  { src: '/images/logo-um-50.svg', alt: 'University of Maribor 50th Anniversary' },
  { src: '/images/logo-placeholder.png', alt: 'Partner Institution' },
];

const Affiliations: React.FC = () => {
  return (
    <section id="affiliations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-16"
        >
          Supported by & Affiliated Institutions
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="w-48 h-32 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
