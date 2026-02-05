import React from 'react';
import { motion } from 'framer-motion';

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
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
              className="w-48 h-32 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {/* Logo Placeholder: Just a gray geometric shape/text to represent a transparent logo */}
              <div className="w-full h-full border-2 border-dashed border-stone-300 flex items-center justify-center bg-stone-50/50">
                 <span className="text-stone-400 font-display font-bold uppercase">Logo {item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;