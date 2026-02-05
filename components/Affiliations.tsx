import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/images/logo-1.svg',
    alt: 'Faculty of Arts, University of Maribor',
    url: 'https://ff.um.si/'
  },
  {
    src: '/images/logo-2.png',
    alt: 'ARIS - Slovenian Research and Innovation Agency',
    url: 'https://www.aris-rs.si/sl/'
  },
  {
    src: '/images/logo-3.svg',
    alt: 'University of Maribor 50th Anniversary',
    url: 'https://www.um.si/objava/univerza-v-mariboru-praznuje-50-let/'
  },
];

const Affiliations: React.FC = () => {
  return (
    <section id="affiliations" className="relative py-12 bg-white overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, transparent 100%)'
        }}
      />
      {/* Bottom gradient for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <motion.a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer group ${
                index === 0
                  ? 'w-40 h-24 md:w-44 md:h-28'
                  : 'w-44 h-28 md:w-52 md:h-32'
              }`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
