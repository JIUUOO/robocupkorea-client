/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#1C68A6",
        accent: "#145D8C",
        black: "#080504",
        gray: "#e1e1e1",
        neutral: "#F9F9F9",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
