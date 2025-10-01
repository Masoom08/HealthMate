import React, { useState } from "react";
import { Search } from 'lucide-react';
const SearchHeader = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <header className="font-inter bg-[#80361F] flex items-center justify-between px-8 py-8">
      {/* Logo */}
      <div className="w-1/10 text-white font-bold text-2xl">HealthMate</div>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex flex-1 max-w-8xl mx-4 items-center bg-[#8C8C8C] bg-opacity-55 rounded-full px-4 py-2"
      >
        <Search color="white" size={18} className="mr-2"/>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="font-medium flex-1 bg-transparent text-white placeholder-white outline-none"
        />
        
      </form>
    </header>
  );
};

export default SearchHeader;
