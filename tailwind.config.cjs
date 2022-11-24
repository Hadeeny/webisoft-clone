/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#0250F1",
        darkGray: "#1E1E1E",
        lightGray: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
