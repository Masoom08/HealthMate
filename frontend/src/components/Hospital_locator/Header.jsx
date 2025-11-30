import React, { useState, useEffect } from 'react';
import { Search} from 'lucide-react';

// Leaflet CSS (must be included)
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
document.head.appendChild(style);

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    return(
        <div className="bg-gradient-to-r from-red-400 to-pink-300 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">HealthMate</h1>
          
          {/* Search Bar */}
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
    );
}
export default Header;