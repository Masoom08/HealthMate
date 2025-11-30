import React, { useRef }  from 'react';
import Header from '../../utils/header';
import Hero from '../../components/Preventive/Hero.jsx';
import Impression from '../../components/Preventive/Impression.jsx';
import Stats from '../../components/Preventive/Stats.jsx';
import Footer from '../../utils/footer';

const Preventive = () => {
  const serviceRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <Hero />
      <Impression />
        <Stats />
      <Footer />
    </div>
  );
};

export default Preventive;