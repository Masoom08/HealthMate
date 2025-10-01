import React from 'react';
import Header from '../../utils/header';
import Hero from '../../components/Home/Hero';
import Service from '../../components/Home/Services';
import Stats from '../../components/Home/Stats';
import Newsletter from '../../components/Home/Newsletter';
import Footer from '../../utils/footer';

const Home = () => {
  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <Hero />
      <Service />
      <Stats />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;