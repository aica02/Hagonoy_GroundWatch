import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Overview from './components/Overview';
import CausesEffects from './components/CausesEffects';
import CommunityImpact from './components/CommunityImpact';
import InteractiveMap from './components/InteractiveMap';
import MitigationSolutions from './components/MitigationSolutions';
import QuizSection from './components/QuizSection';
import FeedbackForm from './components/FeedbackForm';
import ReferencesSection from './components/ReferencesSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <section id="home">
          <Hero3D />
          <Overview />
        </section>

        <section id="causes-effects">
          <CausesEffects />
        </section>

        <section id="impact">
          <CommunityImpact />
        </section>

        <section id="map">
          <InteractiveMap />
        </section>

        <section id="solutions">
          <MitigationSolutions />
        </section>

        <section id="quiz">
          <QuizSection />
        </section>

        <section id="reporting">
          <FeedbackForm />
        </section>

        <section id="references">
          <ReferencesSection />
        </section>
      </main>

      <Chatbot />
      <Footer />
    </div>
  );
}
