import React, { useState, useRef, useEffect } from "react";
import { User, Search, LogOut } from "lucide-react";
import Profile from "./profile";

const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="font-inter bg-[#80361F] relative flex items-center justify-between px-8 py-4">
      {/* Left: Logo + Search */}
      <div className="flex items-center flex-1 gap-8">
        <div className="text-white font-bold text-2xl whitespace-nowrap">
          HealthMate
        </div>

        <form
          onSubmit={handleSearch}
          className="flex flex-1 items-center bg-[#8C8C8C] bg-opacity-55 rounded-full px-4 py-2"
        >
          <Search color="white" size={18} className="mr-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="font-medium flex-1 bg-transparent text-white placeholder-white outline-none"
          />
        </form>
      </div>

      <Profile/>
    </header>
  );
};

export default SearchHeader;
