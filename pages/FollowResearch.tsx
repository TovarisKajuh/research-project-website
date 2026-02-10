import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, FileText, Users, Calendar } from 'lucide-react';
import { ImageModal } from '../components/ImageModal';

const FollowResearch: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
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
            <span className="text-sm uppercase tracking-widest">Back to Home</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-10 h-10 text-stone-400" />
              <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Research Journey</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-wide">
              Follow the Research
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            The Research Methodology
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              This project combines historical research, genealogical reconstruction, and digital methods to document how Slovenians, Croatians, and Serbs from Austria Hungary experienced enemy alien policies in the United States during World War I and in the uncertain postwar years.
            </p>
            <p>
              The work begins with focused archival research. In the United States, the emphasis is on federal records connected to World War I enemy alien control programs and related materials produced by agencies such as the Department of Justice, the State Department, the Office of Alien Property, federal courts, and immigration authorities. Community level sources are equally important, especially the archival traces of immigrant institutions such as fraternal benefit societies, parishes, and cultural or political associations.
            </p>
            <p>
              Newspapers form another central body of evidence. Slovenian, Croatian, and Serbian language papers did more than report events. They recorded community debates, published information about men in uniform, and captured public responses to registration, surveillance, arrests, and pressure to demonstrate loyalty. Because wartime censorship and the circulation of rumors shaped what appeared in print, these sources are read critically and compared with official documentation.
            </p>
            <p>
              To move from scattered records to identifiable lives, a structured mixed workflow is used. The process starts with archival finding aids and indexes, then connects individuals to passenger lists, census schedules, naturalization files, military records, and local documentation. This makes it possible to reconstruct individual and family histories while also tracing broader patterns across regions and communities.
            </p>
            <p>
              Digital humanities tools support the research throughout. Text processing, tagging, and data visualization help organize large document sets, compare cases across locations and ethnic communities, and reveal patterns that can be missed through close reading alone. The project also builds a curated digital database of selected personal, family, organizational, and community case studies, including a dedicated section on documented detainees and internees, so that results can be shared in a usable form with both scholars and the wider public.
            </p>
          </div>
        </motion.section>

        {/* Archival Research Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex justify-center"
        >
          <motion.div
            className="bg-white p-3 shadow-xl cursor-pointer max-w-2xl mx-auto relative"
            style={{ rotate: -1.5 }}
            whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
            onClick={() => openModal('/content/image b.webp', 'Archival research documentation')}
          >
            <img
              src="/content/image b.webp"
              alt="Archival research documentation"
              loading="lazy"
              className="w-full h-auto sepia-[0.15] hover:sepia-0 transition-all duration-500"
            />
            <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Research Timeline
          </h2>
          <div className="space-y-8">
            {[
              { phase: 'Phase 1', title: '(Months 1 to 8)', description: 'A focused literature review is completed, archival research is carried out, and a primary source corpus is compiled, systematized, and annotated. The first version of the digital database is released, including a section on documented South Slavic detainees and internees.' },
              { phase: 'Phase 2', title: '(Months 9 to 14)', description: 'Community level case studies are developed for Slovenian American, Croatian American, and Serbian American materials. At least two journal articles are submitted, and the database is expanded with a major update.' },
              { phase: 'Phase 3', title: '(Months 15 to 18)', description: 'A comparative South Slavic synthesis is completed across the three communities. At least one additional journal article is submitted, and the database is updated.' },
              { phase: 'Phase 4', title: '(Months 19 to 22)', description: 'A comparative analysis with German American cases is completed. At least one further journal article is submitted, and the database is updated.' },
              { phase: 'Phase 5', title: '(Months 21 to 24)', description: 'A curated digital collection is prepared from selected personal, family, organizational, and community histories. Public outputs are prepared, including an exhibition and a genealogy workshop. A final database and collection release is completed, and a monograph plan is produced.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">{item.phase}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-stone-300 pl-6">
                  <h3 className="font-display font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-8">
            Publications & Presentations
          </h2>

          {/* Presentations Subsection */}
          <div className="mb-12">
            <h3 className="text-xl font-display font-bold text-stone-900 mb-6">Presentations</h3>
            <div className="prose prose-lg text-stone-700 font-light leading-relaxed">
              <p>
                Hazemali, David: Brezje v Washingtonu : Ciril Žebot in geneza slovenske Kapele brezjanske Marije Pomagaj v ameriški prestolnici : paper presented at the scientific conference Slovenci po svetu in konec druge svetovne vojne, Ljubljana, Fakulteta za slovenske in mednarodne študije Nove univerze, 17 October 2025.
              </p>
            </div>
          </div>

          {/* Conference Presentation Photo */}
          <div className="mb-12 flex justify-center">
            <motion.div
              className="bg-white p-3 shadow-xl cursor-pointer max-w-2xl mx-auto relative"
              style={{ rotate: 1.5 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -8 }}
              onClick={() => openModal('/content/image a.webp', 'Conference presentation')}
            >
              <img
                src="/content/image a.webp"
                alt="Conference presentation"
                loading="lazy"
                className="w-full h-auto sepia-[0.15] hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
            </motion.div>
          </div>

          {/* Publications Subsection */}
          <div>
            <h3 className="text-xl font-display font-bold text-stone-900 mb-6">Publications</h3>
            <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
              <p>
                Hazemali, David, Gostenčnik, Nina, & Borovič, M. (2025). Možnosti uporabe umetne inteligence v rodoslovju: metodološki premislek na primeru slovenske emigrantske družine Ložar/Lozar iz Elyja v Minnesoti. <em>Moderna Arhivistika</em> 8, no. 2, pp. 254–278. <a href="https://doi.org/10.54356/ma/2025/eetz1766" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 underline">https://doi.org/10.54356/ma/2025/eetz1766</a>
              </p>
              <p>
                Hazemali, David, Herle, Dominik, Plejić, Žana, & Klemenčič, Matjaž (2025). Slovenska kapela v Washingtonu D. C. : zgodovina nastanka in njen kulturni, politični in verski pomen za Slovence in slovensko-ameriško skupnost. <em>Zgodovinski časopis : glasilo Zveze zgodovinskih društev Slovenije</em> 79, no 3/4, pp. 408–438. <a href="https://doi.org/10.56420/Zgodovinskicasopis.2025.3-4.07" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 underline">https://doi.org/10.56420/Zgodovinskicasopis.2025.3-4.07</a>
              </p>
              <p>
                Herle, Dominik, Hazemali, David, Klemenčič, Matjaž, Valentan, Sebastijan (2025): Pregled zgodovine, poskus ukinitve in ponovno rojstvo slovensko-ameriške Župnije sv. Jožefa v Jolietu v zvezni državi Illinois = Review of the history, attempted closure, and rebirth of the Slovenian-American parish of St. Joseph in Joliet, Illinois. <em>Edinost in dialog : revija za ekumensko teologijo in medreligijski dialog</em> 80, no. 1, pp. 227–253. <a href="https://doi.org/10.34291/Edinost/80/01/Herle" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 underline">https://doi.org/10.34291/Edinost/80/01/Herle</a>
              </p>
              <p>
                Hazemali, David, Osojnik, Janez, Onič, Tomaž, Todorović, Tadej, & Borovič, Mladen (2025): Učinkovitost uporabe generativne umetne inteligence pri preučevanju zgodovinskih dokumentov. In: Gostenčnik, Nina (Ed.). <em>Arhivi in digitalne tehnologije : Mednarodna konferenca Tehnični in vsebinski problemi klasičnega in elektronskega arhiviranja : 21. - 23. maj 2025, Radenci, Slovenija : knjiga povzetkov = Archives and digital technologies : International Conference Technical and Field Related Problems of Traditional and Electronic Archiving : May 21 - 23, 2025, Radenci, Slovenia.</em>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 border-t border-stone-200"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Join the Research Network
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            The project includes elements of citizen science, inviting the public to help identify people, places, and sources, and to share documents, photographs, and family stories. Collaboration is also welcomed from researchers and archivists who work with relevant collections or topics. If you have materials related to the project's themes, please get in touch to discuss how they can be documented and preserved.
          </p>
          <a
            href="#/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Contact the Team
          </a>
        </motion.section>
      </main>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
};

export default FollowResearch;
