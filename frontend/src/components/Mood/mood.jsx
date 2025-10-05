import {React } from 'react';

const moods = [
  {
    title: "Morning Thoughts",
    date: "Sept 25, 2025",
    mood: "Happy",
    moodColor: "bg-yellow-100 text-yellow-700",
    description:
      "Started my day with meditation and journaling. Feeling grateful for the beautiful weather and looking forward...",
  },
  {
    title: "Challenging Day",
    date: "Sept 24, 2025",
    mood: "Disgusting",
    moodColor: "bg-pink-100 text-pink-700",
    description:
      "Work was overwhelming today. Had three back-to-back meetings and couldn’t finish my project deadline....",
  },
  {
    title: "Weekend Adventures",
    date: "Sept 23, 2025",
    mood: "Exciting",
    moodColor: "bg-green-100 text-green-700",
    description:
      "Went hiking with friends today! The view from the top was absolutely breathtaking. We took so many photos...",
  },
];

const MoodCard = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moods.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
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
            </div>
          ))}
        </div>
  );
};

export default MoodCard;