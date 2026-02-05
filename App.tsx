import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ResearcherProfile from './components/ResearcherProfile';
import Affiliations from './components/Affiliations';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-sepia-50 text-stone-850 selection:bg-stone-850 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProjectGallery />
        <ResearcherProfile />
        <Affiliations />
        <FAQ />
        <Contact />
      </main>
      
      {/* Simple Footer */}
      <footer className="w-full py-8 text-center text-xs text-stone-500 uppercase tracking-widest border-t border-stone-200">
        &copy; {new Date().getFullYear()} Enemy Aliens Research Project. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;