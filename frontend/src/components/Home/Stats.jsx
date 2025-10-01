import React,{useStae} from 'react';

const Stats = () => {
    return (
      <section className="px-8 py-20 text-white w-[1600px] h-[600px]" 
            style={{ backgroundColor: '#FF7B6E' }}
        >
        <div className="max-w-7xl mx-auto mt-36">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div className="space-y-4">
              <div className="text-7xl font-bold">50K+</div>
              <div className="text-4xl font-bold">Active Users</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">1000+</div>
              <div className="text-4xl font-bold">Health Conditions</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">24/7</div>
              <div className="text-4xl font-bold">Support Available</div>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-bold">99.9%</div>
              <div className="text-4xl font-bold">AI Accuracy</div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Stats;