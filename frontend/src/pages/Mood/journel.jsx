import {React} from 'react';
import Header from "../../components/Mood/header";
import Sidebar from "../../components/Mood/sidebar";
import MainContent from "../../components/Mood/main-content";

const Journel = () => {
    return (
      <div className="flex h-screen font-inter">
        <Sidebar/>

        <main className="flex-1 bg-[#FFEAEA] relative overflow-y-auto">
          <Header/>
          <MainContent/>
        </main>
      </div>
    );
};


export default Journel;