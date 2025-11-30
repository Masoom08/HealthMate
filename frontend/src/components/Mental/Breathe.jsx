import React, { useState } from "react";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="px-8 py-8 bg-white ml-12 mr-12 mt-8">
    <div className="flex items-center justify-between bg-white shadow-lg rounded-xl p-8 max-w-5xl mx-auto">
      {/* Left Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Breathing Exercise</h2>
        <p className="text-gray-600">Follow the circle with your breath</p>
        <ul className="list-disc pl-5 text-gray-700 text-sm">
          <li>Inhale when it expands</li>
          <li>Exhale when it contracts</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setIsActive(true)}
            className="px-4 py-2 rounded-lg bg-[#8A5EA8] text-white hover:bg-purple-700 transition"
          >
            Start Exercise
          </button>
          <button
            onClick={() => setIsActive(false)}
            className="px-4 py-2 rounded-lg bg-[#FF7B6E] text-white hover:bg-red-500 transition"
          >
            Stop
          </button>
        </div>
      </div>

      {/* Right Section (Circle) */}
<div className="flex items-center justify-center">
  <div
    className={`w-40 h-40 border-2 border-[#8A5EA8] rounded-full flex items-center justify-center text-lg font-semibold text-gray-800 transform
      ${isActive ? "animate-breath" : ""}`}
  >
    Breathe
  </div>
</div>

    </div>
    </section>
  );
};

export default BreathingExercise;
