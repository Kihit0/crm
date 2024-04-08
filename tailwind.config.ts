/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {},
    colors: {
      "white": "#FFFFFF",
      "main": "#17163B",
      "secondary": "#1B1942",
      "main-light": "#262250",
      "text-color-main": "#6F6C99",
      "text-color-secondary": "#59588D",
      "text-color-green": "#50E3C2",
      "text-color-red": "#E3507A",
      "text-color-link": "#70B2FF",
      "graph-lightblue": "#53B9EA",
      "graph-pink": "#FB49C0",
      "graph-yellow": "#F5A623",
      "graph-orange": "#E27034",
      "graph-green": "#56ec52",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
