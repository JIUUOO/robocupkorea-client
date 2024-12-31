/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard"],
    },
    colors: {
      primary: "#1C68A6",
      "primary-inactive": "#145D8C",
      secondary: "",
      black: "#080504",
      "black-transparent": "#08050433",
      white: "#ffffff",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
