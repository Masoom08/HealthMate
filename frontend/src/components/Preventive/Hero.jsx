import React from 'react';
import logo from '../../assets/img/preventive/img.png';

const Hero = () => {
    return (
      <section className="px-8 py-8" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="space-y-2 items-center">
            <h1 className="font-inter text-6xl md:text-7xl flex justify-center font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>PREVENTIVE CARE</div>
            </h1>
            <h1 className="font-inter text-6xl md:text-7xl flex justify-center font-extrabold leading-tight ">
              <div style={{ color: '#FF7B6E' }}>DASHBOARD</div>
            </h1>
            <div className="flex justify-center">
                <img 
                    src={logo}
                    alt="HealthMate Illustration" 
                    className="w-[100px] md:w-[120px] lg:w-[140px] h-auto mx-auto"
                />
                </div>
            <div className="flex justify-center space-y-2 text-gray-700" >
              <p>Stay Healthy and avoid illness before it starts - your proactive health companion</p>
            </div>
        </div>
          
      </section>
    );
};
export default Hero;