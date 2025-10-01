import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
// Leaflet CSS (must be included)
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
document.head.appendChild(style);

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
  
    const hospitals = [
      {
        id: 1,
        name: "General Hospital Lucknow",
        category: "General",
        distance: "2.5 km",
        availability: "25 Beds Available",
        timing: "Open 24 Hours",
        waitTime: "15 min",
        coordinates: [26.8467, 80.9462],
        type: "Government"
      },
      {
        id: 2,
        name: "Krishna Sai Clinics/Hospital",
        category: "Clinic",
        distance: "1.8 km",
        availability: "5 Beds Available",
        timing: "Mon-Sat 9AM-9PM, Sun 9AM-2PM",
        waitTime: "5 min",
        coordinates: [26.8567, 80.9362],
        type: "Private"
      },
      {
        id: 3,
        name: "Rajdhani Super Specialty Hospital",
        category: "Specialty",
        distance: "3.2 km",
        availability: "10 Beds Available",
        timing: "Open 24 Hours",
        waitTime: "20 min",
        coordinates: [26.8367, 80.9562],
        type: "Private"
      }
    ];

    const filteredHospitals = hospitals.filter(hospital => {
      const matchesCategory = selectedCategory === 'All' || hospital.category === selectedCategory;
      const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    return(
    <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              SHOWING {filteredHospitals.length} HOSPITALS NEAR YOU
            </h2>
          </div>

          <div className="space-y-4">
            {filteredHospitals.map(hospital => (
              <div
                key={hospital.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {hospital.name}
                  </h3>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                    {hospital.type}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {hospital.category} • {hospital.distance}
                </p>

                <div className="flex items-center gap-1 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">
                    {hospital.availability}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  {hospital.timing}
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    Wait Time: {hospital.waitTime}
                  </span>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}
export default Filter;