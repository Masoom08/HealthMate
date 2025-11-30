import React, { useRef }  from 'react';
import Header from '../../utils/header';
import Hero from '../../components/Emergency/Hero.jsx';
import Helpline from '../../components/Emergency/Helpline.jsx';
import Stats from '../../components/Emergency/Stats.jsx'; 
import Support from '../../components/Emergency/Support.jsx';
import ResponseTips from '../../components/Emergency/ResponseTips.jsx';
import Footer from '../../utils/footer.jsx';



const Emergency = () => {
  const serviceRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <Hero  />
      <Helpline />
     <ResponseTips />
      <Support />
      <Stats />
      <Footer />
    </div>
  );
};

export default Emergency;