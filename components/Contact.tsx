import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-sepia-100 overflow-hidden">
      {/* Top gradient for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
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
            For academic inquiries, speaking engagements, or collaboration regarding the Enemy Aliens archive project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:pl-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Email</h4>
                <a href="mailto:research@example.edu" className="text-stone-600 hover:text-stone-900 transition-colors">alex.kovac@university.edu</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Office</h4>
                <p className="text-stone-600">
                  Department of History, Humanities Bldg 404<br />
                  123 University Ave, Chicago, IL
                </p>
              </div>
            </div>
            
             <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-sm text-stone-800">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">Social</h4>
                <div className="flex gap-4 text-stone-600">
                  <a href="#" className="hover:text-stone-900 transition-colors">Twitter/X</a>
                  <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-stone-900 transition-colors">Academia.edu</a>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;