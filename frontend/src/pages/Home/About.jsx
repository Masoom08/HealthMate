import React from 'react';
import Header from '../../utils/header';
import AboutPage from '../../components/Home/About';
import Footer from '../../utils/footer';

const About = () => {
  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <AboutPage />
      <Footer/>
    </div>
  );
};

export default About;