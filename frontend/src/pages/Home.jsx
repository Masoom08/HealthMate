import React, { useState } from 'react';
import { Heart, Activity, Brain, AlertTriangle, MapPin, Stethoscope, Globe, Clock, Send, Phone, Mail } from 'lucide-react';

import Navbar from '../components/Navbar';

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
      icon: <Activity className="w-16 h-16 text-blue-600" />,
      title: "Physical Health",
      description: "Receive comprehensive physical health assessments and personalized wellness recommendations tailored to your individual needs."
    },
    {
      icon: <Brain className="w-16 h-16 text-blue-600" />,
      title: "Mental Health",
      description: "Expert guidance for mental wellbeing with professional stress management and emotional health support systems."
    },
    {
      icon: <Stethoscope className="w-16 h-16 text-blue-600" />,
      title: "AI Health Assistant",
      description: "Your intelligent 24/7 health companion providing instant medical guidance, symptom analysis, and health insights."
    },
    {
      icon: <AlertTriangle className="w-16 h-16 text-red-600" />,
      title: "Emergency Support",
      description: "Immediate medical assistance and emergency guidance with quick response protocols for urgent health situations."
    },
    {
      icon: <MapPin className="w-16 h-16 text-blue-600" />,
      title: "Hospital Locator",
      description: "Find the right care at the right place at the right time with our comprehensive healthcare facility locator."
    },
    {
      icon: <Activity className="w-16 h-16 text-blue-600" />,
      title: "Preventive Care",
      description: "The greatest revolutions start from the smallest changes in preventive healthcare and wellness monitoring."
    },
    {
      icon: <Globe className="w-16 h-16 text-blue-600" />,
      title: "Mood Journal",
      description: "The greatest revolutions start from the smallest changes in daily mood tracking and mental wellness."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-8 py-20" style={{ backgroundColor: '#FFEDE9' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <div style={{ color: '#362542' }}>HEALTHMATE</div>
              <div style={{ background: 'linear-gradient(to right, #FF6B3D, #8A5EA8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                INTELLIGENT AI
              </div>
              <div style={{ background: 'linear-gradient(to right, #FF6B3D, #8A5EA8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                COMPANION FOR
              </div>
              <div style={{ background: 'linear-gradient(to right, #FF6B3D, #8A5EA8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                WELL-BEING
              </div>
            </h1>
            <div className="space-y-2 text-gray-700">
              <p>Your 24/7 partner for mind and body wellness</p>
              <p>Fast Insights, Fast Health.</p>
            </div>
            <button className="text-white px-8 py-3 rounded-full font-medium transition-colors" style={{ backgroundColor: '#FF7B6E' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B5E'} onMouseLeave={(e) => e.target.style.backgroundColor = '#FF7B6E'}>
              Explore Tests
            </button>
          </div>
          
          <div className="flex justify-center">
           
            <img 
        src="/stetho.png" 
        alt="HealthMate Illustration" 
        className="w-[500px] md:w-[600px] lg:w-[700px] h-auto"
      />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-medium mb-2" style={{ color: '#FF7B6E' }}>Available 24/7</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Impressions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive health solutions designed to provide personalized care and support for your wellness journey through advanced AI technology.
            </p>
          </div>

          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center cursor-pointer transform hover:scale-105 ${
                  activeCard === index
                    ? 'bg-gradient-to-br from-red-300 to-purple-500 text-white'
                    : 'bg-white border border-gray-100 hover:bg-gradient-to-br hover:from-red-300 hover:to-purple-500 hover:text-white'
                }`}
              >
                <div className="mb-6 flex justify-center">
                  {React.cloneElement(service.icon, {
                    className: `w-16 h-16 ${
                      activeCard === index
                        ? 'text-white'
                        : service.icon.props.className
                    }`
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  activeCard === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  activeCard === index ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.slice(4, 7).map((service, index) => (
              <div
                key={index + 4}
                onClick={() => handleCardClick(index + 4)}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center cursor-pointer transform hover:scale-105 ${
                  activeCard === (index + 4)
                    ? 'bg-gradient-to-br from-red-300 to-purple-500 text-white'
                    : 'bg-white border border-gray-100 hover:bg-gradient-to-br hover:from-red-300 hover:to-purple-500 hover:text-white'
                }`}
              >
                <div className="mb-6 flex justify-center">
                  {React.cloneElement(service.icon, {
                    className: `w-16 h-16 ${
                      activeCard === (index + 4) ? 'text-white' : service.icon.props.className
                    }`
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  activeCard === (index + 4) ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  activeCard === (index + 4) ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-20 text-white" style={{ backgroundColor: '#FF7B6E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-bold">50K+</div>
              <div className="text-xl">Active Users</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold">1000+</div>
              <div className="text-xl">Health Conditions</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold">24/7</div>
              <div className="text-xl">Support Available</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold">99.9%</div>
              <div className="text-xl">AI Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-medium mb-2" style={{ color: '#FF7B6E' }}>Newsletter</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">JOIN US</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none text-gray-900"
              style={{ boxShadow: 'none' }}
              onFocus={(e) => e.target.style.outline = `2px solid #FF7B6E`}
              onBlur={(e) => e.target.style.outline = 'none'}
            />
            <button
              onClick={handleSubscribe}
              className="text-white px-8 py-4 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#FF7B6E' }}
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
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>About Us</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Carrier</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>We are hiring</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Legal</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>About Us</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Carrier</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>We are hiring</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Features</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Business Marketing</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>User Analytic</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Live Chat</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Unlimited Support</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Resources</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>IOS & Android</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Watch a Demo</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>Customers</a>
                <a href="#" className="block text-gray-600 transition-colors" onMouseEnter={(e) => e.target.style.color = '#FF7B6E'} onMouseLeave={(e) => e.target.style.color = '#4B5563'}>API</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
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
            <p className="text-gray-600">Made With Love By Figmaland All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthMate;