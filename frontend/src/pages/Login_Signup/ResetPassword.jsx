import { useState } from 'react';
import Header from '../../utils/header';
import Welcome from '../../components/Login_Signup/Welcome';
import { Link } from "react-router-dom";


// ResetPasswordForm Component
const ResetPasswordForm = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleResendOtp = () => {
    console.log('Resending OTP...');
    // Add your resend OTP logic here
  };

  const handleVerifyAndProceed = () => {
    const otpValue = otp.join('');
    console.log('Verifying OTP:', otpValue);
    // Add your verification logic here
  };

  return (
    <div className="w-full" style={{ maxWidth: '415px' }}>
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Reset Password</h1>
      <p className="text-gray-900 mb-12 font-normal">We have sent you an OTP</p>

      <div className="mb-8">
        {/* OTP Input Fields */}
        <div className="flex gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-14 h-14 text-center text-2xl font-semibold border-0 border-b-2 border-gray-900 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <div className="mb-8">
          <span className="text-gray-400 text-sm">Don't Receive the OTP ? </span>
          <button
            type="button"
            onClick={handleResendOtp}
            className="text-gray-900 text-sm font-semibold underline"
          >
            Resend OTP
          </button>
        </div>

        {/* Verify Button */}
      <a
          href="/new-password"
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
          Verify and Proceed
        </a>
      </div>
    </div>
  );
};

// Main ResetPassword Page Component
const ResetPassword = () => {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF7F5'}}>
      <Header hideLogin={true}/>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left side - Form with specific positioning */}
        <div className="w-full md:w-1/2 flex px-8 py-8" style={{ paddingLeft: '119px', paddingTop: '125px' }}>
          <ResetPasswordForm />
        </div>
        
        {/* Right side - Welcome component */}
        <div className="hidden md:block w-1/2 relative overflow-hidden" style={{backgroundColor: '#FF7B6E'}}>
          <Welcome/>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;