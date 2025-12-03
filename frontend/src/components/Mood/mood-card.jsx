import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, X } from "lucide-react";

const MoodCard = ({ selectedMood }) => {
  const [moods, setMoods] = useState([]);
  const [deleteId, setDeleteId] = useState(null); // for modal
  const [showModal, setShowModal] = useState(false);

  const tagColors = {
    Excited: "bg-yellow-200 text-yellow-700",
    Happy: "bg-green-200 text-green-700",
    Average: "bg-gray-200 text-gray-700",
    Sad: "bg-blue-200 text-blue-700",
    Sick: "bg-red-200 text-red-700",
    Upset: "bg-purple-200 text-purple-700",
    Anxious: "bg-orange-200 text-orange-700",
  };

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/journals/user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        const formatted = res.data.journals.map((item) => {
          const rawMood = item.tags[0] || "average";

          const formattedMood =
            rawMood.charAt(0).toUpperCase() + rawMood.slice(1).toLowerCase();

          return {
            id: item._id,
            title: item.heading,
            description: item.content,
            date: new Date(item.created_at).toLocaleDateString(),
            mood: formattedMood,
            moodColor: tagColors[formattedMood] || tagColors["Average"],
          };
        });

        setMoods(formatted);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJournals();
  }, []);

  // --------- DELETE FUNCTION -------------------
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/journals/${deleteId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setMoods((prev) => prev.filter((m) => m.id !== deleteId));
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredMoods =
    selectedMood === "All"
      ? moods
      : moods.filter((item) => item.mood === selectedMood);

  return (
    <div className="p-8">
      {/*  Page Title  */}
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {selectedMood === "All"
          ? "My Journal Entries"
          : `${selectedMood} Mood Entries`}
      </h2>
      <p className="text-gray-600 mb-6">
        Reflect on your moods and thoughts here.
      </p>

      {/*  Cards  */}
      {filteredMoods.length === 0 ? (
        <p className="text-gray-600">No journal entries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMoods.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>

                <span
                  className={`inline-block text-xs px-2 py-1 rounded-full font-medium mb-3 ${item.moodColor}`}
                >
                  {item.mood}
                </span>

                <p className="text-sm text-gray-700 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* --- Edit + Delete Buttons --- */}
              <div className="flex justify-end gap-4 mt-4">
                {/* EDIT ICON */}
                <button
                  onClick={() => (window.location.href = `/edit/${item.id}`)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Pencil size={18} className="text-blue-600" />
                </button>

                {/* DELETE ICON */}
                <button
                  onClick={() => {
                    setDeleteId(item.id);
                    setShowModal(true);
                  }}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/*  DELETE CONFIRMATION MODAL  */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Confirm Delete
              </h3>
              <button onClick={() => setShowModal(false)}>
                <X size={22} />
              </button>
            </div>

            <p className="text-gray-600">
              Are you sure you want to delete this mood?
            </p>

            <div className="flex justify-end gap-3 mt-2">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodCard;
