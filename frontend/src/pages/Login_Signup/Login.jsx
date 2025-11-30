import { useState } from 'react';
import Header from '../../utils/header';
import LoginForm from '../../components/Login_Signup/Login';
import Welcome from '../../components/Login_Signup/Welcome';

const Login = () => {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF7F5'}}>
      <Header hideLogin={true}/>

      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-8">
          <LoginForm />
        </div>
        <div className="hidden md:block w-1/2 relative overflow-hidden" style={{backgroundColor: '#FF7B6E'}}>
          <Welcome/>
        </div>
      </div>
    </div>
  );
};

export default Login;