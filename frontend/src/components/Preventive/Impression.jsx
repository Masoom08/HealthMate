import React from "react";

/**
 * Impression.jsx
 * Usage:
 *   import Impression from './components/Impression';
 *   <Impression />
 *
 * Cards: 6 (2 per row), centered, follows your typography & spacing.
 * If you want to add images inside cards use the provided local paths above
 * (e.g. <img src={"/mnt/data/76fa03d4-...png"} />) — your build system will convert them.
 */

const Impression = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FF7B6E" }}>
            Practice Advice
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            See Our Impressions
          </h2>

          <p className="text-sm text-gray-500 mt-3 max-w-2xl">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Grid: 2 columns on md+, 1 column mobile. Cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Card 1 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">Daily Lifestyle Tips</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
                <li>Drink 8-10 glasses of water daily</li>
                <li>Include 5 servings of fruits & vegetables</li>
                <li>Limit processed and junk food</li>
                <li>Get 7-8 hours of quality sleep</li>
                <li>Take regular breaks from screen time</li>
              </ul>

              {/* Optional small highlight box */}
              <div className="inline-block bg-green-50 border border-green-200 text-sm text-green-900 px-4 py-3 rounded-md">
                <strong>Today's Focus:</strong> Try to replace one unhealthy snack with a fruit or vegetable!
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">Health Checkups &amp; Vaccines</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <div className="space-y-5 text-sm text-gray-600">
                <div>
                  <div className="font-semibold text-gray-800">Annual Health Checkup</div>
                  <div className="text-gray-500">Complete blood work & general examination</div>
                </div>

                <div>
                  <div className="font-semibold text-gray-800">Flu Vaccination</div>
                  <div className="text-gray-500">Seasonal influenza shot</div>
                </div>

                <div>
                  <div className="font-semibold text-gray-800">Eye Examination</div>
                  <div className="text-gray-500">Vision and eye health check</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">Seasonal Disease Prevention</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <div className="space-y-4 text-sm">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-sm text-yellow-800">
                  <strong>Current Season Alert:</strong> Monsoon increases risk of dengue and malaria. Take preventive measures!
                </div>

                <div className="mt-2 space-y-2">
                  <div className="bg-gray-50 border border-gray-100 rounded-md p-3 text-gray-700">Dengue — Remove stagnant water, use mosquito nets</div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md p-3 text-gray-700">Seasonal Flu — Wash hands frequently, avoid crowds</div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md p-3 text-gray-700">Food Poisoning — Eat fresh food, drink clean water</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">AI Health Insights</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <div className="space-y-4 text-sm text-gray-600">
                <div className="bg-pink-50 border border-pink-200 rounded-md p-3 text-pink-800">
                  <strong>Stress Level Alert:</strong> Your mood journal shows increased stress this week. Consider these measures:
                </div>

                <ul className="list-none space-y-2">
                  <li>Try 10-minute meditation sessions</li>
                  <li>Take short walks during breaks</li>
                  <li>Practice deep breathing exercises</li>
                  <li>Ensure adequate sleep (7-8 hours)</li>
                </ul>

                <div className="mt-3 text-sm text-gray-500">
                  <strong>Sleep Pattern Analysis:</strong> Average: 6.2 hours (Below recommended)
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">Daily Habit Tracker</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <div className="font-semibold text-gray-800">Water Intake</div>
                  <div className="text-gray-500">Goal: 10 glasses | Current: 5</div>
                </div>

                <div>
                  <div className="font-semibold text-gray-800">Daily Steps</div>
                  <div className="text-gray-500">Goal: 10,000 | Current: 7,342</div>
                </div>

                <div>
                  <div className="font-semibold text-gray-800">Meditation</div>
                  <div className="text-gray-500">Goal: 15 minutes | Today: Not started</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">Wellness Summary</h3>
              <div className="mt-3 mb-4 w-14 h-[3px]" style={{ backgroundColor: "#8B5CF6", borderRadius: 2 }} />

              <div className="space-y-4 text-sm text-gray-600">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-blue-700">7.2</div>
                    <div className="text-xs text-gray-500">Avg Mood</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-blue-700">85%</div>
                    <div className="text-xs text-gray-500">Habit Completion</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-2xl font-bold text-blue-700">12</div>
                    <div className="text-xs text-gray-500">Healthy Days</div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-md p-3 text-sm text-green-800">
                  <strong>Great Progress!</strong> You've maintained consistent healthy habits for 12 days. Keep it up!
                </div>

                <div className="text-center mt-4">
                  <button className="bg-gradient-to-r from-[#FF7B6E] to-[#FF9A80] text-white px-6 py-2 rounded-full font-semibold">
                    Update Mood Journal
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Impression;
