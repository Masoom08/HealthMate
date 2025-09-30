// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-inter flex items-center justify-between px-8 py-0" style={{backgroundColor: '#FFF7F5'}}>
      <div className="w-1/2  text-2xl font-bold text-gray-900">HealthMate</div>
      
      <div className="w-1/2  items-start justify-start px-24 py-10 hidden md:flex space-x-10"> 
        <Link 
          to="/" 
          className="font-medium transition-colors"
          style={{color: '#FF7B6E'}}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-gray-900 font-medium transition-colors hover:text-opacity-100"
          onMouseEnter={(e) => e.target.style.color = '#FF7B6E'}
          onMouseLeave={(e) => e.target.style.color = '#1F2937'}
        >
          About
        </Link>
        <Link 
          to="/tests" 
          className="text-gray-900 font-medium transition-colors hover:text-opacity-100"
          onMouseEnter={(e) => e.target.style.color = '#FF7B6E'}
          onMouseLeave={(e) => e.target.style.color = '#1F2937'}
        >
          Tests
        </Link>
        <Link 
          to="/contact" 
          className="text-gray-900 font-medium transition-colors hover:text-opacity-100"
          onMouseEnter={(e) => e.target.style.color = '#FF7B6E'}
          onMouseLeave={(e) => e.target.style.color = '#1F2937'}
        >
          Contact Us
        </Link>
        <Link 
          to="/admin" 
          className="text-gray-900 font-medium transition-colors hover:text-opacity-100"
          onMouseEnter={(e) => e.target.style.color = '#FF7B6E'}
          onMouseLeave={(e) => e.target.style.color = '#1F2937'}
        >
          Admin
        </Link>
      </div>

      <Link 
        to="/login"
        className="text-white px-6 py-3 items-center justify-center w-[165px] h-[50px] text-[18px]  rounded-full font-medium  transition-colors"
        style={{
          background: 'linear-gradient(to bottom, #FF6B3D 0%, #FF7B6E 100%)'
        }}
      >
        Login/Register
      </Link>
    </nav>
  );
};

export default Navbar;