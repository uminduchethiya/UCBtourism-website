/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#c4a35a",
        forest: "#14343a",
        sand: "#f7f3eb",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
