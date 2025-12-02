import React, { useEffect, useState } from "react";
import img1 from "../../assets/img/emergency/img1.png";
import img2 from "../../assets/img/emergency/img2.png";
import img3 from "../../assets/img/emergency/img3.png";

const ResponseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map API items → static local images
  const imageMap = [img1, img2, img3];

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch(
          "https://healthmate-evbq.onrender.com/emergency-tips/"
        );
        const data = await res.json();

        // Attach static images to API data
        const formatted = data.tips.map((tip, idx) => ({
          ...tip,
          staticImage: imageMap[idx], // assign image 1,2,3
        }));

        setTips(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load emergency tips:", err);
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-lg text-gray-600">
        Loading emergency tips...
      </div>
    );
  }

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(180deg, #FFF7F5 0%, #FFEDE9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Emergency Response Tips
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((item, index) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.heading}
              </h3>

              {/* underline */}
              <div
                className="mt-3 mb-4"
                style={{
                  width: 40,
                  height: 4,
                  backgroundColor: "#FF7B6E",
                  borderRadius: 2,
                }}
              />

              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* STATIC IMAGES */}
              <img
                src={item.staticImage}
                alt={item.heading}
                style={{ width: 225, height: 150, objectFit: "contain" }}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponseTips;
