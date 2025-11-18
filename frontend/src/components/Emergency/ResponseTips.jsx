import React from "react";
import img1 from "../../assets/img/emergency/img1.png";
import img2 from "../../assets/img/emergency/img2.png";
import img3 from "../../assets/img/emergency/img3.png";

const ResponseTips = () => {
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

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Medical Emergency Protocol
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
              <li>Stay calm and assess the situation</li>
              <li>Call emergency services immediately</li>
              <li>Provide clear location details</li>
              <li>Follow dispatcher instructions</li>
            </ul>

            {/* IMG 1 */}
            <img
              src={img1}
              alt="Medical Emergency Tips"
              style={{ width: 225, height: 150, objectFit: "contain" }}
              className="mx-auto"
            />
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Pre-Emergency Preparation
            </h3>

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
              <li>Keep emergency contacts updated</li>
              <li>Know your medical history</li>
              <li>Have insurance details ready</li>
              <li>Save this page for quick access</li>
            </ul>

            {/* IMG 2 */}
            <img
              src={img2}
              alt="Pre Emergency Tips"
              style={{ width: 225, height: 150, objectFit: "contain" }}
              className="mx-auto"
            />
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Mental Health Crisis
            </h3>

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
              <li>Listen without judgment</li>
              <li>Speak calmly and offer support</li>
              <li>Remove any harmful objects</li>
              <li>Stay with the person until help arrives</li>
            </ul>

            {/* IMG 3 */}
            <img
              src={img3}
              alt="Mental Health Crisis Tips"
              style={{ width: 225, height: 150, objectFit: "contain" }}
              className="mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResponseTips;