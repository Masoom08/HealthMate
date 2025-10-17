import React, { useState } from "react";
import Sidebar from "../../components/Mood/sidebar";
import Header from "../../components/Mood/header";
import MoodCard from "../../components/Mood/mood-card";

const MoodJournal = () => {
  const [selectedMood, setSelectedMood] = useState("All"); // default

  return (
    <div className="flex h-screen font-inter">
      <Sidebar selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
      <main className="flex-1 bg-[#FFEAEA] relative overflow-y-auto">
        <Header />
        <MoodCard selectedMood={selectedMood} />
      </main>
    </div>
  );
};

export default MoodJournal;
