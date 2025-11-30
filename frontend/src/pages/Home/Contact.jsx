import React from 'react';
import Header from '../../utils/header';
import Contact from '../../components/Home/Contact';
import Footer from '../../utils/footer';

const About = () => {
  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <Contact />
      <Footer/>
    </div>
  );
};

export default About;