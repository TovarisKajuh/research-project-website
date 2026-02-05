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
              Dr. David Hazemali
            </h3>
            <p className="text-sm text-stone-500 uppercase tracking-widest mb-4">Lead Researcher & Historian</p>
            <SmallDivider />
            <div className="space-y-5 text-stone-700 font-light text-lg leading-relaxed">
              <p>
                Dr. Hazemali specializes in the intersection of migration history and wartime policy in the early 20th century. His work uncovers the silenced narratives of Austro-Hungarian immigrants who found themselves categorized as "Enemy Aliens" overnight.
              </p>
              <p>
                By analyzing surveillance records, internment camp diaries, and legal proceedings, this project aims to reconstruct the fragile status of citizenship during periods of national crisis.
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
                      Dr. David Hazemali was born and raised in the small town of Fram, nestled in the rolling hills near Maribor in northeastern Slovenia. Growing up in a region steeped in history, he developed an early fascination with the stories of his ancestors and the tumultuous events that shaped their lives.
                    </p>
                    <p>
                      His academic journey began at the University of Maribor, where he completed his undergraduate studies in History before pursuing doctoral research focused on the experiences of Slovenian populations during the Great War. This period, marked by profound displacement and uncertainty, became the cornerstone of his scholarly work.
                    </p>
                    <p>
                      Dr. Hazemali's research centers on understanding how ordinary Slovenian families navigated the upheavals of World War I, particularly those who sought new beginnings in the United States. He examines the complex interplay between national identity, citizenship, and belonging that these immigrants faced upon arrival in a country that would soon view them with suspicion.
                    </p>
                    <p>
                      A meticulous researcher with a commitment to archival rigor, Dr. Hazemali has spent years combing through immigration records, personal correspondence, and government documents in archives across Slovenia, Austria, and the United States. His approach combines quantitative analysis of migration patterns with qualitative examination of individual narratives, ensuring that the human dimension of history is never lost in broader statistical trends.
                    </p>
                    <p>
                      Beyond his research, Dr. Hazemali is dedicated to making historical knowledge accessible to wider audiences. He regularly collaborates with community organizations and cultural institutions to preserve and share the heritage of Slovenian diaspora communities. He believes that understanding the past is essential for navigating the complexities of contemporary migration and citizenship debates.
                    </p>
                    <p>
                      When not immersed in archival research, Dr. Hazemali enjoys hiking in the Pohorje mountains near his hometown, where the landscape continues to inspire his reflection on the generations who walked those paths before him.
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
            {/* Main image with bottom fade gradient overlay */}
            <div className="relative w-full h-full">
              <img
                src="/images/researcher.png"
                alt="Dr. David Hazemali"
                className="w-full h-full object-contain"
              />
              {/* White gradient fade at bottom for smooth transition */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 248, 246, 0.3) 30%, rgba(249, 248, 246, 0.7) 60%, rgba(249, 248, 246, 0.95) 85%, rgb(249, 248, 246) 100%)'
                }}
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
