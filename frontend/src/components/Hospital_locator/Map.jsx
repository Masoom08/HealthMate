import React, { useState, useEffect } from 'react';
import { MapPin,  } from 'lucide-react';
// Leaflet CSS (must be included)
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
document.head.appendChild(style);

// Import Leaflet
const L = window.L || {};

const Filter = () => {
    const [map, setMap] = useState(null);
  
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
    
    return(
        <div className="flex-1 relative">
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg z-[1000] flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-400" />
          <span className="font-semibold text-gray-700">Hospital Locator</span>
        </div>
        
        <div id="map" className="w-full h-full"></div>

        {/* Legend */}
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
    );
}
export default Filter;