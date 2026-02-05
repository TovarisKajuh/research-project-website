import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/images/logo-um.svg',
    alt: 'University of Maribor',
    url: 'https://www.um.si/'
  },
  {
    src: '/images/logo-um-50.svg',
    alt: 'University of Maribor 50th Anniversary',
    url: 'https://www.um.si/o-univerzi/50-let-univerze-v-mariboru/'
  },
  {
    src: '/images/logo-placeholder.png',
    alt: 'Slovenian Research Agency (ARIS)',
    url: 'https://www.aris-rs.si/sl/'
  },
];

const Affiliations: React.FC = () => {
  return (
    <section id="affiliations" className="relative py-24 bg-white overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, transparent 100%)'
        }}
      />
      {/* Bottom gradient for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(245, 245, 244, 0.5) 50%, rgba(245, 245, 244, 1) 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6"
        >
          Affiliated Institutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-stone-600 font-light text-base leading-relaxed max-w-2xl mx-auto mb-16"
        >
          This research was made possible through the generous support and collaboration of the University of Maribor,
          commemorating 50 years of academic excellence, and the Slovenian Research and Innovation Agency (ARIS),
          whose funding enables groundbreaking historical scholarship.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          {logos.map((logo, index) => (
            <motion.a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`${index === 0 ? 'w-96 h-64' : 'w-48 h-32'} flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
