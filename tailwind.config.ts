/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {},
    colors: {},
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
