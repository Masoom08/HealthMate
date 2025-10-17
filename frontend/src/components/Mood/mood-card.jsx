import React, { useEffect, useState } from "react";

const MoodCard = ({ selectedMood }) => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moodEntries") || "[]");
    setMoods(stored);
  }, []);

  const filteredMoods =
    selectedMood === "All"
      ? moods
      : moods.filter((item) => item.mood === selectedMood);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {selectedMood === "All"
          ? "My Journal Entries"
          : `${selectedMood} Mood Entries`}
      </h2>
      <p className="text-gray-600 mb-6">
        Reflect on your moods and thoughts here.
      </p>

      {filteredMoods.length === 0 ? (
        <p className="text-gray-600">No journal entries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMoods.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded-full font-medium mb-3 ${item.moodColor}`}
                >
                  {item.mood}
                </span>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodCard;
