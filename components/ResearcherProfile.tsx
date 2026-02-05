import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Small decorative divider
const SmallDivider: React.FC = () => (
  <div className="flex items-center gap-3 my-4">
    <div className="h-px w-8 bg-stone-300" />
    <div className="w-1.5 h-1.5 bg-stone-400 rotate-45" />
    <div className="h-px w-8 bg-stone-300" />
  </div>
);

const ResearcherProfile: React.FC = () => {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <section id="researcher" className="relative py-12 md:py-16 bg-sepia-50 overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(249, 248, 246, 1) 0%, transparent 100%)'
        }}
      />
      {/* Bottom gradient for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-20">

        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-black text-stone-900 uppercase tracking-wide mb-2">
              DAVID HAZEMALI, PhD
            </h3>
            <p className="text-sm text-stone-500 uppercase tracking-widest mb-4">PRINCIPAL INVESTIGATOR</p>
            <SmallDivider />
            <div className="space-y-5 text-stone-700 font-light text-lg leading-relaxed">
              <p>
                David Hazemali is an Assistant Professor and Research Associate in the Department of History at the University of Maribor's Faculty of Arts, where he earned his PhD in December 2023. His research lies at the crossroads of military history, migration studies, and ethnic studies, with recent ventures into linguistics, scientometrics, economics, and the innovative use of conversational AI in the humanities.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => setBioExpanded(!bioExpanded)}
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-all duration-300"
              >
                {bioExpanded ? 'Close Bio' : 'Read Full Bio'}
                <span className={`transition-transform duration-300 ${bioExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Expandable Bio Section */}
            <AnimatePresence>
              {bioExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 pt-8 border-t border-stone-200 space-y-6 text-stone-700 font-light text-base leading-relaxed">
                    <p>
                      In addition to his postdoctoral project, he contributes to other research initiatives and output-focused groups, collaborating with multidisciplinary teams to build bridges across academic fields and develop more nuanced approaches to historical inquiry. As a historian, he sees his role not only as interpreting the past, but also as clarifying the processes through which societies make consequential decisions—creating space for reflection and critical dialogue within academia and the wider community.
                    </p>
                    <p>
                      Looking ahead, he is committed to sharing his research with broader audiences and continuing to explore the dynamic intersections between the Slovenian ethnic territory and the United States, advancing scholarship while fostering cultural and academic connections between the two regions in the twenty-first century.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Image - Free Floating without background, 15% larger with bottom fade */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[460px] aspect-[3/4]"
          >
            {/* Main image without overlay */}
            <div className="relative w-full h-full">
              <img
                src="/images/researcher.png"
                alt="Dr. David Hazemali"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Decorative graphical element behind */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-stone-200/50 rounded-full blur-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ResearcherProfile;
