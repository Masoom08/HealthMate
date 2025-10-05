import React, { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react";

const Profile = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);

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

  const handleSignOut = () => {
    console.log("Signing out...");
    // Add your sign-out logic here
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger (can be custom or default circle) */}
      <div onClick={handleToggle} className="cursor-pointer">
        {trigger ? (
          trigger
        ) : (
          <div className="w-[45px] h-[45px] bg-[#8c8c8c] rounded-full flex items-center justify-center hover:bg-[#a3a3a3] transition">
            <User color="black" size={24} strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* User info */}
          <div className="flex items-center gap-3 p-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={22} color="black" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Masoom Singh
              </p>
              <p className="text-xs text-gray-600">masoomsingh@gmail.com</p>
            </div>
          </div>

          <hr />

          {/* Sign out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full p-4 hover:bg-gray-100 text-gray-800 text-sm font-medium transition"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <LogOut size={18} />
            </div>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
