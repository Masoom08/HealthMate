import React, { useState ,forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import physicalHealthImg from '../../assets/img/service/physical.png';
import mentalHealthImg from '../../assets/img/service/mental.png';
import aiHealthImg from '../../assets/img/service/ai.png';
import emergencyImg from '../../assets/img/service/emergency.png';
import hospitalImg from '../../assets/img/service/locator.png';
import preventiveImg from '../../assets/img/service/symptoms.png';
import moodJournalImg from '../../assets/img/service/journal.png';

const Service = forwardRef((props, ref)=> {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();


  const handleCardClick = (index) => {
    setActiveCard(index);
    const selectedService = services[index];
    if (selectedService?.path) {
      navigate(selectedService.path);
    }
  };

  const services = [
      {
        icon: <img src={physicalHealthImg} alt="Physical Health" className="w-16 h-16" />,
        title: "Physical Health",
        description: "Explore symptoms, cures, and preventive care tailored to you",
        path: "/physical"
      },
      {
        icon: <img src={mentalHealthImg} alt="Mental Health" className="w-16 h-16" />,
        title: "Mental Health",
        description: "Calm your mind with guided exercises and real-time support",
        path: "/mental"
      },
      {
        icon: <img src={aiHealthImg} alt="AI Health Assistant" className="w-16 h-16" />,
        title: "AI Health Assistant",
        description: "Tell me your symptoms, I’ll guide you to the right care."
      },
      {
        icon: <img src={emergencyImg} alt="Emergency Support" className="w-16 h-16" />,
        title: "Emergency Support",
        description: "Help is just one click away—because every second matters."
      },
      {
        icon: <img src={hospitalImg} alt="Hospital Locator" className="w-16 h-16" />,
        title: "Hospital Locator",
        description: "Find the right care, at the right place, at the right time.",
        path: "/hospital-locator"
      },
      {
        icon: <img src={preventiveImg} alt="Preventive Care" className="w-16 h-16" />,
        title: "Preventive Care",
        description: "The gradual accumulation of information about"
      },
      {
        icon: <img src={moodJournalImg} alt="Mood Journal" className="w-16 h-16" />,
        title: "Mood Journal",
        description: "The gradual accumulation of information about",
        path: "/mood"
      }
  ];

  return (
    <section ref={ref} className="px-8 py-20 bg-white ml-56 mr-56 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-24 ">
          <p 
            className="font-bold mb-2" 
            style={{ color: '#FF7B6E',fontSize:'14px', letterSpacing: '0.2px' }}
          >Available 24/7</p>
          <h2 className="text-4xl font-bold text-black mt-4 mb-4" style={{letterSpacing: '0.2px'}}>See Our Impressions</h2>
          <p className="max-w-2xl text-lg " style={{ color: '#737373',fontSize:'14px', letterSpacing: '0.2px'  }}>
            Comprehensive health solutions designed to provide personalized care and support for your wellness journey through advanced AI technology.
          </p>
        </div>
        
        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-[240px] h-[308px] p-4 shadow-lg hover:shadow-xl transition-all duration-500 text-center cursor-pointer transform hover:scale-105 border-gray-100`}
              style={{background: activeCard === index ? 'linear-gradient(135deg, #FF6B3D 0%, #8A5EA8 50%)' : '#ffffff'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #FF6B3D 0%, #8A5EA8 100%)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = activeCard === index ? 'linear-gradient(135deg, #FF6B3D 0%, #8A5EA8 50%)' : '#ffffff';
                e.currentTarget.style.color = activeCard === index ? 'white' : '#1F2937';
              }}
            >
              <div className="ml-8 mb-6 mt-8 flex justify-start">
                {React.cloneElement(service.icon, {
                  className: `w-16 h-16 ${
                  activeCard === index
                    ? 'text-white'
                    : service.icon.props.className
                  } group-hover:text-white`
                })}
              </div>
              <h3 className={`ml-8 text-xl text-left font-bold mb-4 ${
                activeCard === index ? 'text-white' : 'text-gray-900'
                }group-hover:text-white`}>
                {service.title}
              </h3>
              <div className="ml-8 w-[50px] h-[2px] mb-4 bg-[#E74040] group-hover:bg-white transition-colors duration-300"></div>                
              <p className={`ml-8 text-sm leading-relaxed text-left ${activeCard === index ? 'text-white/90' : 'text-gray-600'}group-hover:text-white`}>
              {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-30 mr-30 mb-8">
          {services.slice(4, 7).map((service, index) => (
            <div
              key={index + 4}
              onClick={() => handleCardClick(index + 4)}
              className={`group w-[240px] h-[308px] p-4 shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 border-gray-100 flex flex-col`}
              style={{
                background: activeCard === (index + 4) ? 'linear-gradient(135deg, #FF6B3D 0%, #8A5EA8 50%)' : '#ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #FF6B3D 0%, #8A5EA8 100%)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = activeCard === (index+ 4) ? 'linear-gradient(135deg, #FF6B3D 0%, #8A5EA8 50%)' : '#ffffff';
                e.currentTarget.style.color = activeCard === (index+ 4) ? 'white' : '#1F2937';
              }}
            >
              <div className="ml-8 mb-6 mt-8 flex justify-start">
                {React.cloneElement(service.icon, {
                  className: `w-16 h-16 ${activeCard === (index + 4) ? 'text-white' : service.icon.props.className} group-hover:text-white`
                })}
              </div>
              <h3 className={`ml-8 text-xl text-left font-bold mb-4 ${activeCard === (index + 4) ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>
                {service.title}
              </h3>
              <div className="ml-8 w-[50px] h-[2px] mb-4 bg-[#E74040] group-hover:bg-white transition-colors duration-300"></div>
              <p className={`ml-8 text-sm text-left leading-relaxed ${activeCard === (index + 4) ? 'text-white/90' : 'text-gray-600'} group-hover:text-white`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Service;