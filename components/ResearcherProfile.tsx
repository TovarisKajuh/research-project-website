import React from 'react';
import { motion } from 'framer-motion';

const ResearcherProfile: React.FC = () => {
  return (
    <section id="researcher" className="py-24 md:py-32 bg-sepia-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-6 block">
              Principal Investigator
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-stone-900 uppercase tracking-wide mb-8">
              Dr. Alex Kovač
            </h3>
            <div className="space-y-6 text-stone-700 font-light text-lg leading-relaxed">
              <p>
                Dr. Kovač specializes in the intersection of migration history and wartime policy in the early 20th century. His work uncovers the silenced narratives of Austro-Hungarian immigrants who found themselves categorized as "Enemy Aliens" overnight.
              </p>
              <p>
                By analyzing surveillance records, internment camp diaries, and legal proceedings, this project aims to reconstruct the fragile status of citizenship during periods of national crisis.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors">
                Read Full Bio 
                <span className="block h-[1px] w-12 bg-stone-900 group-hover:w-20 transition-all duration-300"></span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Placeholder - Free Floating without background */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md aspect-[3/4]"
          >
             {/* 
                Placeholder for free-floating image (e.g., a cutout person). 
                I will use a standard image but give it a "cutout" vibe by ensuring no border/shadow box.
             */}
            <img
              src="/images/researcher.png"
              alt="Researcher Portrait"
              className="w-full h-full object-contain"
            />
            
            {/* Decorative graphical element behind */}
            <div className="absolute -z-10 top-12 -right-12 w-full h-full border border-stone-300 opacity-50" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-stone-200/50 rounded-full blur-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ResearcherProfile;