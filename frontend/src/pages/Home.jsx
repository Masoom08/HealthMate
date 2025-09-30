import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Brain, 
  AlertTriangle, 
  MapPin, 
  Stethoscope, 
  Globe, 
  
  Clock, Send, Phone, Mail,
  ArrowRight

 } from 'lucide-react';
import logo from '../assets/img/black-healthmate-logo.png';
import Navbar from '../components/Navbar';
import physicalHealthImg from '../assets/img/service/physical.png';
import mentalHealthImg from '../assets/img/service/mental.png';
import aiHealthImg from '../assets/img/service/ai.png';
import emergencyImg from '../assets/img/service/emergency.png';
import hospitalImg from '../assets/img/service/locator.png';
import preventiveImg from '../assets/img/service/symptoms.png';
import moodJournalImg from '../assets/img/service/journal.png';

const HealthMate = () => {
  const [email, setEmail] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const services = [
  {
    icon: <img src={physicalHealthImg} alt="Physical Health" className="w-16 h-16" />,
    title: "Physical Health",
    description: "Explore symptoms, cures, and preventive care tailored to you"
  },
  {
    icon: <img src={mentalHealthImg} alt="Mental Health" className="w-16 h-16" />,
    title: "Mental Health",
    description: "Calm your mind with guided exercises and real-time support"
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
    description: "Find the right care, at the right place, at the right time."
  },
  {
    icon: <img src={preventiveImg} alt="Preventive Care" className="w-16 h-16" />,
    title: "Preventive Care",
    description: "The gradual accumulation of information about"
  },
  {
    icon: <img src={moodJournalImg} alt="Mood Journal" className="w-16 h-16" />,
    title: "Mood Journal",
    description: "The gradual accumulation of information about"
  }
];

  return (
    <div className="font-inter min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="px-8 py-20 bg-white ml-56 mr-56 mt-8">
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

      {/* Stats Section */}
      <section className="px-8 py-20 text-white w-[1600px] h-[600px]" style={{ backgroundColor: '#FF7B6E' }}>
        <div className="max-w-7xl mx-auto mt-36">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div className="space-y-4">
              <div className="text-7xl font-bold">50K+</div>
              <div className="text-4xl font-bold">Active Users</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">1000+</div>
              <div className="text-4xl font-bold">Health Conditions</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">24/7</div>
              <div className="text-4xl font-bold">Support Available</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">99.9%</div>
              <div className="text-4xl font-bold">AI Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold mb-2" style={{ color: '#FF7B6E' }}>Newsletter</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">JOIN US</h2>
          <p className="text-gray-600 mb-12 ml-50 mr-50 max-w-2xl mx-auto text-sm">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          
          <div className="ml-30 flex" style = {{width: '688px',height: '58px'}}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-6 py-4 border border-gray-300  focus:outline-none text-gray-900"
              style={{boxShadow: 'none',width: '588px',height: '50px',borderRight: 'none',  }}
              onFocus={(e) => e.target.style.outline = `2px solid #FF7B6E`}
              onBlur={(e) => e.target.style.outline = 'none'}
            />
            <button
              onClick={handleSubscribe}
              className="text-white px-6 py-4  font-medium transition-colors"
              style={{ backgroundColor: '#FF7B6E',width: '100',height: '50px'  }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B5E'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF7B6E'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Company Info</h3>
              <div className="font-bold space-y-4 max-w-sm">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>About Us</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Carrier</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>We are hiring</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Legal</h3>
              <div className="font-bold space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>About Us</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Carrier</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>We are hiring</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Features</h3>
              <div className="font-bold space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Business Marketing</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>User Analytic</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Live Chat</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Unlimited Support</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Resources</h3>
              <div className="font-bold space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>IOS & Android</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Watch a Demo</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Customers</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>API</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="font-bold space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>(480) 555-0103</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>debra.holt@example.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">Made With Love By HealthMate All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthMate;