import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Search, Filter, FileText, Image, Users, MapPin, Calendar } from 'lucide-react';
import BackToTop from '../components/BackToTop';

interface DatabaseStats {
  documents: number;
  photographs: number;
  individuals: number;
  locations: number;
  correspondence: number;
}

const ExploreDatabase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [stats, setStats] = useState<DatabaseStats>({
    documents: 0,
    photographs: 0,
    individuals: 0,
    locations: 0,
    correspondence: 0,
  });

  useEffect(() => {
    // Fetch database statistics from metadata file
    fetch('/content/metadata.json')
      .then((response) => response.json())
      .then((data) => {
        setStats({
          documents: data.documents || 0,
          photographs: data.photographs || 0,
          individuals: data.individuals || 0,
          locations: data.locations || 0,
          correspondence: data.correspondence || 0,
        });
      })
      .catch((error) => {
        console.error('Error fetching database statistics:', error);
      });
  }, []);

  // Calculate total records
  const totalRecords = stats.documents + stats.photographs + stats.individuals + stats.locations + stats.correspondence;

  const categories = [
    { id: 'all', label: 'All Records', count: totalRecords },
    { id: 'documents', label: 'Documents', count: stats.documents },
    { id: 'photographs', label: 'Photographs', count: stats.photographs },
    { id: 'records', label: 'Personal Records', count: stats.individuals },
    { id: 'correspondence', label: 'Correspondence', count: stats.correspondence },
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
      <section className="bg-white border-b border-stone-200 py-12">
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
            About the Digital Archive and Database
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              This digital archive and database will document the experiences of South Slavic immigrant communities from Austria-Hungary in the United States during World War I and its aftermath. The focus extends beyond formal enemy alien status to include how wartime policies, public pressure, and local responses shaped everyday life across communities.
            </p>
            <p>
              The database will bring together a wide range of sources, including enemy alien registration materials, government correspondence and reports, internment and detention records, naturalization and immigration files, newspapers, personal letters and memoirs, photographs, and other community and family documentation. Where possible, items will be described, indexed, and linked to related records to support both browsing and targeted searching.
            </p>
            <p>
              The database will grow organically as the project progresses, with new entries, case studies, and digitized materials added through ongoing research and public contributions, and it is hoped that it will continue to expand beyond the project's duration.
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
              <span className="block text-3xl font-display font-black text-stone-900">{stats.documents.toLocaleString()}</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Documents</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <Image className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">{stats.photographs.toLocaleString()}</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Photographs</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">{stats.individuals.toLocaleString()}</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Individuals</span>
            </div>
            <div className="bg-white p-6 border border-stone-200 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-stone-400" />
              <span className="block text-3xl font-display font-black text-stone-900">{stats.locations.toLocaleString()}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-6">
                <span className="text-xl font-display font-black text-stone-400">1</span>
              </div>
              <h3 className="font-display font-bold text-stone-900 uppercase mb-4">Search</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Use the search bar to find records by ethnicity/ethnic group, name, location, date, or document type. The advanced search allows you to combine multiple criteria for precise results.
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
              When searching for people, try multiple spelling variations of names. Immigration officials often misspelled Slavic names or rendered them in more familiar forms, and individuals themselves sometimes used different spellings over time. A search for "Horvat" may also require checking "Horvath," "Horwat," or "Harvat."
            </p>
            <p>
              Geographic designations can be just as confusing. In historical records, the same person might list a birthplace as Austria Hungary, Austria, or Hungary, while others gave a province or region such as Carniola, Styria, Istria, Dalmatia, Croatia Slavonia, or Bosnia and Herzegovina. Some recorded only a city or village name, sometimes written in German, Hungarian, Italian, or a local Slavic spelling, and sometimes in an Americanized or heavily misspelled form.
            </p>
            <p>
              The database attempts to normalize these entries, but searching across multiple terms and variants often yields additional results. When in doubt, try a mix of country level labels, regional names, and specific towns or parishes.
            </p>
          </div>
        </motion.section>

      </main>

      <BackToTop />
    </div>
  );
};

export default ExploreDatabase;
