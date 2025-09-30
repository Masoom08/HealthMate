// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6" style={{backgroundColor: '#FFEDE9'}}>
      <div className="text-2xl font-bold text-gray-900">HealthMate</div>
      
      <div className="hidden md:flex items-center space-x-10">
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
        className="text-white px-6 py-2 rounded-full font-medium transition-colors"
        style={{backgroundColor: '#FF7B6E'}}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B5E'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#FF7B6E'}
      >
        Login/Register
      </Link>
    </nav>
  );
};

export default Navbar;