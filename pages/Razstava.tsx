import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Landmark, MapPin, CalendarDays, FileText, Download, ChevronDown, ZoomIn, Map as MapIcon } from 'lucide-react';
import { ImageModal } from '../components/ImageModal';
import BackToTop from '../components/BackToTop';

const VIRI_DOCX = '/content/razstava-prilagoditev-v-stiski-viri-in-literatura.docx';
const MAP_PDF = '/content/zemljevid-naselbine-juznih-slovanov-1880-1918.pdf';
const MAP_IMG = '/content/zemljevid-naselbine.webp';
const MAP_IMG_SMALL = '/content/zemljevid-naselbine-1800.webp';
const INVITE_IMG = '/content/razstava-vabilo.webp';
const INVITE_IMG_SMALL = '/content/razstava-vabilo-900.webp';

interface Part { t: string; i: boolean }
interface Entry { parts: Part[]; note?: string }
interface Section { heading: string; entries: Entry[] }
interface Panel { id: string; title: string; subtitle: string; sections: Section[] }
interface ViriData {
  intro: { title: string; subtitle: string; project: string; text: string[] };
  panels: Panel[];
}

// Turn bare URLs inside a citation into links
const linkify = (text: string, keyBase: string) => {
  const pieces = text.split(/(https?:\/\/[^\s]+?)(?=[.,;)]?(?:\s|$))/g);
  return pieces.map((piece, idx) =>
    /^https?:\/\//.test(piece) ? (
      <a
        key={`${keyBase}-${idx}`}
        href={piece}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-600 hover:text-stone-900 underline underline-offset-2 break-all"
      >
        {piece}
      </a>
    ) : (
      <React.Fragment key={`${keyBase}-${idx}`}>{piece}</React.Fragment>
    )
  );
};

const DownloadButton: React.FC<{ href: string; label: string; meta: string; dark?: boolean }> = ({ href, label, meta, dark }) => (
  <a
    href={href}
    download
    className={`group inline-flex items-center gap-4 px-6 py-4 border transition-all duration-300 hover:-translate-y-0.5 ${
      dark
        ? 'bg-stone-900 text-white border-stone-900 hover:bg-stone-800'
        : 'bg-white text-stone-900 border-stone-300 hover:border-stone-900'
    }`}
  >
    <Download className="w-5 h-5 shrink-0" />
    <span className="text-left">
      <span className="block text-sm font-bold uppercase tracking-widest">{label}</span>
      <span className={`block text-xs mt-0.5 ${dark ? 'text-stone-400' : 'text-stone-500'}`}>{meta}</span>
    </span>
  </a>
);

const Razstava: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [viri, setViri] = useState<ViriData | null>(null);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/razstava-viri.json')
      .then((res) => res.json())
      .then((data: ViriData) => setViri(data))
      .catch(() => setViri(null));
  }, []);

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
            <p className="mt-6 text-lg md:text-xl text-stone-300 font-light max-w-3xl">
              Prilagoditev v stiski: južnoslovanski »sovražni tujci« iz Avstro-Ogrske v ZDA med prvo svetovno vojno
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Invitation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex justify-center mb-14">
            <motion.div
              className="bg-white p-3 shadow-xl cursor-pointer w-full max-w-lg relative"
              style={{ rotate: -1 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              onClick={() => setSelectedImage({ src: INVITE_IMG, alt: 'Vabilo na razstavo Prilagoditev v stiski' })}
            >
              <img
                src={INVITE_IMG_SMALL}
                alt="Vabilo na razstavo Prilagoditev v stiski"
                className="w-full h-auto"
              />
              <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
              <span className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 bg-stone-900/80 text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
                <ZoomIn className="w-3.5 h-3.5" /> Povečaj
              </span>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="h-px w-24 bg-stone-300 mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
              <div className="flex gap-4 bg-white border border-stone-200 p-5">
                <MapPin className="w-6 h-6 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-stone-500 font-bold mb-1">Kraj</p>
                  <p className="text-stone-800 leading-snug">
                    Razstavišče Archivum<br />Pokrajinski arhiv Maribor<br />Glavni trg 7, 2000 Maribor
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white border border-stone-200 p-5">
                <CalendarDays className="w-6 h-6 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-stone-500 font-bold mb-1">Na ogled</p>
                  <p className="text-stone-800 leading-snug">do 25. novembra 2026</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-stone-700 font-light leading-relaxed mb-4">
              Razstava bo na ogled v razstavišču Archivum Pokrajinskega arhiva Maribor (Glavni trg 7, 2000 Maribor) do 25. novembra 2026.
            </p>
            <p className="text-3xl md:text-4xl font-elegant italic text-stone-900 mb-10">Vljudno vabljeni!</p>

            <p className="text-stone-700 font-light leading-relaxed mb-6">
              Viri in literatura, uporabljeni za pripravo razstave, so na voljo tukaj:
            </p>
            <DownloadButton href={VIRI_DOCX} label="Viri in literatura" meta="Wordov dokument (.docx), 47 KB" dark />
          </div>
        </motion.section>

        {/* Map */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-3">
            <MapIcon className="w-5 h-5 text-stone-500" />
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Zemljevid</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Naselbine južnih Slovanov iz Avstro-Ogrske v ZDA
          </h2>
          <p className="text-stone-600 font-light leading-relaxed mb-8 max-w-3xl">
            Pregledni zemljevid ZDA s podrobnima izsekoma za območje Velikih jezer in Srednjega zahoda ter za Ohio, Pensilvanijo in severovzhod, okoli 1880–1918.
          </p>

          <motion.div
            className="bg-white p-3 shadow-xl cursor-pointer relative"
            whileHover={{ scale: 1.01, y: -6 }}
            onClick={() => setSelectedImage({ src: MAP_IMG, alt: 'Naselbine južnih Slovanov iz Avstro-Ogrske v ZDA (okoli 1880–1918)' })}
          >
            <img
              src={MAP_IMG_SMALL}
              alt="Naselbine južnih Slovanov iz Avstro-Ogrske v ZDA (okoli 1880–1918)"
              loading="lazy"
              className="w-full h-auto"
            />
            <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
            <span className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 bg-stone-900/80 text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
              <ZoomIn className="w-3.5 h-3.5" /> Povečaj
            </span>
          </motion.div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <p className="text-xs text-stone-500 italic">Zemljevid: David Hazemali, 2026.</p>
            <DownloadButton href={MAP_PDF} label="Zemljevid v PDF" meta="Visoka ločljivost za tisk, 445 KB" />
          </div>
        </motion.section>

        {/* Sources and literature */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-stone-500" />
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Viri in literatura po panojih</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Viri in literatura
          </h2>
          {viri && (
            <div className="text-stone-600 font-light leading-relaxed space-y-4 mb-10 max-w-3xl">
              {viri.intro.text.map((t, idx) => (
                <p key={idx}>{t}</p>
              ))}
            </div>
          )}

          <div className="border-t border-stone-300">
            {viri?.panels.map((panel) => {
              const isOpen = openPanel === panel.id;
              return (
                <div key={panel.id} className="border-b border-stone-300">
                  <button
                    onClick={() => setOpenPanel(isOpen ? null : panel.id)}
                    className="w-full flex items-center gap-5 md:gap-8 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-black text-3xl md:text-4xl text-stone-300 group-hover:text-stone-500 transition-colors w-12 md:w-16 shrink-0">
                      {panel.id}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display font-bold text-stone-900 uppercase tracking-wide text-sm md:text-base">
                        {panel.title}
                      </span>
                      <span className="block text-stone-500 font-light italic text-sm mt-1">{panel.subtitle}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 md:pl-24 space-y-8">
                          {panel.sections.map((section, sIdx) => (
                            <div key={sIdx}>
                              {section.heading && (
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4 pb-2 border-b border-stone-200">
                                  {section.heading}
                                </h3>
                              )}
                              <ul className="space-y-4">
                                {section.entries.map((entry, eIdx) => (
                                  <li key={eIdx} className="pl-5 -indent-5 text-stone-800 leading-relaxed text-[15px]">
                                    {entry.parts.map((part, pIdx) =>
                                      part.i ? (
                                        <em key={pIdx}>{linkify(part.t, `${panel.id}-${sIdx}-${eIdx}-${pIdx}`)}</em>
                                      ) : (
                                        <React.Fragment key={pIdx}>
                                          {linkify(part.t, `${panel.id}-${sIdx}-${eIdx}-${pIdx}`)}
                                        </React.Fragment>
                                      )
                                    )}
                                    {entry.note && (
                                      <span className="block indent-0 text-stone-500 text-sm font-light mt-1">{entry.note}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <DownloadButton href={VIRI_DOCX} label="Prenesi celoten seznam" meta="Wordov dokument (.docx), 47 KB" />
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 mt-16 border-t border-stone-200"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Informacije
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            Razstava je nastala v okviru podoktorskega raziskovalnega projekta ARIS Z5-60179, ki ga financira Javna agencija za znanstvenoraziskovalno in inovacijsko dejavnost Republike Slovenije (ARIS).
          </p>
          <a
            href="mailto:david.hazemali@um.si"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            david.hazemali@um.si
          </a>
        </motion.section>
      </main>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />

      <BackToTop />
    </div>
  );
};

export default Razstava;
