import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who is considered an 'Enemy Alien' in this context?",
    answer: "During WWI, non-naturalized residents from nations at war with the U.S. (specifically Austria-Hungary and Germany) were classified as Enemy Aliens. This legal designation subjected them to registration, surveillance, and potential internment."
  },
  {
    question: "What makes the South Slavic experience unique?",
    answer: "Many South Slavs (Croats, Serbs, Slovenes) within the Austro-Hungarian empire actually sought independence from the empire. Ironically, they were treated as enemies in the U.S. due to their technical citizenship, despite often supporting the Allied cause."
  },
  {
    question: "Are the archives accessible to the public?",
    answer: "Most of the primary sources displayed here are housed in the National Archives. This digital project aims to curate specific collections and make them more accessible to the general public and educators."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-stone-900 text-stone-100 overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(245, 245, 244, 1) 0%, rgba(28, 25, 23, 0.3) 40%, rgba(28, 25, 23, 1) 100%)'
        }}
      />
      {/* Bottom gradient for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(28, 25, 23, 0.8) 50%, rgba(242, 239, 235, 1) 100%)'
        }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-20">
        <div className="mb-16 text-center md:text-left">
           <span className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-4 block">
            Information
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-wide text-white">
            Common Inquiries
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-stone-800">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-light group-hover:text-stone-300 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 text-stone-500 group-hover:text-white transition-colors">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-stone-400 font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;