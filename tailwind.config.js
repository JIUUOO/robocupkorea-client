/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#1C68A6",
        accent: "#145D8C",
        black: "#080504",
        gray: "#e1e1e1",
        dark: "#6C757D",
        neutral: "#F7F7F7",
        white: "#ffffff",
      },
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      borderRadius: {
        DEFAULT: "3px",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          overscrollBehavior: "none",
          height: "100%",
        },
        body: {
          overscrollBehavior: "none",
          height: "100%",
        },
      });
    },
  ],
};
