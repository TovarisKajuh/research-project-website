import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, History, MapPin, Ship, FileWarning, Home } from 'lucide-react';

const DiscoverHistory: React.FC = () => {
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
              <History className="w-10 h-10 text-stone-400" />
              <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Historical Context</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-wide">
              Discover the History
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
            The Great Migration
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Between 1880 and 1914, approximately 1.8 million South Slavic immigrants arrived in the United States, fleeing economic hardship, political oppression, and military conscription in the Austro-Hungarian Empire. They came from regions that would later become Slovenia, Croatia, Serbia, Bosnia, and Montenegro, bringing with them diverse languages, traditions, and dreams of a better life.
            </p>
            <p>
              These immigrants settled primarily in industrial centers: the steel mills of Pittsburgh and Gary, the copper mines of Montana and Michigan, the meatpacking plants of Chicago. They formed tight-knit communities, establishing churches, fraternal organizations, and newspapers that preserved their cultural heritage while adapting to American life.
            </p>
            <p>
              For many, America represented an escape from the ethnic tensions and imperial bureaucracy of Habsburg rule. They had no particular loyalty to the Austrian crown, yet when the United States entered World War I in April 1917, their origins in an enemy nation suddenly made them suspects in their adopted homeland.
            </p>
          </div>
        </motion.section>

        {/* Image Placeholder - Historical Immigration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-stone-200 h-96 flex items-center justify-center border-2 border-dashed border-stone-300"
        >
          <div className="text-center text-stone-500">
            <Ship className="w-12 h-12 mx-auto mb-4" />
            <p className="uppercase tracking-widest text-sm">Historical Immigration Photo</p>
            <p className="text-xs mt-2">Ellis Island or ship arrival scene</p>
          </div>
        </motion.div>

        {/* The Enemy Alien Designation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            The Enemy Alien Designation
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Upon America's declaration of war against Germany in April 1917, President Woodrow Wilson issued a proclamation requiring all male German nationals over fourteen years of age to register as enemy aliens. When the United States declared war on Austria-Hungary in December 1917, this requirement extended to Austro-Hungarian subjects, including hundreds of thousands of South Slavic immigrants.
            </p>
            <p>
              The enemy alien regulations were sweeping and intrusive. Designated individuals were required to carry registration cards at all times. They were prohibited from possessing firearms, cameras, or radio equipment. They could not travel without permission or live within half a mile of any facility deemed important to national defense, which included shipyards, military bases, and even bridges and tunnels.
            </p>
            <p>
              Violators faced immediate arrest and internment without trial. The burden of proof fell on the immigrant to demonstrate loyalty, a nearly impossible task for those who spoke limited English or lacked social connections to vouch for them. The atmosphere of suspicion extended beyond legal requirements; employers fired workers simply for having Slavic surnames, and neighbors reported each other based on rumor and prejudice.
            </p>
          </div>
        </motion.section>

        {/* Key Historical Events Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-8">
            Key Historical Events
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1914</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">Outbreak of World War I</h3>
                <p className="text-stone-600 font-light">Assassination of Archduke Franz Ferdinand in Sarajevo triggers the war. South Slavic immigrants in America watch anxiously as their homelands become battlegrounds between Austria-Hungary and Serbia.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1917</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">U.S. Enters the War</h3>
                <p className="text-stone-600 font-light">America declares war on Germany in April and Austria-Hungary in December. Enemy alien registration requirements transform immigrant communities overnight.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1918</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">Peak of Internments</h3>
                <p className="text-stone-600 font-light">Thousands are detained in internment camps. The influenza pandemic complicates conditions, claiming lives among both internees and guards.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1920</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">Final Releases</h3>
                <p className="text-stone-600 font-light">Last internees released. Many return to communities that have changed, facing ongoing suspicion and economic hardship. Some choose to return to the newly independent nations of Yugoslavia.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Image Placeholder Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-3 gap-4"
        >
          <div className="bg-stone-200 h-48 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <FileWarning className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Registration Card</p>
            </div>
          </div>
          <div className="bg-stone-200 h-48 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Internment Camp</p>
            </div>
          </div>
          <div className="bg-stone-200 h-48 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <Home className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs uppercase tracking-widest">Community Photo</p>
            </div>
          </div>
        </motion.div>

        {/* Personal Stories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Personal Stories
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              Behind the statistics and policy documents lie individual human stories of disruption and resilience. Consider Ivan Horvat, a steelworker in Johnstown, Pennsylvania, who had lived in America for fifteen years and was just months away from completing his naturalization when the war began. His application was suspended, and he was required to report to authorities weekly, unable to travel to visit his ailing mother in a neighboring town.
            </p>
            <p>
              Or Marija Novak, whose husband was interned at Fort Oglethorpe, leaving her to support four children alone. She took in laundry and boarders, writing weekly letters that the camp censors often delayed or destroyed. Her letters, preserved by family members, reveal both the practical struggles of survival and the emotional toll of prolonged separation.
            </p>
            <p>
              These stories remind us that policies enacted in the name of national security have profound human costs. The enemy alien experience shaped families for generations, creating silences and traumas that descendants are only now beginning to explore and understand.
            </p>
          </div>
        </motion.section>

        {/* Legacy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Historical Legacy
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              The enemy alien experience of World War I set precedents that would shape American immigration policy for decades. The restrictive immigration acts of the 1920s drew directly on wartime xenophobia, establishing national origins quotas that discriminated against Southern and Eastern Europeans. The infrastructure and legal frameworks developed for enemy alien management were later applied to Japanese Americans during World War II.
            </p>
            <p>
              Understanding this history is essential for comprehending how nations balance security concerns with civil liberties during times of crisis. The stories of South Slavic enemy aliens offer lessons about the dangers of guilt by association, the importance of due process, and the resilience of immigrant communities in the face of persecution.
            </p>
          </div>

          {/* Large Image Placeholder */}
          <div className="mt-8 bg-stone-200 h-64 flex items-center justify-center border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-500">
              <History className="w-12 h-12 mx-auto mb-4" />
              <p className="uppercase tracking-widest text-sm">Historical Aftermath Photo</p>
              <p className="text-xs mt-2">Post-war community rebuilding</p>
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
            Explore Primary Sources
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto mb-8">
            Dive into our database of documents, photographs, and records to discover the personal histories behind this overlooked chapter of American immigration.
          </p>
          <a
            href="#/database"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Search the Database
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default DiscoverHistory;
