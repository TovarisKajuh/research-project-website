import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 bg-sepia-100 overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(242, 239, 235, 1) 0%, transparent 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20">
        
        <div>
           <h3 className="text-2xl font-display font-black uppercase tracking-wide text-stone-900 mb-8">
            Get in Touch
          </h3>
          <p className="text-stone-600 font-light mb-8 max-w-md">
            For academic inquiries, speaking engagements, or collaboration regarding the AaA Project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:pl-12">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:bg-stone-900 group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Email</h4>
                <a href="mailto:david.hazemali@um.si" className="text-stone-600 hover:text-stone-900 transition-colors underline-offset-4 hover:underline">david.hazemali@um.si</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:bg-stone-900 group-hover:text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Office</h4>
                <p className="text-stone-600">
                  Koroška cesta 160<br />
                  2000, Maribor, Slovenia
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:bg-stone-900 group-hover:text-white">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Social</h4>
                <div className="flex flex-wrap gap-4 text-stone-600">
                  <a href="https://uni-mb.academia.edu/DavidHazemali" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">Academia.edu</a>
                  <a href="https://www.researchgate.net/profile/David-Hazemali" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">ResearchGate</a>
                  <a href="https://orcid.org/0000-0001-9776-8224" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">ORCiD</a>
                  <a href="https://www.webofscience.com/wos/author/record/AAB-6723-2020" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">Web of Science</a>
                  <a href="https://www.scopus.com/authid/detail.uri?authorId=57200184398" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">Scopus</a>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;