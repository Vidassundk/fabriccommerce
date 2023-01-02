/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sant-serif"],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        "primary-lightest": "#fff8f0",
        "primary-lighter": "#ffe8d9",
        "primary-light": "#fb6d11",
        primary: "#4C413B",
        "secondary-lighter": "#7e736f",
        "secondary-light": "#37241f",
        secondary: "#2d1b15",
        "grey-lighter": "#f9f9f9",
        "grey-light": "#f6f6f6",
      },
    },
  },
  plugins: [],
};
