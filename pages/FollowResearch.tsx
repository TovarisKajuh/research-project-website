import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, FileText, Users, Calendar } from 'lucide-react';

const FollowResearch: React.FC = () => {
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
            Our Research Methodology
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              The Enemy Aliens Research Project employs a multi-disciplinary approach to uncovering the experiences of South Slavic immigrants during World War I. Our methodology combines traditional archival research with digital humanities techniques, enabling us to analyze vast collections of documents that would otherwise remain inaccessible.
            </p>
            <p>
              We work closely with archives across the United States and Europe, including the National Archives and Records Administration, the Ellis Island Foundation, and numerous regional historical societies. Our team has developed specialized protocols for handling fragile documents, many of which have not been examined in over a century.
            </p>
            <p>
              Central to our approach is the principle of recovering individual voices. Rather than treating immigrants as statistical abstractions, we seek to reconstruct their personal narratives through letters, diaries, court testimonies, and oral history collections. This human-centered methodology reveals the emotional and psychological dimensions of the enemy alien experience that official records often obscure.
            </p>
          </div>
        </motion.section>

        {/* Image Placeholder 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-stone-200 h-80 flex items-center justify-center border-2 border-dashed border-stone-300"
        >
          <div className="text-center text-stone-500">
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <p className="uppercase tracking-widest text-sm">Research Documentation Image</p>
            <p className="text-xs mt-2">Placeholder for archival research photo</p>
          </div>
        </motion.div>

        {/* Current Research Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Current Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-stone-200">
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Surveillance Records Analysis</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                We are currently digitizing and analyzing thousands of surveillance reports created by the Bureau of Investigation (precursor to the FBI) during 1917-1918. These documents reveal the extent of government monitoring of immigrant communities and the criteria used to designate individuals as potential threats.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Internment Camp Documentation</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Our team is compiling the first comprehensive database of South Slavic internees at Hot Springs, North Carolina and Fort Oglethorpe, Georgia. This includes personal effects inventories, medical records, and correspondence that illuminate daily life within the camps.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Legal Proceedings Research</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                We are examining court records from enemy alien hearings to understand how legal definitions of loyalty and citizenship were applied. These proceedings reveal the arbitrary nature of many designations and the limited due process afforded to those accused.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Community Impact Studies</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Through oral histories and community archives, we are documenting how enemy alien policies affected entire neighborhoods. The stigma of suspicion often extended beyond designated individuals to their families and ethnic communities, with lasting intergenerational effects.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Image Placeholder 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-4"
        >
          <div className="bg-stone-200 h-64 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Team Photo</p>
            </div>
          </div>
          <div className="bg-stone-200 h-64 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Archive Visit</p>
            </div>
          </div>
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
              { phase: 'Phase 1', title: 'Archive Identification & Access', description: 'Establishing partnerships with archives and obtaining necessary permissions for document access and reproduction.' },
              { phase: 'Phase 2', title: 'Document Digitization', description: 'High-resolution scanning and metadata creation for thousands of primary source documents.' },
              { phase: 'Phase 3', title: 'Database Development', description: 'Building searchable databases to connect individuals across multiple document types and collections.' },
              { phase: 'Phase 4', title: 'Analysis & Publication', description: 'Synthesizing findings into academic publications, public exhibitions, and educational materials.' },
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
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Publications & Presentations
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Our research has been presented at numerous academic conferences, including the American Historical Association Annual Meeting, the Immigration and Ethnic History Society Conference, and the Organization of American Historians Convention. We maintain an active publication schedule in peer-reviewed journals.
            </p>
            <p>
              Beyond academic venues, we are committed to public engagement. Our findings have been featured in documentary films, museum exhibitions, and community presentations. We believe that the stories we uncover belong not only to scholars but to the descendants of those affected and to the broader public.
            </p>
          </div>

          {/* Image Placeholder 3 */}
          <div className="mt-8 bg-stone-200 h-48 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Conference Presentation Photo</p>
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
            Join Our Research Network
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            We welcome collaboration with researchers, archivists, and descendants of affected families. If you have documents, photographs, or family stories to share, please contact us.
          </p>
          <a
            href="#/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Contact the Team
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default FollowResearch;
