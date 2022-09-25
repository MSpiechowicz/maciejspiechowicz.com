module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#1057A2",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      boxShadow: {
        '3xl': '25px 35px 50px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
