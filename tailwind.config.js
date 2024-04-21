/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Maven Pro",
      },
      backgroundImage: {
        stormclouds: "url('/src/assets/images/stormclouds.jpg')",
      },
    },
  },
  plugins: [],
};
