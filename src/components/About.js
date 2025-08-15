import React from "react";

export default function About({ mode }) {
  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#1f2937" : "white", // Tailwind gray-800 for dark
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-all duration-500">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
        About TextUtils
      </h2>

      <div className="space-y-4">
        {/* Accordion Item 1 */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 transition-all duration-500">
          <button
            style={myStyle}
            className="w-full text-left px-6 py-4 font-semibold text-lg focus:outline-none hover:bg-purple-500 hover:text-white transition-colors duration-300"
            type="button"
            onClick={(e) => {
              const panel = e.currentTarget.nextElementSibling;
              panel.classList.toggle("hidden");
            }}
          >
            Analyze Text
          </button>
          <div style={myStyle} className="px-6 py-4 hidden">
            TextUtils allows you to analyze your text instantly. Convert to uppercase, lowercase, sentence case, remove extra spaces, reverse text, copy to clipboard, or download as a file.
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 transition-all duration-500">
          <button
            style={myStyle}
            className="w-full text-left px-6 py-4 font-semibold text-lg focus:outline-none hover:bg-pink-500 hover:text-white transition-colors duration-300"
            type="button"
            onClick={(e) => {
              const panel = e.currentTarget.nextElementSibling;
              panel.classList.toggle("hidden");
            }}
          >
            Free to Use
          </button>
          <div style={myStyle} className="px-6 py-4 hidden">
            TextUtils is completely free for everyone. No signup or payment required. You can start editing and analyzing your text immediately.
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600 transition-all duration-500">
          <button
            style={myStyle}
            className="w-full text-left px-6 py-4 font-semibold text-lg focus:outline-none hover:bg-indigo-500 hover:text-white transition-colors duration-300"
            type="button"
            onClick={(e) => {
              const panel = e.currentTarget.nextElementSibling;
              panel.classList.toggle("hidden");
            }}
          >
            Dark Mode Feature
          </button>
          <div style={myStyle} className="px-6 py-4 hidden">
            You can toggle between light and dark mode using the button in the navbar. Dark mode helps reduce eye strain, especially during night-time editing.
          </div>
        </div>
      </div>
    </div>
  );
}
