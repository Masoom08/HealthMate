import React,{useStae} from 'react';


const Stats = () => {
    return (
      <section className="px-8 py-20 text-white -[600px]" 
            style={{ backgroundColor: '#FF7B6E' }}
        >
       <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* 24/7 Support */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-xl font-semibold">Support Available</div>
          </div>

          {/* 15+ Emergency Services */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">15+</div>
            <div className="text-xl font-semibold">Emergency Services</div>
          </div>

          {/* 100% Confidential */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-xl font-semibold">Confidential</div>
          </div>

        </div>
      </div>
      </section>
    );
};

export default Stats;