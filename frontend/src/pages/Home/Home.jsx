import React, { useRef }  from 'react';
import Header from '../../utils/header';
import Hero from '../../components/Home/Hero';
import Service from '../../components/Home/Services';
import Stats from '../../components/Home/Stats';
import Newsletter from '../../components/Home/Newsletter';
import Footer from '../../utils/footer';
import SearchHeader from '../../utils/search_header';

const Home = () => {
  const serviceRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <Header scrollToService={scrollToService}/>
      <Hero  />
      <Service ref={serviceRef} />
      <Stats />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;