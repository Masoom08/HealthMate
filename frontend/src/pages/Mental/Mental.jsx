import React, { useRef } from 'react';
import Hero from '../../components/Mental/Hero.jsx';
import SearchHeader from '../../utils/search_header';
import Features from '../../components/Mental/Features.jsx';
import Meditation from '../../components/Mental/Meditation.jsx';
import Music from '../../components/Mental/Music.jsx';
import Sleep from '../../components/Mental/Sleep.jsx';
import Emergency from '../../components/Mental/Emergency.jsx';
import BreathingExercise from '../../components/Mental/Breathe.jsx';

const Mental = () => {
  // Section References
  const meditationRef = useRef(null);
  const musicRef = useRef(null);
  const sleepRef = useRef(null);
  const breatheRef = useRef(null);
  const emergencyRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <SearchHeader />
      <Hero />

      <BreathingExercise ref={breatheRef} />

      {/* Pass scrollToSection to Features component */}
      <Features 
        scrollTo={{
          meditation: () => scrollToSection(meditationRef),
          emergency: () => scrollToSection(emergencyRef),
          breathe: () => scrollToSection(breatheRef),
          music: () => scrollToSection(musicRef),
          sleep: () => scrollToSection(sleepRef),
        }}
      />

      {/* Sections */}
      <div ref={meditationRef}><Meditation /></div>
      <div ref={musicRef}><Music /></div>
      <div ref={sleepRef}><Sleep /></div>
      <div ref={emergencyRef}><Emergency /></div>
    </div>
  );
};

export default Mental;
