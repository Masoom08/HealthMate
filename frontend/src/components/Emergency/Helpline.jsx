import React,{useStae} from 'react';

const Helpline = () => {
    return (
      <section className="px-8 py-20 text-white -[600px]" 
            style={{ backgroundColor: '#FF7B6E' }}
        >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white text-center md:text-left">
          Life Threatening Emergency
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="w-full bg-white/20 p-10 rounded-lg shadow-md text-left border border-white/30">
            <div className="text-4xl md:text-5xl font-extrabold text-white">108</div>
            <div className="text-xl md:text-2xl font-bold text-white mt-3 leading-tight">
              Emergency <br /> Ambulance
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white/20 p-10 rounded-lg shadow-md text-left border border-white/30">
            <div className="text-4xl md:text-5xl font-extrabold text-white">102</div>
            <div className="text-xl md:text-2xl font-bold text-white mt-3 leading-tight">
              Medical <br /> Emergency
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white/20 p-10 rounded-lg shadow-md text-left border border-white/30">
            <div className="text-4xl md:text-5xl font-extrabold text-white">100</div>
            <div className="text-xl md:text-2xl font-bold text-white mt-3 leading-tight">
              Police <br /> Emergency
            </div>
          </div>

        </div>
      </div>
      </section>
    );
};

export default Helpline;