import React from 'react'
import Header from '../../utils/header';
import Welcome from '../../components/Login_Signup/Welcome';
import ForgetPasswordForm from '../../components/Login_Signup/ForgetPasswordForm';

const ForgetPassword = () => {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF7F5'}}>
      <Header hideLogin={true}/>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left side - Form with specific positioning */}
        <div className="w-full md:w-1/2 flex px-8 py-8" style={{ paddingLeft: '119px', paddingTop: '125px' }}>
          <ForgetPasswordForm />
        </div>
        
        {/* Right side - Welcome component */}
        <div className="hidden md:block w-1/2 relative overflow-hidden" style={{backgroundColor: '#FF7B6E'}}>
          <Welcome/>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;