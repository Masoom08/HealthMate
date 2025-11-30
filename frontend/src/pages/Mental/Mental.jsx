import React, { useRef }  from 'react';
import Hero from '../../components/Mental/Hero.jsx';
import Progress from '../../components/Physical/Progress.jsx';
import WorkoutPlans from '../../components/Physical/Workout.jsx';
import SearchHeader from '../../utils/search_header';
import Features from '../../components/Mental/Features.jsx';
import Meditation from '../../components/Mental/Meditation.jsx';
import Music from '../../components/Mental/Music.jsx';
import Sleep from '../../components/Mental/Sleep.jsx';
import Emergency from '../../components/Mental/Emergency.jsx';
import BreathingExercise from '../../components/Mental/Breathe.jsx'; 
const Mental = () => {
  const serviceRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <SearchHeader />
      <Hero  />
      <BreathingExercise/>
      <Features/>
      <Meditation/>
      <Music/>
      <Sleep/>
      <Emergency/>
    </div>
  );
};

export default Mental;