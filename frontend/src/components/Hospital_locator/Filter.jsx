import React, { useState, useEffect } from 'react';
// Leaflet CSS (must be included)
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
document.head.appendChild(style);

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    const categories = ['All', 'General', 'Clinic', 'Specialty', 'Emergency'];
    const specializations = ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics'];    
    
    return(
        <div className="p-6 border-b">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">HOSPITAL TYPE</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-400 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h2 className="text-sm font-semibold text-gray-700 mb-3 mt-6">SPECIALIZATIONS</h2>
          <div className="flex flex-wrap gap-2">
            {specializations.map(spec => (
              <button
                key={spec}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
    );
}
export default Filter;