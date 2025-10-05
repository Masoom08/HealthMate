import React,{useStae} from 'react';
import {Phone} from 'lucide-react';

const Emergency = () => {
    return (
      <section className="px-8 py-8 text-white " 
            style={{ backgroundColor: '#FF7B6E' }}
        >
        <div className="justify-center text-center max-w-7xl">
          
        <h2 className="text-3xl md:text-3xl font-bold text-white mb-2">
          Need Help ?
        </h2>
        <p className="text-white text-sm md:text-base mb-12 opacity-90">
          If you’re experiencing a mental health crisis, don’t wait. Reach out for support now.
        </p>

        <button className="mx-auto flex items-center text-white bg-white/20 gap-2 px-4 py-2 rounded-xl border-2 border-white/40 font-medium">
            <span>
                <Phone size={20} stroke="white" />
            </span>
            <span >
                Crisis Helpline 24/7
            </span>
        </button>

        </div>
        
      </section>
    );
};

export default Emergency;