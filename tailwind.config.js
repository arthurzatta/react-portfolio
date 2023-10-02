/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "clamp-title": "clamp(1rem, 1vw + 1rem, 2.1rem)",
        clamp: "clamp(1rem, 1vw + 1rem, 1.6rem)",
        "clamp-icon": "clamp(1.6rem, 1vw + 1rem, 3.2rem)",
      },
    },
  },
  plugins: [],
};
