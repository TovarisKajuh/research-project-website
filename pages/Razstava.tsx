import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Landmark, MapPin, CalendarDays, FileText, ZoomIn, ZoomOut, Maximize2, RotateCcw, ArrowDown, Map as MapIcon } from 'lucide-react';
import { ImageModal } from '../components/ImageModal';
import BackToTop from '../components/BackToTop';

const MAP_IMG = '/content/zemljevid-naselbine.webp';
const INVITE_IMG = '/content/razstava-vabilo.webp';
const INVITE_IMG_SMALL = '/content/razstava-vabilo-900.webp';
const MAP_ALT = 'Naselbine južnih Slovanov iz Avstro-Ogrske v ZDA (okoli 1880–1918)';

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

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ---------- Zoomable map, embedded in the page ---------- */
const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

const MapViewer: React.FC<{ onFullscreen: () => void }> = ({ onFullscreen }) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ id: number; startX: number; startY: number; x: number; y: number } | null>(null);

  const clamp = useCallback((x: number, y: number, z: number) => {
    const el = frameRef.current;
    if (!el) return { x, y };
    const w = el.clientWidth;
    const h = el.clientHeight;
    return {
      x: Math.min(0, Math.max(w * (1 - z), x)),
      y: Math.min(0, Math.max(h * (1 - z), y)),
    };
  }, []);

  // Zoom around a point inside the frame (defaults to the centre)
  const zoomTo = useCallback(
    (next: number, cx?: number, cy?: number) => {
      const el = frameRef.current;
      if (!el) return;
      const z2 = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      const px = cx ?? el.clientWidth / 2;
      const py = cy ?? el.clientHeight / 2;
      setPos((p) => {
        const ratio = z2 / zoom;
        return clamp(px - (px - p.x) * ratio, py - (py - p.y) * ratio, z2);
      });
      setZoom(z2);
    },
    [zoom, clamp]
  );

  const reset = () => {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  };

  useEffect(() => {
    const onResize = () => setPos((p) => clamp(p.x, p.y, zoom));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [zoom, clamp]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    drag.current = { id: e.pointerId, startX: e.clientX, startY: e.clientY, x: pos.x, y: pos.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    setPos(clamp(d.x + e.clientX - d.startX, d.y + e.clientY - d.startY, zoom));
  };
  const endDrag = () => {
    drag.current = null;
  };
  const onDoubleClick = (e: React.MouseEvent) => {
    const rect = frameRef.current!.getBoundingClientRect();
    if (zoom >= MAX_ZOOM - 0.01) reset();
    else zoomTo(zoom * 2, e.clientX - rect.left, e.clientY - rect.top);
  };

  const btn =
    'w-10 h-10 flex items-center justify-center bg-white/95 text-stone-800 border border-stone-200 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors disabled:opacity-40 disabled:pointer-events-none';

  return (
    <div className="bg-white p-3 shadow-xl">
      <div
        ref={frameRef}
        className={`relative overflow-hidden bg-[#fafafa] select-none aspect-[4331/2686] ${
          zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
        }`}
        style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={onDoubleClick}
      >
        <img
          src={MAP_IMG}
          alt={MAP_ALT}
          draggable={false}
          className="absolute top-0 left-0 w-full h-auto origin-top-left will-change-transform"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})`,
            transition: drag.current ? 'none' : 'transform 0.25s ease-out',
          }}
        />

        {/* Controls */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10" onPointerDown={(e) => e.stopPropagation()} onDoubleClick={(e) => e.stopPropagation()}>
          <button className={btn} onClick={() => zoomTo(zoom * 1.6)} disabled={zoom >= MAX_ZOOM} aria-label="Povečaj">
            <ZoomIn className="w-4 h-4" />
          </button>
          <button className={btn} onClick={() => zoomTo(zoom / 1.6)} disabled={zoom <= MIN_ZOOM} aria-label="Pomanjšaj">
            <ZoomOut className="w-4 h-4" />
          </button>
          <button className={btn} onClick={reset} disabled={zoom === 1} aria-label="Ponastavi pogled">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className={btn} onClick={onFullscreen} aria-label="Celozaslonski prikaz">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        <AnimatePresence>
          {zoom === 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 left-3 bg-stone-900/80 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 pointer-events-none"
            >
              Dvoklik ali + za povečavo
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */
const Razstava: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [viri, setViri] = useState<ViriData | null>(null);
  const [activeId, setActiveId] = useState('01');

  useEffect(() => {
    fetch('/content/razstava-viri.json')
      .then((res) => res.json())
      .then((data: ViriData) => setViri(data))
      .catch(() => setViri(null));
  }, []);

  const active = viri?.panels.find((p) => p.id === activeId) ?? viri?.panels[0];

  const selectPanel = (id: string) => {
    setActiveId(id);
    const top = document.getElementById('viri-vsebina');
    if (top && top.getBoundingClientRect().top < 0) scrollToId('viri-vsebina');
  };

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

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-4 mb-6">
              <Landmark className="w-10 h-10 text-stone-400" />
              <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Exhibition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-wide">Razstava</h1>
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
          className="mb-28"
        >
          <div className="flex justify-center mb-14">
            <motion.div
              className="bg-white p-3 shadow-xl cursor-pointer w-full max-w-lg relative"
              style={{ rotate: -1 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              onClick={() => setSelectedImage({ src: INVITE_IMG, alt: 'Vabilo na razstavo Prilagoditev v stiski' })}
            >
              <img src={INVITE_IMG_SMALL} alt="Vabilo na razstavo Prilagoditev v stiski" className="w-full h-auto" />
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
            <button
              onClick={() => scrollToId('viri')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
            >
              Viri in literatura
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="flex items-center gap-3 mb-3">
            <MapIcon className="w-5 h-5 text-stone-500" />
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Zemljevid</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Naselbine južnih Slovanov iz Avstro-Ogrske v ZDA
          </h2>
          <p className="text-stone-600 font-light leading-relaxed mb-8 max-w-3xl">
            Pregledni zemljevid ZDA s podrobnima izsekoma za območje Velikih jezer in Srednjega zahoda ter za Ohio, Pensilvanijo in severovzhod, okoli 1880–1918. Zemljevid lahko povečate in se po njem premikate.
          </p>

          <MapViewer onFullscreen={() => setSelectedImage({ src: MAP_IMG, alt: MAP_ALT })} />

          <p className="text-xs text-stone-500 italic mt-4">Zemljevid: David Hazemali, 2026.</p>
        </motion.section>

        {/* Sources and literature */}
        <motion.section
          id="viri"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 scroll-mt-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-stone-500" />
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Po panojih razstave</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">Viri in literatura</h2>
          {viri && (
            <div className="text-stone-600 font-light leading-relaxed space-y-4 mb-12 max-w-3xl">
              {viri.intro.text.map((t, idx) => (
                <p key={idx}>{t}</p>
              ))}
            </div>
          )}

          {viri && active && (
            <div id="viri-vsebina" className="grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] gap-8 md:gap-12 scroll-mt-8">
              {/* Panel index */}
              <nav className="md:sticky md:top-8 self-start min-w-0">
                <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-4">Panoji</p>
                <ol className="flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0 md:border-l md:border-stone-300">
                  {viri.panels.map((panel) => {
                    const isActive = panel.id === active.id;
                    return (
                      <li key={panel.id} className="shrink-0">
                        <button
                          onClick={() => selectPanel(panel.id)}
                          aria-current={isActive}
                          className={`text-left transition-colors md:w-full md:-ml-px md:border-l-2 md:pl-4 md:py-2.5 px-4 py-2 md:px-0 border md:border-y-0 md:border-r-0 ${
                            isActive
                              ? 'bg-stone-900 text-white border-stone-900 md:bg-transparent md:text-stone-900'
                              : 'bg-white text-stone-600 border-stone-200 md:bg-transparent md:border-transparent hover:text-stone-900'
                          }`}
                        >
                          <span className="font-display font-black text-sm md:text-xs md:block md:text-stone-400">{panel.id}</span>
                          <span className="hidden md:block text-xs uppercase tracking-wide font-bold leading-snug mt-0.5">{panel.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              {/* Active panel */}
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-stone-200 shadow-sm p-6 md:p-10 min-w-0"
                >
                  <header className="flex items-start gap-5 pb-6 mb-8 border-b border-stone-200">
                    <span className="font-display font-black text-5xl md:text-6xl text-stone-200 leading-none">{active.id}</span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">Pano {active.id}</p>
                      <h3 className="font-display font-bold text-stone-900 uppercase tracking-wide text-lg md:text-xl leading-tight">
                        {active.title}
                      </h3>
                      <p className="text-stone-500 italic font-light mt-1">{active.subtitle}</p>
                    </div>
                  </header>

                  <div className="space-y-10">
                    {active.sections.map((section, sIdx) => (
                      <div key={sIdx}>
                        {section.heading && (
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-5 flex items-center gap-3">
                            {section.heading}
                            <span className="flex-1 h-px bg-stone-200" />
                          </h4>
                        )}
                        <ul className="space-y-4">
                          {section.entries.map((entry, eIdx) => (
                            <li key={eIdx} className="pl-5 -indent-5 text-stone-800 leading-relaxed text-[15px]">
                              {entry.parts.map((part, pIdx) =>
                                part.i ? (
                                  <em key={pIdx}>{linkify(part.t, `${active.id}-${sIdx}-${eIdx}-${pIdx}`)}</em>
                                ) : (
                                  <React.Fragment key={pIdx}>{linkify(part.t, `${active.id}-${sIdx}-${eIdx}-${pIdx}`)}</React.Fragment>
                                )
                              )}
                              {entry.note && <span className="block indent-0 text-stone-500 text-sm font-light mt-1">{entry.note}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Prev / next */}
                  <footer className="flex justify-between gap-4 mt-12 pt-6 border-t border-stone-200 text-xs uppercase tracking-widest font-bold">
                    {(() => {
                      const idx = viri.panels.findIndex((p) => p.id === active.id);
                      const prev = viri.panels[idx - 1];
                      const next = viri.panels[idx + 1];
                      return (
                        <>
                          <span>
                            {prev && (
                              <button onClick={() => selectPanel(prev.id)} className="text-stone-500 hover:text-stone-900 transition-colors">
                                ← Pano {prev.id}
                              </button>
                            )}
                          </span>
                          <span>
                            {next && (
                              <button onClick={() => selectPanel(next.id)} className="text-stone-500 hover:text-stone-900 transition-colors">
                                Pano {next.id} →
                              </button>
                            )}
                          </span>
                        </>
                      );
                    })()}
                  </footer>
                </motion.article>
              </AnimatePresence>
            </div>
          )}
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 mt-20 border-t border-stone-200"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">Informacije</h2>
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
