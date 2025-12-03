import React, { useState, useEffect, useRef } from "react";

const BreathingExercise = () => {
  const [phase, setPhase] = useState("Ready");
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startCycle = () => {
    setIsActive(true);
    setPhase("Inhale");
    setCounter(4);
  };

  const stopCycle = () => {
    setIsActive(false);
    setPhase("Ready");
    setCounter(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isActive) return;

    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) return prev - 1;

        // Move to next breathing phase
        if (phase === "Inhale") {
          setPhase("Hold");
          return 7;
        }
        if (phase === "Hold") {
          setPhase("Exhale");
          return 8;
        }
        if (phase === "Exhale") {
          setPhase("Inhale");
          return 4;
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isActive, phase]);

  return (
    <section className="px-8 py-8 bg-white ml-12 mr-12 mt-8">
      <div className="flex items-center justify-between bg-white shadow-lg rounded-xl p-8 max-w-5xl mx-auto">
        
        {/* LEFT SECTION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Breathing Exercise</h2>
          <p className="text-gray-600">Follow the 4-7-8 breathing method</p>

          <ul className="list-disc pl-5 text-gray-700 text-sm">
            <li>Inhale for 4 seconds</li>
            <li>Hold for 7 seconds</li>
            <li>Exhale for 8 seconds</li>
          </ul>

          <div className="flex gap-4">
            <button
              onClick={startCycle}
              className="px-4 py-2 rounded-lg bg-[#8A5EA8] text-white hover:bg-purple-700 transition"
            >
              Start Exercise
            </button>
            <button
              onClick={stopCycle}
              className="px-4 py-2 rounded-lg bg-[#FF7B6E] text-white hover:bg-red-500 transition"
            >
              Stop
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - Number Counter */}
        <div className="flex items-center justify-center">
          <div
            className="w-40 h-40 border-4 border-[#8A5EA8] rounded-full flex flex-col items-center justify-center text-lg font-semibold text-gray-800"
          >
            <p className="text-xl font-bold">{phase}</p>
            <p className="text-4xl text-[#8A5EA8]">{counter}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BreathingExercise;
