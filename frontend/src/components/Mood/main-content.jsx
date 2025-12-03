import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WordLikeEditor from "./writer";
import excitedImg from "../../assets/img/mood/excited.png";
import happyImg from "../../assets/img/mood/happy.png";
import averageImg from "../../assets/img/mood/average.png";
import sadImg from "../../assets/img/mood/sad.png";
import sickImg from "../../assets/img/mood/sick.png";
import upsetImg from "../../assets/img/mood/sad.png";
import anxiousImg from "../../assets/img/mood/anxious.png";

// Use same categories
const categories = [
  { name: "Happy", icon: happyImg },
  { name: "Excited", icon: excitedImg },
  { name: "Average", icon: averageImg },
  { name: "Sad", icon: sadImg },
  { name: "Sick", icon: sickImg },
  { name: "Upset", icon: upsetImg },
  { name: "Anxious", icon: anxiousImg },
];

export default function MoodMainContent() {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("Happy");
  const navigate = useNavigate();

  const extractLines = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const title = lines[0] || "Untitled Entry";
    const description = lines.slice(1).join(" ") || "";
    return { title, description };
  };

  // const handlePost = () => {
  //   if (!content.trim()) {
  //     alert("Please write something before posting.");
  //     return;
  //   }

  //   const { title, description } = extractLines(content);
  //   const stored = JSON.parse(localStorage.getItem("moodEntries") || "[]");

  //   const newEntry = {
  //     title,
  //     description,
  //     date: new Date().toLocaleDateString("en-US", {
  //       month: "short",
  //       day: "numeric",
  //       year: "numeric",
  //     }),
  //     mood,
  //     moodColor:
  //       mood === "Happy"
  //         ? "bg-yellow-100 text-yellow-700"
  //         : mood === "Excited"
  //         ? "bg-green-100 text-green-700"
  //         : mood === "Sad"
  //         ? "bg-pink-100 text-pink-700"
  //         : "bg-gray-100 text-gray-700",
  //   };

  //   localStorage.setItem("moodEntries", JSON.stringify([newEntry, ...stored]));
  //   navigate("/mood");
  // };

  const handlePost = async () => {
    if (!content.trim()) {
      alert("Please write something before posting.");
      return;
    }

    const { title, description } = extractLines(content);

    // Get JWT token from localStorage/sessionStorage
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to post a journal.");
      return;
    }

    const payload = {
      heading: title,
      content: description,
      tags: [mood.toLowerCase()],
      typography: {
        bold: false,
        italic: false,
        underline: false,
        fontStyle: "Arial",
        fontSize: 16,
      },
    };

    try {
      const res = await fetch("http://localhost:5000/journals/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <-- send JWT
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Journal posted successfully!");
        navigate("/mood"); // redirect to mood dashboard or list page
      } else {
        alert("Error posting journal: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to post journal. Check console for details.");
    }
  };

  const handleCancel = () => {
    navigate("/mood");
  };

  return (
    <div className="flex flex-1 bg-gray-100 shadow-md p-6">
      {/* Left Section - Editor */}
      <div className="flex flex-col flex-1 pl-16">
        {/* Font Options */}
        <div className="flex items-center gap-2 mb-4">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Arcadia Gamer</option>
            <option>Roboto</option>
            <option>Poppins</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>20</option>
            <option>16</option>
            <option>24</option>
          </select>

          <div className="flex items-center gap-2 ml-4">
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button className="line-through">S</button>
            <button>•</button>
            <button>1.</button>
          </div>
        </div>

        {/* Text Area */}
        <WordLikeEditor value={content} onChange={setContent} />

        {/* Bottom Buttons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-400" />
            <button className="w-10 h-10 rounded-full bg-gray-400" />
            <button className="w-10 h-10 rounded-full bg-gray-400" />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleCancel}
              className="px-6 py-2 rounded-full bg-black text-white"
            >
              Cancel
            </button>
            <button
              onClick={handlePost}
              className="px-6 py-2 rounded-full bg-[#FF6B6B] text-white"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Mood Selection */}
      <div className="flex flex-col gap-4 ml-8">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setMood(cat.name)}
            className={`px-6 py-2 rounded-full flex items-center gap-2 ${
              mood === cat.name
                ? "bg-[#FF6B6B] text-white"
                : "bg-black  text-white"
            }`}
          >
            {cat.icon && <img src={cat.icon} className="w-5 h-5" />}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
