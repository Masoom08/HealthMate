import { useState } from 'react';
import { Link } from "react-router-dom";

// ForgetPasswordForm Component
const ForgetPasswordForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleSubmit = () => {
    console.log('Password reset requested for:', emailOrPhone);
  };

  const handleReset = () => {
    setEmailOrPhone('');
  };

  return (
    <div className="w-full" style={{ maxWidth: '375px', height: '444px', display: 'flex', flexDirection: 'column' }}>
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Forget Password</h1>
      <p className="text-gray-900 mb-12 font-normal">Enter email or phone number</p>

      <div className="flex flex-col" style={{ flex: 1 }}>
        <div className="mb-8">
          <label className="block text-sm font-normal text-gray-900 mb-3">
            Email or phone number
          </label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-0 py-2 border-0 border-b-2 border-gray-900 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
            placeholder=""
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-black py-3 rounded-xl font-semibold transition-all shadow-sm mb-auto"
          style={{
            background: 'linear-gradient(to right, #FF6B3D, #FF7B6E)',
            transition: 'opacity 0.3s',
            height: '48px'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Submit
        </button>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-normal text-gray-900">
            Forgot your password?
          </span>
          <Link
            to="/reset-password"
            className="text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            style={{backgroundColor: '#FF7B6E', height: '40px'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B5E'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FF7B6E'}
          >
            Reset
          </Link>
          
          
        </div>
        
      </div>
    </div>
  );
};


export default ForgetPasswordForm;
