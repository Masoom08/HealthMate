import React from "react";
import headerIcon from "../../assets/img/emergency/imgheader.png";

const Support = () => {
  const columns = [
    {
      title: "Mental Health Support",
      items: [
        { number: "9152987821", label: "Crisis Helpline" },
        { number: "08046110007", label: "Vandrevala Foundation" },
        { number: "09820466726", label: "AASRA Suicide Prevention" },
        { number: "08041790000", label: "Sneha India" },
        { number: "18001805353", label: "iCall Psychosocial Helpline" },
      ],
    },

    {
      title: "Physical Health Emergency",
      items: [
        { number: "108", label: "National Ambulance Service" },
        { number: "102", label: "Medical Helpline" },
        { number: "1075", label: "COVID-19 Helpline" },
        { number: "104", label: "National Health Portal" },
        { number: "1800-180-1104", label: "Health Insurance Support" },
      ],
    },

    {
      title: "Specialized Care",
      items: [
        { number: "1098", label: "Child Helpline" },
        { number: "181", label: "Women Helpline" },
        { number: "1800-116-117", label: "Poison Control Center" },
        { number: "14567", label: "Anti-Trafficking Helpline" },
        { number: "1800-233-3330", label: "Senior Citizen Helpline" },
      ],
    },
  ];

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