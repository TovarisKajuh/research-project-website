import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSubItem {
  id: string;
  text: string;
}

interface ExtendedFAQItem extends FAQItem {
  subItems?: FAQSubItem[];
}

const faqs: ExtendedFAQItem[] = [
  {
    question: "Project significance",
    answer: "The project aims to fill a gap in the scholarship on the immigrant experience during World War I, highlighting the challenges, contributions, and legacies of South Slavic Enemy Aliens and their ethnic communities in the U.S. The project also examines the strategies of adaptation and resistance employed by these groups, such as declaring loyalty, demonstrating patriotism, seeking naturalization, changing names, joining organizations, or maintaining identity and traditions."
  },
  {
    question: "Research objective",
    answer: "The main objective of the project is to document the impact of enemy Alien status on the South Slavic immigrants and their ethnic communities in the U.S., who faced registration, surveillance, restriction, confiscation, and discrimination by the U.S. government and society after the U.S. declared war on Austria-Hungary on December 7, 1917.",
    subItems: [
      { id: "SO1", text: "Case studies of the impact of the World War I Enemy Alien status on Slovenians, Croatians and Serbs and their ethnic communities in the U.S." },
      { id: "SO2", text: "Comparative analysis of the experiences and narratives of South Slavic ethnic communities in the U.S. in the wake of World War I Enemy Alien regulations" },
      { id: "SO3", text: "Comparative analysis of the experiences and narratives of South Slavic ethnic communities with the well-documented ones of the German-American community" },
      { id: "SO4", text: "A digitized database of select personal and community histories of the South Slavs in the U.S. who were affected by Enemy Alien status during World War I" }
    ]
  },
  {
    question: "Methodology",
    answer: "The project employs various interdisciplinary methods from the humanities and social sciences, with a focus on migration and cultural studies, and historiography. It adopts a case study approach for each of the three ethnic groups, a comparative approach to contrast them with each other and with the German-American community, and a mixed-methods approach to combine qualitative and quantitative data."
  },
  {
    question: "Deliverables",
    answer: "The research work will produce the following deliverables:",
    subItems: [
      { id: "D1", text: "At least 4 research papers published in high-impact Scopus and/or Web of Science Core Collection-indexed journals" },
      { id: "D2", text: "A digital database with documented case studies of individual and community experiences, available on my project website" },
      { id: "D3", text: "A workshop on genealogy research at the Department of History, Faculty of Arts, University of Maribor" },
      { id: "D4", text: "An exhibition on documented case studies of personal and community histories" }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-20">
        <div className="mb-10 text-center md:text-left">
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
                className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-light group-hover:text-stone-300 transition-colors">
                  {faq.question}
                </span>
                <span className={`ml-4 transition-all duration-300 ${activeIndex === index ? 'text-white rotate-45' : 'text-stone-500 group-hover:text-white'}`}>
                  <Plus size={20} />
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
                    <div className="pb-8 text-stone-400 font-light leading-relaxed max-w-2xl">
                      <p>{faq.answer}</p>
                      {faq.subItems && (
                        <ul className="mt-4 space-y-3">
                          {faq.subItems.map((item) => (
                            <li key={item.id} className="flex gap-3">
                              <span className="text-stone-500 font-medium shrink-0">{item.id}:</span>
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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