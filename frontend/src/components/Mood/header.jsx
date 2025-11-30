
import { Plus} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("journel");
  };
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">HealthMate</h1>
        <button className="bg-[#FF6B6B] text-white rounded-full p-3 shadow-lg hover:bg-[#ff5252] transition"
          onClick={handleClick}
        >

            <Plus size={20} />
        </button>
    </header>
  );
};

export default Header;