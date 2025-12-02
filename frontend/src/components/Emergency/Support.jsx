import React, { useEffect, useState } from "react";
import headerIcon from "../../assets/img/emergency/imgheader.png";

const Support = () => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching helpline data from backend
  useEffect(() => {
    const fetchHelplines = async () => {
      try {
        const res = await fetch("https://healthmate-evbq.onrender.com/helpline/");
        const data = await res.json();

        // Convert backend structure into UI-compatible structure
        const formatted = data.categories.map((category) => ({
          title: category.category,
          items: category.helplines.map((h) => ({
            number: h.number,
            label: h.title,
          })),
        }));

        setColumns(formatted);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load helpline data:", error);
        setLoading(false);
      }
    };

    fetchHelplines();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Loading helplines...
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#FF7B6E" }}
          >
            24×7 Support Helplines
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Support Helplines
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl">
            Find reliable helpline numbers for mental health, physical health,
            emergencies, and specialized care—all in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {columns.map((col, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="px-5 py-4 flex items-center gap-4"
                style={{ backgroundColor: "#FFEDEB" }}
              >
                {/* REAL IMAGE inserted here */}
                <img
                  src={headerIcon}
                  alt="icon"
                  className="w-[65px] h-[51px] object-contain"
                />

                <h3 className="font-semibold text-gray-900 text-base">
                  {col.title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {col.items.map((item, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="text-purple-700 font-semibold text-base">
                      {item.number}
                    </div>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                    <div className="border-b mt-3 border-purple-200"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Support;
