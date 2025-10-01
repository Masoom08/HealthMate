import React from 'react';
import logo from '../../assets/img/black-healthmate-logo.png';

const AboutPage = () => {
    return (
      <section className="px-8 py-20" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h1 className="text-7xl md:text-7xl font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>About Us</div>
            </h1>
            <div className="text-base space-y-6  text-gray-700" >
              <p>Welcome to CertiAI! We are a pioneering platform committed to revolutionizing the way individuals learn and excel in their fields. At CertiAI, we harness the power of artificial intelligence to provide cutting-edge solutions in education and assessment.</p>
              <p>Our mission is to empower learners, educators, and institutions by offering innovative tools and comprehensive learning environments. With a focus on adaptive learning, we tailor our solutions to individual needs, ensuring personalized and effective learning experiences.</p>
              <p>Together, we strive to create a seamless ecosystem that fosters knowledge acquisition, skill development, and professional growth.</p>
              <p>Join us on this transformative journey as we shape the future of learning with CertiAI!</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={logo}
              alt="HealthMate Illustration" 
              className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
            />
          </div>
        </div>
      </section>
    );
};
export default AboutPage;