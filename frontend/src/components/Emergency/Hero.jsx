import React from 'react';
import logo from '../../assets/img/emergency/emergency.png';

const Hero = () => {
    return (
      <section className="px-8 py-8" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="space-y-2 items-center">
            <h1 className="font-inter text-6xl md:text-7xl flex justify-center font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>EMERGENCY</div>
            </h1>
            <h1 className="font-inter text-6xl md:text-7xl flex justify-center font-extrabold leading-tight ">
              <div style={{ color: '#FF7B6E' }}>SUPPORT CENTER</div>
            </h1>
            <div className="flex justify-center">
                <img 
                    src={logo}
                    alt="HealthMate Illustration" 
                    className="w-[100px] md:w-[120px] lg:w-[140px] h-auto mx-auto"
                />
                </div>
            <div className="flex justify-center space-y-2 text-gray-700" >
              <p>Immediate access to critical healthcare services. Help is just a tap away.</p>
            </div>
        </div>
          
      </section>
    );
};
export default Hero;