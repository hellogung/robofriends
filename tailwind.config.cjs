/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'robot': ['mrrobot', 'sans-serif']
      }
    },
  },
  plugins: [],
};
