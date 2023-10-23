module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Nunito",
        "sans-serif",
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      "main-orange": "#FF512F",
      "secondary-orange": "#F09819",
    },
    extend: {
      boxShadow: {
        "3xl": "25px 35px 50px 10px rgba(0, 0, 0, 0.3)",
      }
    },
  },
  plugins: [],
};
