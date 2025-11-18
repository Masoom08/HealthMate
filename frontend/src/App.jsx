import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import Login from './pages/Login_Signup/Login';
import SignUp from './pages/Login_Signup/Signup';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import Physical from './pages/Physical/Physical';
import HospitalLocator from './pages/Hospital_locator/Hospital_locator';
import ForgetPassword from './pages/Login_Signup/ForgetPassword';
import ResetPassword from './pages/Login_Signup/ResetPassword';
import NewPassword from './pages/Login_Signup/NewPassword';
import PasswordResetSuccess from './pages/Login_Signup/PasswordResetSuccess';
import Mental from './pages/Mental/Mental';
import Mood from './pages/Mood/mood';
import Journel from './pages/Mood/journel';
import Emergency from './pages/Emergency/Emergency';

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
        <Route path="/hospital-locator" element={<HospitalLocator />} />
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/new-password" element={<NewPassword/>}/>
        <Route path="/password-reset-success" element={<PasswordResetSuccess/>}/>
        <Route path="/mental" element={<Mental/>}/>
        <Route path="/mood"element={<Mood/>}/>
        <Route path="mood/journel"element={<Journel/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
      </Routes>
    </Router>
  );
}
export default App;