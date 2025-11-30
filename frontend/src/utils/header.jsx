import { NavLink } from "react-router-dom";

const Header = ({ scrollToService,hideLogin  }) => {
  return (
    <nav
      className="font-inter flex items-center justify-between px-8 py-0"
      style={{ backgroundColor: "#FFF7F5" }}
    >
      <div className="w-1/2 text-2xl font-bold text-gray-900">HealthMate</div>

      <div className="w-1/2 items-start justify-start px-24 py-10 hidden md:flex space-x-10">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? "text-[#FF7B6E]" : "text-gray-900 hover:text-[#FF7B6E]"
            }`
          }
        >
          Home
        </NavLink>

        <button
           onClick={scrollToService}
          className="font-medium text-gray-900 hover:text-[#FF7B6E] transition-colors"
        >
          Services
        </button>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? "text-[#FF7B6E]" : "text-gray-900 hover:text-[#FF7B6E]"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? "text-[#FF7B6E]" : "text-gray-900 hover:text-[#FF7B6E]"
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive ? "text-[#FF7B6E]" : "text-gray-900 hover:text-[#FF7B6E]"
            }`
          }
        >
          Admin
        </NavLink>
      </div>

      {!hideLogin && (
        <NavLink
          to="/login"
          className="text-white px-6 py-3 items-center justify-center w-[165px] h-[50px] text-[18px] rounded-full font-medium transition-colors"
          style={{
            background: "linear-gradient(to bottom, #FF6B3D 0%, #FF7B6E 100%)",
          }}
        >
          Login/Register
        </NavLink>
      )}
    </nav>
  );
};

export default Header;