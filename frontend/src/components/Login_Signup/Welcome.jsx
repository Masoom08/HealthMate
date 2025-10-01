import React from 'react';

const Welcome = ()=> {
    return (
        <div className="h-full flex items-start justify-start text-white p-16 pt-24 relative z-10">
            <div className="text-left">
              <h2 className="text-6xl font-extrabold mb-4 leading-tight">
                Welcome to<br />
                HealthMate
              </h2>
              <p className="text-lg font-medium text-white/95 mt-6">
                Login to access your account
              </p>
            <div className="flex justify-center mt-8">
              <img 
                src="/white-ste.png"   // make sure your image is in public folder
                alt="HealthMate Illustration"
                className="w-64 h-auto"
              />
            </div>
            </div>
        </div>
    );
};
export default Welcome;