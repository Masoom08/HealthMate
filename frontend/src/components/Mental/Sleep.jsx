import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sleep = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://healthmate-evbq.onrender.com/mental/search?q=calm%20sleep")
      .then((res) => res.json())
      .then((data) => {
        if (!data?.results?.items) {
          setLoading(false);
          return;
        }

        const videosOnly = data.results.items
          .filter((item) => item.id?.kind === "youtube#video")
          .slice(0, 3)
          .map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));

        setVideos(videosOnly);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="relative py-16 px-8"
      style={{
        background: `linear-gradient(to bottom, #80361F 0%, #3D202E 100%)`,
      }}
    >
      <div className="relative max-w-7xl mx-auto text-left">
        <div className="rounded-xl min-h-[500px] bg-[#ffffff0d] backdrop-blur-sm p-8 shadow-2xl shadow-black/50">
          
          {/* Header */}
          <div className="flex justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Calm Sleep
            </h2>

            <button
              onClick={() => navigate("/sleep/all")}
              className="text-white text-sm underline hover:text-gray-300"
            >
              More →
            </button>
          </div>

          <p className="text-white text-sm md:text-base mb-12 opacity-90">
            Soothing sleep sounds & relaxing bedtime music to help you unwind.
          </p>

          {/* Loading */}
          {loading && (
            <p className="text-white text-center opacity-80">Loading...</p>
          )}

          {/* Cards */}
          {!loading && (
            <div className="grid grid-cols-1 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-6 bg-white rounded-lg p-6 shadow-xl shadow-black/30 hover:shadow-black/60 transition-transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  {/* Thumbnail or Video */}
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
                      Sleep Music • Calm Night • Relaxation
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sleep;
