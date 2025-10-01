import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import Login from './pages/Login_Signup/Login';
import SignUp from './pages/Login_Signup/Signup';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import Physical from './pages/Physical/Physical';

function App() {
  return (
    <Router>
     {/* Add Toaster here so it works globally */}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/physical" element={<Physical/>}/>
      </Routes>
    </Router>
  );
}
export default App;