/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // also scan index.html
    "./src/**/*.{js,ts,jsx,tsx}" // scan all React files inside src
  ],
  theme: {
    extend: {
      keyframes: {
        breath: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        breath: "breath 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
