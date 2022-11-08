/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#282c33",
      white: "#abb2bf",
      red: "#e06b74",
      green: "#98c379",
      yellow: "#e5c07a",
      blue: "#62aeef",
      teal: "#55b6c2",
      purple: "#c678dd",
      plane: "#ffffff",
    },

    extend: {
      height: {
        90: "90%",
        80: "80%",
        70: "75%",
      },
      width: {
        "70%": "70%",
        "4%": "4%",
        "20%": "20%",
        "30%": "30%",
      },
      minHeight: {
        14: "3rem",
        70: "85%",
      },
      minWidth: {
        14: "3rem",
        17: "4rem",
        30: "30rem",
      },
      maxHeight: {
        14: "3rem",
        70: "85%",
      },
      maxWidth: {
        14: "3rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
