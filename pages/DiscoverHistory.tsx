import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, History, MapPin, Ship, FileWarning, Home } from 'lucide-react';
import { ImageModal } from '../components/ImageModal';

const DiscoverHistory: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const gridImages = [
    { src: '/content/Image d.webp', alt: 'Historical Document' },
    { src: '/content/Image e.webp', alt: 'Historical Photo' },
    { src: '/content/Image f.webp', alt: 'Historical Photo' }
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
            "New Immigrants"
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed space-y-6">
            <p>
              From the 1880s to the outbreak of World War I, migrants from the South Slavic speaking provinces of the Austro Hungarian Empire became part of what U.S. historians commonly call the era of "New Immigration," the mass movement of people from Southern and Eastern Europe that transformed American cities and workplaces. Hundreds of thousands set out for the United States, with Slovenians and Croatians forming the largest groups within these South Slavic migrations.
            </p>
            <p>
              Most followed job markets and chain migration routes into industrial America, including mines, mills, railroads, and packinghouses, then built the institutions that made settlement possible. Fraternal benefit societies, churches and parishes, mutual aid networks, and a vibrant ethnic press helped newcomers find work, navigate paperwork, and stay connected to community life. Even before wartime restrictions, however, "Slavs" could be treated as outsiders, shaped by stereotypes and, at times, by the attention of officials who viewed these "new immigrants« from the Habsburg monarchy as potentially problematic.
            </p>
          </div>
        </motion.section>

        {/* Historical Immigration Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex justify-center"
        >
          <img
            src="/content/Image c.webp"
            alt="Historical Immigration Photo"
            loading="lazy"
            className="w-full h-auto object-cover cursor-pointer"
            onClick={() => openModal('/content/Image c.webp', 'Historical Immigration Photo')}
          />
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
              After the United States entered the war against Germany in April 1917, federal proclamations began regulating "enemy aliens" (non-United States citizens living in the United States who were citizens of a country at war with the United States). Early rules limited where they could go and what they could possess, and in November 1917 the government ordered a formal registration system with registration cards issued as quickly as practicable, a process that rolled out in practice in early 1918. When the United States declared war on Austria-Hungary in December 1917, the same category could now encompass non naturalized subjects of the Habsburg monarchy, including many South Slavic immigrants. Here a crucial distinction mattered. "Austrian" or "Hungarian" on paper described citizenship, not ethnicity. Many of those classified this way were Slovenian, Croat, Serb, and other imperial subjects whose language and identity did not match the state name on their documents.
            </p>
            <p>
              At the same time, large numbers of these men and women worked in sectors essential to the war economy, and many Austro-Hungarian citizens employed in war related industries were exempted from numerous restrictions. As a result, enforcement could be uneven even as suspicion intensified in daily life.
            </p>
            <p>
              Military service added a further contradiction. By law, the Selective Service Act barred enemy aliens from joining the armed forces, whether by volunteering or through conscription, yet in practice many still ended up in uniform, often because classification and record keeping could not keep pace with mobilization. The War Department then tried to manage the problem through investigations, officer guidance about ethnic affiliations, and options for discharge or transfer to rear area units.
            </p>
            <p>
              The regulations themselves were intrusive. Enemy aliens could be required to register and carry identification, could be barred from weapons, cameras, and wireless equipment, and could be excluded from wide restricted zones around forts, camps, arsenals, munitions sites, and other sensitive infrastructure. Those deemed dangerous or noncompliant risked arrest and confinement, while beyond the paperwork the designation fed a climate of surveillance, denunciations, and public pressure.
            </p>
            <p>
              And it is in individual lives that the meaning of these rules becomes clearest. The personal stories that follow show how registration cards, travel limits, workplace pressure, and neighborhood suspicion played out in ordinary days.
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
                <h3 className="font-display font-bold text-stone-900 mb-2">War in Europe Begins</h3>
                <p className="text-stone-600 font-light">The assassination in Sarajevo sparks a conflict that rapidly spreads across Europe. From the United States, immigrants from the Habsburg lands follow the news through letters and newspapers, watching familiar regions become front lines and rear areas, and sensing that the Atlantic may not remain a barrier forever.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1917</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">U.S. Enters the War and the Enemy Alien System Expands</h3>
                <p className="text-stone-600 font-light">After the United States declares war on Germany in April, restrictions begin to reshape daily life for non-naturalized German citizens. In November, the federal government orders a formal enemy alien registration system that is implemented on the ground in early 1918. In December, when the United States declares war on Austria Hungary, the same framework can now reach non naturalized subjects of the Habsburg monarchy, including many South Slavic immigrants, although enforcement is often uneven.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1918</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">Detentions and Internment</h3>
                <p className="text-stone-600 font-light">Arrests and short-term detentions become common under wartime surveillance and "investigation." A smaller number are held long term in War Department facilities such as Fort Oglethorpe and Fort Douglas. The influenza pandemic adds another layer of danger and uncertainty inside camps and detention sites.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div className="text-right md:pr-6 border-r-2 border-stone-300">
                <span className="text-3xl font-display font-black text-stone-300">1920</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-stone-900 mb-2">Slow Endings</h3>
                <p className="text-stone-600 font-light">Releases and deportations continue well after the Armistice. Some detainees remain in custody into 1920, returning to communities altered by war, suspicion, and political upheaval. Others look back across the Atlantic to a newly formed Kingdom of Serbs, Croats, and Slovenes, created in December 1918.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Historical Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {gridImages.map((img, i) => (
            <motion.div
              key={i}
              className="bg-white p-3 shadow-xl cursor-pointer relative max-w-sm mx-auto w-full"
              style={{ rotate: [-2, 0, 2][i] }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              onClick={() => openModal(img.src, img.alt)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto sepia-[0.15] hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-3 pointer-events-none border border-stone-200/50" />
            </motion.div>
          ))}
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
            <h3 className="text-xl font-display font-bold text-stone-900">A war bond bought under force</h3>
            <p>
              Joseph Kovath, an Austrian citizen working in the steel district of Johnstown, Pennsylvania, refused to buy Liberty Bonds. His refusal did not remain a private choice. A group of men seized him, humiliated him in public, and dragged him through the streets until he purchased a bond. The episode shows how "loyalty" was often enforced not only by regulations and officials, but also by workplace pressure and the threat of violence.
            </p>

            <h3 className="text-xl font-display font-bold text-stone-900">Interned for words, held behind barbed wire</h3>
            <p>
              A non-naturalized Croatian, Ante (Anton) Yakubin, was interned on 15 March 1918 after allegedly cheering for Germany and was transferred to Fort Oglethorpe. In a preserved letter dated 20 November 1918, written to request release, Yakubin noted that there were 45 of his "fellow citizens" in the prison at that time, likely meaning others carrying Austro Hungarian passports. His case shows how quickly suspicion could turn into confinement, and how a single incident could place someone inside the wartime detention system for months.
            </p>

            <h3 className="text-xl font-display font-bold text-stone-900">A home raided for a newspaper subscription</h3>
            <p>
              Slovenian editor Jože Zavertnik was not physically harmed, but his message was made clear: According to the memoirs collected by another editor Ivan Molek, unknown perpetrators broke into his home and caused material damage because he subscribed to a pacifist publication. In wartime, even reading choices could be treated as evidence of disloyalty, and intimidation could arrive at your door without warning.
            </p>

            <h3 className="text-xl font-display font-bold text-stone-900">An arrest that reveals how power could be abused</h3>
            <p>
              In Salt Lake City, an Austrian engineer named Erich Pohl was arrested by a local deputy sheriff, even though federal authorities reportedly had not been tracking him as an enemy alien beforehand. The case suggests how the enemy alien label could be pulled into local conflicts and personal vendettas, turning a legal category into a tool for intimidation far beyond its original purpose.
            </p>

            <h3 className="text-xl font-display font-bold text-stone-900">"Keep your mouth shut and obey the law"</h3>
            <p>
              In Minnesota's mining country, an officer of a Slovenian fraternal lodge ended up in jail after refusing to comply with wartime registration requirements. Around the same time, a member named M. E. Sostarič wrote an angry letter describing an America where people could be arrested without a warrant and even shot "in the middle of the street" for failing to register.
            </p>

            <p>
              Together, these fragments show how rules on paper became fear, pressure, and raw coercion in everyday life.
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
        </motion.section>

        {/* Selected Bibliography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-stone-900 uppercase tracking-wide mb-6">
            Selected Bibliography
          </h2>
          <div className="prose prose-lg text-stone-700 font-light leading-relaxed">
            <ul className="space-y-3">
              <li>
                Bicha, Karel Dennis (1982): Hunkies: Stereotyping the Slavic Immigrants, 1890–1920. <em>Journal of American Ethnic History</em> 2, no. 1, pp. 16–38.
              </li>
              <li>
                Capozzola, Christopher (2008): <em>Uncle Sam Wants You: World War I and the Making of the Modern American Citizen</em>. New York, Oxford University Press.
              </li>
              <li>
                Ford, Nancy Gentile (2001): <em>Americans All! Foreign-born Soldiers in World War I</em>. College Station, Texas A&M University Press.
              </li>
              <li>
                Hazemali, David & Mateja Matjašič Friš (2018): ''Naši simpatizerji Avstrije so bili utišani kot z nabojem''. Položaj slovenske skupnosti v Združenih državah Amerike v času prve svetovne vojne. <em>Acta Histriae</em> 26, no. 3, pp. 899–922.
              </li>
              <li>
                Hazemali, David (2023): Safeguarding Liberty? Repressive Measures against Enemy Aliens and Ethnic Community Resilience in WWI United States: The Slovenian-American Experience. <em>Annales, Series Historia et Sociologia</em> 33, no. 3, pp. 489–502.
              </li>
              <li>
                Nagler, Jorg A. (2000): <em>Nationale Minoritäten im Krieg: "Feindliche Ausländer" und die amerikanische Heimatfront während des Ersten Weltkriegs</em>. Hamburg, Hamburger Edition.
              </li>
              <li>
                Phelps, Nicole M. (2010): "A Status Which Does Not Exist Anymore": Austrian and Hungarian Enemy Aliens in the United States, 1917–1921. In: Bischof, Günter, Plasser Fritz & Peter Berger (eds.): <em>From Empire to Republic: Post-World War I Austria</em>. Innsbruck, Innsbruck University Press, pp. 90–109.
              </li>
              <li>
                Potterf, Rex M. (1927): Treatment of Alien Enemy Property in War Time and After by the United States. <em>Indiana Law Journal</em> 2, no. 6, pp. 453–472.
              </li>
              <li>
                Wüstenbecker, Katja (2007): <em>Deutsch-Amerikaner im Ersten Weltkrieg: US-Politik und nationale Identitäten im Mittleren Westen</em>. Stuttgart, Franz Steiner Verlag.
              </li>
            </ul>
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
            Dive into our database of documents, photographs, and records to discover the personal histories behind this overlooked chapter of South Slavic immigration to America.
          </p>
          <a
            href="#/database"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Search the Database
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

export default DiscoverHistory;
