import React, { useState, useRef, useEffect } from "react";
import { User, Search } from "lucide-react";
import Profile from "./profile";

const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch search results
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://healthmate-evbq.onrender.com/mental/search?q=${encodeURIComponent(
            query
          )}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setResults(data.results?.items || []);
        setOpen(true);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    fetchResults();

    return () => controller.abort();
  }, [query]);

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
      <div className="flex items-center flex-1 gap-8 relative">
        <div className="text-white font-bold text-2xl whitespace-nowrap">
          HealthMate
        </div>

        <div className="flex-1 relative">
          <div className="flex items-center bg-[#8C8C8C] bg-opacity-55 rounded-full px-4 py-2">
            <Search color="white" size={18} className="mr-2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search symptoms, meditation, music..."
              className="font-medium flex-1 bg-transparent text-white placeholder-white outline-none"
            />
          </div>

          {/* Dropdown */}
          {open && results.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
            >
              {results.map((item, idx) => {
                const title = item.snippet?.title || item.title || "No Title";
                const videoId = item.id?.videoId || item.id;
                return (
                  <a
                    key={idx}
                    href={videoId ? `https://www.youtube.com/watch?v=${videoId}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {item.snippet?.thumbnails?.default?.url && (
                      <img
                        src={item.snippet.thumbnails.default.url}
                        alt={title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <span className="text-gray-800">{title}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Profile />
    </header>
  );
};

export default SearchHeader;
