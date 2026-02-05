import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Search, Filter, FileText, Image, Users, MapPin, Calendar, Download } from 'lucide-react';

const ExploreDatabase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Records', count: 12847 },
    { id: 'documents', label: 'Documents', count: 5623 },
    { id: 'photographs', label: 'Photographs', count: 3291 },
    { id: 'records', label: 'Personal Records', count: 2156 },
    { id: 'correspondence', label: 'Correspondence', count: 1777 },
  ];

  const sampleRecords = [
    { type: 'document', title: 'Enemy Alien Registration Form', date: '1917', location: 'Pittsburgh, PA' },
    { type: 'photograph', title: 'Internment Camp Group Portrait', date: '1918', location: 'Fort Oglethorpe, GA' },
    { type: 'record', title: 'Naturalization Application - Suspended', date: '1917', location: 'Chicago, IL' },
    { type: 'correspondence', title: 'Family Letter Collection', date: '1917-1919', location: 'Various' },
    { type: 'document', title: 'Surveillance Report', date: '1918', location: 'Cleveland, OH' },
    { type: 'photograph', title: 'Ship Manifest Detail', date: '1912', location: 'Ellis Island, NY' },
  ];

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
              <Database className="w-10 h-10 text-stone-400" />
              <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Digital Archive</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-wide">
              Explore the Database
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-white border-b border-stone-200 py-12 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search names, locations, document types..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-stone-300 focus:border-stone-900 focus:outline-none transition-colors font-light"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors">
              <Filter className="w-4 h-4" />
              Advanced Search
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {category.label} <span className="text-xs opacity-70">({category.count.toLocaleString()})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            About the Archive
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Our digital archive contains over 12,000 records documenting the experiences of South Slavic immigrants designated as enemy aliens during World War I. This collection represents years of collaborative effort with archives, libraries, and family descendants across the United States and Europe.
            </p>
            <p>
              The database includes enemy alien registration forms, surveillance reports, internment camp records, naturalization applications, personal correspondence, photographs, and oral history transcripts. Each item has been carefully digitized, transcribed where applicable, and indexed to enable comprehensive searching.
            </p>
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-stone-200 text-center">
              <FileText className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">5,623</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Documents</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <Image className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">3,291</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Photographs</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">8,432</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Individuals</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">347</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Locations</span>
            </div>
          </div>
        </motion.section>

        {/* Sample Records */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-8">
            Featured Records
          </h2>
          <div className="space-y-4">
            {sampleRecords.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-stone-200 p-6 flex items-center gap-6 hover:border-stone-400 transition-colors cursor-pointer group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-stone-100 flex items-center justify-center">
                  {record.type === 'document' && <FileText className="w-6 h-6 text-stone-400" />}
                  {record.type === 'photograph' && <Image className="w-6 h-6 text-stone-400" />}
                  {record.type === 'record' && <Users className="w-6 h-6 text-stone-400" />}
                  {record.type === 'correspondence' && <FileText className="w-6 h-6 text-stone-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-stone-900 group-hover:text-stone-600 transition-colors">
                    {record.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {record.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {record.location}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
                    View →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-4 border-2 border-stone-900 text-stone-900 uppercase tracking-widest text-sm font-bold hover:bg-stone-900 hover:text-white transition-colors">
              Load More Records
            </button>
          </div>
        </motion.section>

        {/* Image Placeholders for Future Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-8">
            Document Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-stone-200 aspect-[3/4] flex items-center justify-center border-2 border-dashed border-stone-300 hover:border-stone-400 transition-colors cursor-pointer"
              >
                <div className="text-center text-stone-500">
                  <FileText className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs uppercase tracking-widest">Document {item}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How to Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            How to Use the Database
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6">
                <span className="text-xl font-display font-black text-stone-400">1</span>
              </div>
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Search</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Use the search bar to find records by name, location, date, or document type. Our advanced search allows you to combine multiple criteria for precise results.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6">
                <span className="text-xl font-display font-black text-stone-400">2</span>
              </div>
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Explore</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Browse through categories, view high-resolution scans, and read transcriptions. Related records are linked together to help you trace individual stories.
              </p>
            </div>
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6">
                <span className="text-xl font-display font-black text-stone-400">3</span>
              </div>
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Download</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Save records to your personal collection, download images for research, and export citations. All materials are available for non-commercial use with attribution.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Research Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Research Tips
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              When searching for ancestors, try multiple spelling variations of names. Immigration officials often anglicized or misspelled Slavic names, and individuals themselves sometimes adopted different spellings over time. A search for "Horvat" might also require checking "Horvath," "Horwat," or "Harvat."
            </p>
            <p>
              Geographic designations can also be confusing. Many immigrants listed their birthplace as Austria-Hungary, while others specified the region (Croatia, Slovenia, Dalmatia) or the village. Our database attempts to normalize these entries, but checking multiple location terms often yields additional results.
            </p>
            <p>
              If you are researching family history, we encourage you to contact us. Our team may be able to assist with difficult searches, and we are always grateful to receive additional documents or photographs that families are willing to share with the archive.
            </p>
          </div>
        </motion.section>

        {/* Download Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 text-white p-12 text-center"
        >
          <Download className="w-12 h-12 mx-auto mb-6 text-stone-400" />
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">
            Download Research Guides
          </h2>
          <p className="text-stone-400 font-light max-w-2xl mx-auto mb-8">
            Access our comprehensive research guides, including tips for tracing enemy alien ancestors, reading handwritten documents, and understanding the legal framework of wartime restrictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border-2 border-white text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-stone-900 transition-colors">
              Genealogy Guide (PDF)
            </button>
            <button className="px-8 py-4 border-2 border-white text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-stone-900 transition-colors">
              Document Reading Guide (PDF)
            </button>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 border-t border-stone-200 mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
            Contribute to the Archive
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            Do you have documents, photographs, or family stories related to South Slavic enemy aliens? Your contributions help preserve this important history for future generations.
          </p>
          <a
            href="#/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Contact Us to Contribute
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default ExploreDatabase;
