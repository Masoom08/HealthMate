import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Direct images as cards
import sleep from "../../assets/img/mental/sleep.svg";
import meditation from "../../assets/img/mental/meditation.svg";
import music from "../../assets/img/mental/music.svg";
import emergency from "../../assets/img/mental/emergency.svg";
import breathe from "../../assets/img/mental/breathe.svg";

const features = [meditation, emergency, breathe, music, sleep];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < features.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      className="relative py-16 px-8"
      style={{
        background: `linear-gradient(to bottom, #80361F 0%, #000000 70%)`,
      }}
    >
      
      <div className="relative max-w-7xl mx-auto text-left ">
        <h2 className="text-white font-bold mb-2">Mind  Peace Features</h2>
        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Card Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 260}px)` }}
          >
            {features.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl w-[250px] h-[150px] mr-4 shrink-0 shadow-lg shadow-gray-800/30 overflow-hidden"
              >
                <img
                  src={img}
                  alt={`feature-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Fade + Button */}
          {currentIndex < features.length - 4 && (
            <div className="absolute top-0 right-0 h-full w-[60px] bg-gradient-to-l from-[#000000] via-[#000000]/70 to-transparent flex items-center justify-end">
              <button
                onClick={handleNext}
                className="bg-white rounded-full shadow p-1 mr-1 hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Left Fade + Button */}
          {currentIndex > 0 && (
            <div className="absolute top-0 left-0 h-full w-[60px] bg-gradient-to-r from-[#000000] via-[#000000]/70 to-transparent flex items-center justify-start">
              <button
                onClick={handlePrev}
                className="bg-white rounded-full shadow p-1 ml-1 hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
