import React from 'react';
import logo from '../../assets/img/black-healthmate-logo.png';

const Contact = () => {
    return (
      <section className="px-8 py-20" style={{ background: 'linear-gradient(to bottom, #FFF7F5 20%, #FFEDE9 80%)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h1 className="text-7xl md:text-7xl font-extrabold leading-tight ">
              <div style={{ color: '#362542' }}>Contact Us</div>
            </h1>
            <div className="text-base space-y-6  text-gray-700" >
              <p>Have a question or want to learn more about CertiAI? Get in touch with us!</p>
              <p>
                Address: [Your Physical Address or Headquarters] 
                Email: contact@certiai.com 
                Phone: [+1 (XXX) XXX-XXXX] 
                Social Media: [Links to your social media profiles]
              </p>
              <p>We value your feedback and inquiries. Reach out to our team, and we'll be delighted to assist you.</p>
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
export default Contact;