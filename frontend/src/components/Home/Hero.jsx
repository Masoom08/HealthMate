import React from 'react';
import {
  ArrowRight,
 } from 'lucide-react';
import logo from '../../assets/img/black-healthmate-logo.png';

const Hero = () => {
    return (
      <section className="px-8 py-20" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h1 className="text-7xl md:text-7xl font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>HEALTHMATE</div>
              <div style={{ background: 'linear-gradient(to bottom, #FF6B3D, #8A5EA8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                INTELLIGENT AI COMPANION FOR WELL-BEING
              </div>
              
            </h1>
            <div className="space-y-2 text-gray-700" >
              <p>Your 24/7 partner for mind and body wellness</p>
              <p>Fast Insights, Fast Health.</p>
            </div>
            <button className="flex items-center gap-2 text-white px-8 py-3 w-[200px] h-[50px] text-[16px] rounded-full font-medium transition-colors" 
              style={{
                background: 'linear-gradient(to bottom, #FF6B3D 0%, #FF7B6E 100%)'
              }}
            >
              Explore Tests
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
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
export default Hero;