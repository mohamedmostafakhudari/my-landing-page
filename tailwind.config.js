/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#3882F6",
        },
        neutral: {
          100: "#F9FAF8",
          200: "#E5E7EB",
          800: "#1F2937",
        },
      },
      fontSize: {},
    },
  },
  plugins: [],
};
