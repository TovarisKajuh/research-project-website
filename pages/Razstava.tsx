import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Landmark } from 'lucide-react';
import BackToTop from '../components/BackToTop';

const Razstava: React.FC = () => {
  return (
    <div className="min-h-screen bg-sepia-50">
      {/* Header */}
      <header className="bg-stone-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.a
            href="#/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Nazaj na domov</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Landmark className="w-10 h-10 text-stone-400" />
              <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Exhibition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-wide">
              Razstava
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Prilagajanje sredi stiske
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Razstava predstavlja zgodbe južnoslovanskih priseljencev iz Avstro-Ogrske, ki so jih Združene države Amerike med prvo svetovno vojno označile za sovražne tujce, ter strategije prilagajanja in upora, s katerimi so se odzvali na registracijo, nadzor in omejitve.
            </p>
            <p>
              Podrobnosti o razstavi bodo objavljene kmalu.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 border-t border-stone-200"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Več informacij
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            Za vprašanja o razstavi se obrnite na vodjo projekta.
          </p>
          <a
            href="mailto:david.hazemali@um.si"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Kontakt
          </a>
        </motion.section>
      </main>

      <BackToTop />
    </div>
  );
};

export default Razstava;
