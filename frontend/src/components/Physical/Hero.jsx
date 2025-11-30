import React from 'react';
import {
  ArrowRight,
 } from 'lucide-react';
import logo from '../../assets/img/physical/physical_health.png';

const Hero = () => {
    return (
      <section className="px-8 py-8" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="space-y-2 items-center">
            <h1 className="font-inter text-6xl md:text-7xl flex justify-center font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>PHYSICAL HEALTH</div>
            </h1>
            <div className="flex justify-center">
                <img 
                    src={logo}
                    alt="HealthMate Illustration" 
                    className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
                />
                </div>
            <div className="flex justify-center space-y-2 text-gray-700" >
              <p>Building strength, fitness, and recovery - your active body companion</p>
            </div>
        </div>
          
      </section>
    );
};
export default Hero;