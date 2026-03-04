import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProjectSection from './components/ProjectSection';
import AchievementsSection from './components/AchievementsSection';
import PolicySection from './components/PolicySection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProjectSection />
        <AchievementsSection />
        <PolicySection />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}
