import React, { useState } from "react";

const Meditation = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Stress Relief Meditation",
      id: "I6jP5oLdKpY",
      thumbnail: "https://img.youtube.com/vi/I6jP5oLdKpY/0.jpg",
    },
    {
      title: "Meditation for Overthinking",
      id: "sfSDQRdIvTc",
      thumbnail: "https://img.youtube.com/vi/sfSDQRdIvTc/0.jpg",
    },
    {
      title: "5 Minute Stress Relief",
      id: "ssss7V1_eyA",
      thumbnail: "https://img.youtube.com/vi/ssss7V1_eyA/0.jpg",
    },
  ];

  return (
    <section
      className="relative py-16 px-8"
      style={{
        background: `linear-gradient(to bottom, #000000 70%, #3D202E 100%)`,
      }}
    >
      <div className="relative max-w-7xl mx-auto text-left">
        <div className="rounded-xl min-h-[500px] bg-[#ffffff0d] backdrop-blur-sm p-8 shadow-2xl shadow-black/50">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Guided Meditations
          </h2>
          <p className="text-white text-sm md:text-base mb-12 opacity-90">
            Personalized fitness routines to build strength, flexibility, and endurance
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 bg-white rounded-lg p-6 shadow-xl shadow-black/30 hover:shadow-black/60 transition-transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                {/* Thumbnail or Embedded Video */}
                <div className="w-56 h-30 flex-shrink-0">
                  {activeVideo === video.id ? (
                    <iframe
                      width="100%"
                      height="158"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-md"
                    ></iframe>
                  ) : (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    10 minutes • Beginner Friendly
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meditation;
