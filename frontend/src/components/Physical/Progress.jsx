import React, { useState ,forwardRef } from 'react';
import active from '../../assets/img/physical/active_min.png';
import calorie from '../../assets/img/physical/calorie.png';
import glass from '../../assets/img/physical/glasses.png';
import steps from '../../assets/img/physical/steps.png';

const Service = forwardRef((props, ref)=> {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
        setActiveCard(activeCard === index ? null : index);
  };

    const progressData = [
    {
      number: 7245,
      label: 'Steps',
      img: steps,
      goal: 'Goal : 10,000 Steps',
      progress: 7245 / 10000 * 100
    },
    {
      number: 340,
      label: 'Calories',
      img: calorie,
      goal: 'Goal : 500 Calories',
      progress: 340 / 500 * 100
    },
    {
      number: 45,
      label: 'Active Minutes',
      img: active,
      goal: 'Goal : 60 Minutes',
      progress: 45 / 60 * 100
    },
    {
      number: 7,
      label: 'Glasses',
      img: glass,
      goal: 'Goal : 10 Glasses',
      progress: 7 / 10 * 100
    }
  ];

  return (
    <section ref={ref} className="px-8 py-8 bg-white ml-56 mr-56 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-24 ">
          <p 
            className="font-bold mb-2" 
            style={{ color: '#FF7B6E',fontSize:'14px', letterSpacing: '0.2px' }}
          >Practice Advice</p>
          <h2 className="text-4xl font-bold text-black mt-4 mb-4" style={{letterSpacing: '0.2px'}}>See Your Progress</h2>
        </div>
        
        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {progressData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white shadow-lg p-6 flex flex-col items-center cursor-pointer transform hover:scale-105 border-gray-100 justify-between h-[320px]"
            >
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#FF7B6E' }}>
                {item.number.toLocaleString()}
              </h3>
              <p className="text-black text-lg mb-4">{item.label}</p>
                <img 
                src={item.img} 
                alt={item.label} 
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="w-full h-3 bg-gray-200 rounded-full mb-3">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>                
              <p className="text-black text-sm">{item.goal}</p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
});

export default Service;