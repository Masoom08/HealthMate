import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // ---------------- LOGIN API ----------------
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("https://healthmate-evbq.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
        alert("Login successful!");

        // Save token if needed
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        navigate("/"); // redirect where you want
      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-1">Login</h1>
      <p className="text-gray-700 mb-8 font-medium py-3">Enter your account details</p>

      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-md font-semibold text-gray-800 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-0 py-2 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <label className="block text-md font-semibold text-gray-800 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-2 pr-10 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-2 p-1 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full text-black py-3 rounded-lg font-semibold shadow-sm"
          style={{
            background: 'linear-gradient(to right, #FF6B3D, #FF7B6E)',
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Login
        </button>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="/forget-password" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          style={{ backgroundColor: '#FFF7F5' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78..."></path>
          </svg>
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <div className="text-center flex items-center justify-center space-x-2">
          <span className="text-gray-700 font-medium">Don't have an account?</span>

          <Link
            to="/signup"
            className="text-white px-5 py-2 rounded-lg font-inter"
            style={{
              background: 'linear-gradient(to bottom, #FF6B3D, #FF7B6E)',
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
