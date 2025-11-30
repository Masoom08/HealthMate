import { useState } from 'react';
import Header from '../../utils/header';
import Welcome from '../../components/Login_Signup/Welcome';

// PasswordResetSuccessForm Component
const PasswordResetSuccessForm = () => {
  const handleLogin = () => {
    console.log('Redirecting to login...');
    // Add your navigation logic here
    // e.g., navigate('/login')
  };

  return (
    <div className="w-full" style={{ maxWidth: '415px' }}>
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Password Reset</h1>
      <p className="text-gray-900 mb-8 font-normal">Password has been reset successfully!</p>

      <a
          href="/login"
          className="w-full text-black py-3 rounded-xl font-semibold transition-all shadow-sm flex items-center justify-center"
          style={{
            background: 'linear-gradient(to right, #FF6B3D, #FF7B6E)',
            transition: 'opacity 0.3s',
            height: '48px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Login
        </a>
    </div>
  );
};

// Main PasswordResetSuccess Page Component
const PasswordResetSuccess = () => {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF7F5'}}>
      <Header hideLogin={true}/>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left side - Form with specific positioning */}
        <div className="w-full md:w-1/2 flex px-8 py-8" style={{ paddingLeft: '119px', paddingTop: '125px' }}>
          <PasswordResetSuccessForm />
        </div>
        
        {/* Right side - Welcome component */}
        <div className="hidden md:block w-1/2 relative overflow-hidden" style={{backgroundColor: '#FF7B6E'}}>
          <Welcome/>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;