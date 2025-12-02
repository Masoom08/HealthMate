import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // ---- SIGNUP API CALL ----
  const handleSignup = async () => {
    if (!fullName || !email || !password || !phone || !gender) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("https://healthmate-evbq.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          phone,
          gender
        }),
      });

      const data = await response.json();
      console.log("Signup Response:", data);

      if (response.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-1">Sign Up</h1>
      <p className="text-gray-700 mb-8 font-medium py-3">Enter your account details</p>

      <div className="space-y-6">
        
        {/* Full Name */}
        <div>
          <label className="block text-md font-inter text-gray-800 mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-0 py-1 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-md font-inter text-gray-800 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-0 py-1 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-md font-inter text-gray-800 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-0 py-1 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-md font-inter text-gray-800 mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-0 py-1 border-0 border-b-2 border-gray-400 focus:border-gray-700 bg-transparent text-gray-900"
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-md font-inter text-gray-800 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-1 pr-10 border-0 border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none bg-transparent text-gray-900"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-2 p-1 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={handleSignup}
          className="w-full text-black py-3 rounded-lg font-semibold shadow-sm"
          style={{
            background: "linear-gradient(to right, #FF6B3D, #FF7B6E)",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Sign Up
        </button>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          style={{ backgroundColor: "#FFF7F5" }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78..."></path>
          </svg>
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Login Link */}
        <div className="text-center flex items-center justify-center space-x-2">
          <span className="text-gray-700 font-medium">Already have an account?</span>

          <Link
            to="/login"
            className="text-white px-5 py-2 rounded-lg font-inter transition-colors"
            style={{
              background: "linear-gradient(to bottom, #FF6B3D, #FF7B6E)",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
