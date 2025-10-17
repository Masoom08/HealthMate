import React from "react";
import { User, Settings, Search } from "lucide-react";
import excitedImg from "../../assets/img/mood/excited.png";
import happyImg from "../../assets/img/mood/happy.png";
import averageImg from "../../assets/img/mood/average.png";
import sadImg from "../../assets/img/mood/sad.png";
import sickImg from "../../assets/img/mood/sick.png";
import upsetImg from "../../assets/img/mood/sad.png";
import anxiousImg from "../../assets/img/mood/anxious.png";

const categories = [
  { name: "All", icon: null }, // new "All" option
  { name: "Excited", icon: excitedImg },
  { name: "Happy", icon: happyImg },
  { name: "Average", icon: averageImg },
  { name: "Sad", icon: sadImg },
  { name: "Sick", icon: sickImg },
  { name: "Upset", icon: upsetImg },
  { name: "Anxious", icon: anxiousImg },
];

const Sidebar = ({ selectedMood, setSelectedMood }) => {
  return (
    <aside className="w-64 bg-gradient-to-b from-[#80361F] to-[#473354] text-white flex flex-col justify-between">
      <div>
        <div className="px-6 py-6 text-xl font-bold">Menu</div>

        <div className="px-6">
          <h2 className="text-lg font-semibold mb-4">Mood Journal</h2>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-md bg-[#ffffff22] text-white placeholder-gray-300 outline-none"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm uppercase mb-2 tracking-wide text-gray-200">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedMood(cat.name)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    selectedMood === cat.name
                      ? "bg-white/30"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {cat.icon && (
                    <img src={cat.icon} alt={cat.name} className="w-5 h-5" />
                  )}
                  <span className="text-sm">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="px-6 py-4 border-t border-white/20 flex items-center justify-between">
        <button className="flex items-center gap-2 bg-[#ffffff22] py-2 px-3 rounded-md hover:bg-[#ffffff33] transition w-full justify-between">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>User Profile</span>
          </div>
          <Settings size={16} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
