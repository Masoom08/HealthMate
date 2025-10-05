import React from "react";
import Sidebar from "../../components/Mood/sidebar";
import Header from "../../components/Mood/header";
import MoodCard from "../../components/Mood/mood";


const MoodJournal = () => {
  return (
    <div className="flex h-screen font-inter">
      <Sidebar/>

      <main className="flex-1 bg-[#FFEAEA] relative overflow-y-auto">
        <Header/>
        <MoodCard/>
      </main>
    </div>
  );
};

export default MoodJournal;
