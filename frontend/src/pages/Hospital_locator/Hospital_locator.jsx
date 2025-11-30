import React from 'react';
import Header from '../../components/Hospital_locator/Header';
import Filter from '../../components/Hospital_locator/Filter';
import List from '../../components/Hospital_locator/List';
import Map from '../../components/Hospital_locator/Map';

const HospitalLocator = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      
      <div className="w-96 bg-white shadow-lg overflow-y-auto">
        <Header />
        <Filter/>
        <List/>
      </div>

      
      <Map/>
    </div>
  );
};

export default HospitalLocator;


{/*
  import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';

// Leaflet CSS (must be included)
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
document.head.appendChild(style);

// Import Leaflet
const L = window.L || {};

const HospitalLocator = () => {
  const [map, setMap] = useState(null);
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

  const categories = ['All', 'General', 'Clinic', 'Specialty', 'Emergency'];
  const specializations = ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics'];

  useEffect(() => {
    const initMap = () => {
      if (!window.L) {
        setTimeout(initMap, 100);
        return;
      }

      const mapInstance = window.L.map('map').setView([26.8467, 80.9462], 13);

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstance);

      // Add static hospital markers
      hospitals.forEach(hospital => {
        const marker = window.L.marker(hospital.coordinates).addTo(mapInstance);
        marker.bindPopup(`
          <div style="font-family: sans-serif;">
            <strong>${hospital.name}</strong><br/>
            <span style="color: #10b981;">${hospital.availability}</span><br/>
            <span style="font-size: 12px;">${hospital.distance} • ${hospital.waitTime} wait</span>
          </div>
        `);
      });

      // Add user location and route to test hospital
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const userCoords = [pos.coords.latitude, pos.coords.longitude];
        const targetCoords = [26.7776, 80.9854]; // Test hospital

        // User marker
        window.L.marker(userCoords, { title: "You are here" })
          .addTo(mapInstance)
          .bindPopup("Your Location")
          .openPopup();

        // Target marker
        window.L.marker(targetCoords, { title: "Target Hospital" })
          .addTo(mapInstance)
          .bindPopup("Target Hospital");

        // --- Fetch route from OSRM ---
        const url = `https://router.project-osrm.org/route/v1/driving/${userCoords[1]},${userCoords[0]};${targetCoords[1]},${targetCoords[0]}?overview=full&geometries=geojson`;
        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const distanceKm = (route.distance / 1000).toFixed(2);

            // Draw actual driving route
            const routeLine = window.L.geoJSON(route.geometry, {
              style: { color: "blue", weight: 4 }
            }).addTo(mapInstance);

            // Fit to route
            mapInstance.fitBounds(routeLine.getBounds());

            // Popup with driving distance
            routeLine.bindPopup(`<b>Driving Distance: ${distanceKm} km</b>`).openPopup();
          }
        } catch (err) {
          console.error("Error fetching route:", err);
        }
      });

      setMap(mapInstance);
    };

    // Load Leaflet script
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = initMap;
    } else {
      initMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesCategory = selectedCategory === 'All' || hospital.category === selectedCategory;
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      
      <div className="w-96 bg-white shadow-lg overflow-y-auto">
        
        <div className="bg-gradient-to-r from-red-400 to-pink-300 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">HealthMate</h1>
          
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search hospitals near me..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
        </div>

        
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
      </div>

      
      <div className="flex-1 relative">
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg z-[1000] flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-400" />
          <span className="font-semibold text-gray-700">Hospital Locator</span>
        </div>
        
        <div id="map" className="w-full h-full"></div>

        
        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg z-[1000]">
          <h3 className="font-semibold text-gray-700 mb-2 text-sm">Legend</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Available Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">Hospital Location</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Route / Driving Distance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalLocator;

  */}