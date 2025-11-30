import React from "react";

const Sleep = () => {
  const videos = [
    {
      title: "Stress Relief Meditation",
      url: "https://youtu.be/I6jP5oLdKpY?si=jrvNbEtRg2MB2o2U",
      thumbnail: "https://img.youtube.com/vi/I6jP5oLdKpY/0.jpg",
    },
    {
      title: "Meditation for Overthinking",
      url: "https://youtu.be/sfSDQRdIvTc?si=KzSVM8bSoCo5su6l",
      thumbnail: "https://img.youtube.com/vi/sfSDQRdIvTc/0.jpg",
    },
    {
      title: "5 Minute Stress Relief",
      url: "https://youtu.be/ssss7V1_eyA?si=LrKS6diL10PyiQjY",
      thumbnail: "https://img.youtube.com/vi/ssss7V1_eyA/0.jpg",
    },
  ];

  return (
    <section
      className="relative py-16 px-8"
      style={{
        background: `
          linear-gradient(to bottom, #80361F 0%, #3D202E 100%)
        `,
      }}
    >
      <div className="relative max-w-7xl mx-auto text-left">
        {/* Outer container with strong shadow */}
        <div className="rounded-xl min-h-[500px] bg-[#ffffff0d] backdrop-blur-sm p-8 shadow-2xl shadow-black/50">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Calm Sleep
          </h2>
          <p className="text-white text-sm md:text-base mb-12 opacity-90">
            Personalized fitness routines to build strength, flexibility, and endurance
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            {videos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-white rounded-lg p-6 shadow-xl shadow-black/30 hover:shadow-black/60 transition-transform hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-56 h-30 object-cover rounded-md"
                />
                {/* Title */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">10 minutes • Beginner Friendly</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sleep;
