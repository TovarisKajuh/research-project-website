import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ResearcherProfile from './components/ResearcherProfile';
import Affiliations from './components/Affiliations';
import NavigationCards from './components/NavigationCards';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FollowResearch from './pages/FollowResearch';
import DiscoverHistory from './pages/DiscoverHistory';
import ExploreDatabase from './pages/ExploreDatabase';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render subpages
  if (currentRoute === '#/research') {
    return <FollowResearch />;
  }

  if (currentRoute === '#/history') {
    return <DiscoverHistory />;
  }

  if (currentRoute === '#/database') {
    return <ExploreDatabase />;
  }

  // Main page
  return (
    <div className="min-h-screen w-full bg-sepia-50 text-stone-850 selection:bg-stone-850 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProjectGallery />
        <ResearcherProfile />
        <Affiliations />
        <NavigationCards />
        <FAQ />
        <Contact />
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-10 text-center border-t border-stone-200 bg-sepia-50">
        <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">
          &copy; 2025 AaA Project
        </p>
        <p className="text-[10px] text-stone-400 tracking-wide mb-2">
          A postdoctoral project at the Department of History, Faculty of Arts, University of Maribor.
        </p>
        <p className="text-[10px] text-stone-400 tracking-wide italic">
          Select images were upscaled using software.
        </p>
      </footer>
    </div>
  );
};

export default App;
