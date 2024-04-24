/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {},
    colors: {
      "white": "#FFFFFF",
      "main": "#17163B",
      "secondary": "#1B1942",
      "light-purple": "#262250",
      "light-purple-main": "#6F6C99",
      "light-purple-secondary": "#59588D",
      "green": "#50E3C2",
      "red": "#E3507A",
      "lightblue": "#70B2FF",
      "neon-lightblue": "#53B9EA",
      "neon-pink": "#FB49C0",
      "neon-yellow": "#F5A623",
      "neon-orange": "#E27034",
      "neon-green": "#56ec52",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
