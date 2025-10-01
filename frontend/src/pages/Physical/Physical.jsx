import React, { useRef }  from 'react';
import Hero from '../../components/Home/Hero';
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
      
    </div>
  );
};

export default Physical;