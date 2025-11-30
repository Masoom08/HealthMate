import React, { useRef }  from 'react';
import Hero from '../../components/Physical/Hero.jsx';
import Progress from '../../components/Physical/Progress.jsx';
import WorkoutPlans from '../../components/Physical/Workout.jsx';
import SearchHeader from '../../utils/search_header';

const Physical = () => {
  const serviceRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <SearchHeader />
      
      <Hero  />
      <Progress/>
      <WorkoutPlans />
      <WorkoutPlans />
      <WorkoutPlans />
      <WorkoutPlans />
    </div>
  );
};

export default Physical;