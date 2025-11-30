import React from 'react';

const WorkoutPlans = () => {
  return (
    <section 
      className="relative py-16 px-8"
      style={{
        background: `
          linear-gradient(to bottom, #80361F 0%, #473354 100%)
        `
      }}
    >

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Workout Plans
        </h2>
        <p className="text-white text-sm md:text-base mb-12 opacity-90">
          Personalized fitness routines to build strength, flexibility, and endurance
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl h-[500px] shadow-lg shadow-gray-800/40"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;
