import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../../utils/header';
import Welcome from '../../components/Login_Signup/Welcome';



const NewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSave = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password saved:', password);
    // Add your password save logic here
  };

  return (
    <div className="w-full" style={{ maxWidth: '415px' }}>
      <h1 className="text-5xl font-bold text-gray-900 mb-2">Reset Password</h1>
      <p className="text-gray-900 mb-12 font-normal">Enter your new password</p>

      <div className="mb-8">
        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-normal text-gray-900 mb-3">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-2 pr-10 border-0 border-b-2 border-gray-900 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
              placeholder=""
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-2 p-1 text-gray-900 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-8">
          <label className="block text-sm font-normal text-gray-900 mb-3">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-0 py-2 pr-10 border-0 border-b-2 border-gray-900 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
              placeholder=""
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-0 top-2 p-1 text-gray-900 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Save Button */}
        <a
          href="/password-reset-success"
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
          Save
        </a>
      </div>
    </div>
  );
};

// Main NewPassword Page Component
const NewPassword = () => {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF7F5'}}>
      <Header hideLogin={true}/>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left side - Form with specific positioning */}
        <div className="w-full md:w-1/2 flex px-8 py-8" style={{ paddingLeft: '119px', paddingTop: '125px' }}>
          <NewPasswordForm />
        </div>
        
        {/* Right side - Welcome component */}
        <div className="hidden md:block w-1/2 relative overflow-hidden" style={{backgroundColor: '#FF7B6E'}}>
          <Welcome/>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;