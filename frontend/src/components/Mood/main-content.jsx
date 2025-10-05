import WordLikeEditor from './writer';

export default function MoodMainContent() {
  return (
    <div className="flex flex-1 bg-gray-100 shadow-md p-6">
      {/* Left Section - Editor */}
      <div className="flex flex-col flex-1 pl-16">
        {/* Font Options */}
        <div className="flex items-center gap-2 mb-4">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Arcadia Gamer</option>
            <option>Roboto</option>
            <option>Poppins</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>20</option>
            <option>16</option>
            <option>24</option>
          </select>

          {/* Formatting buttons */}
          <div className="flex items-center gap-2 ml-4">
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button className="line-through">S</button>
            <button>•</button>
            <button>1.</button>
          </div>
        </div>

        {/* Text Area */}

        <WordLikeEditor/>
        
        <div className="flex justify-between items-center mt-4">
  {/* Bottom icons */}
  <div className="flex gap-4">
    <button className="w-10 h-10 rounded-full bg-gray-400" />
    <button className="w-10 h-10 rounded-full bg-gray-400" />
    <button className="w-10 h-10 rounded-full bg-gray-400" />
    <button className="w-10 h-10 rounded-full bg-gray-400" />
    <button className="w-10 h-10 rounded-full bg-gray-400" />
  </div>

  {/* Action Buttons */}
  <div className="flex gap-4">
    <button className="px-6 py-2 rounded-full bg-black text-white">Cancel</button>
    <button className="px-6 py-2 rounded-full bg-[#FF6B6B] text-white">Post</button>
  </div>
</div>

      </div>

      {/* Right Section - Mood Selection */}
      <div className="flex flex-col gap-4 ml-8">
        <button className="px-6 py-2 rounded-full bg-yellow-100 text-yellow-700">😊 Happy</button>
        <button className="px-6 py-2 rounded-full bg-pink-100 text-pink-700">🤢 Disgusting</button>
        <button className="px-6 py-2 rounded-full bg-green-100 text-green-700">🤩 Exciting</button>
      </div>
    </div>
  );
}
