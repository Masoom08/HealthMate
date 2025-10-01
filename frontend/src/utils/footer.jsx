import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};
export default Footer;