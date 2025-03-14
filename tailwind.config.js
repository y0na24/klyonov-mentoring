/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts}", "./node_modules/preline/preline.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grey: "#6b7280",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
