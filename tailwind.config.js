/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#7C63EF",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        othin: ["Onest-Thin", "sans-serif"],
        oextralight: ["Onest-ExtraLight", "sans-serif"],
        olight: ["Onest-Light", "sans-serif"],
        oregular: ["Onest-Regular", "sans-serif"],
        omedium: ["Onest-Medium", "sans-serif"],
        osemibold: ["Onest-SemiBold", "sans-serif"],
        obold: ["Onest-Bold", "sans-serif"],
        oextrabold: ["Onest-ExtraBold", "sans-serif"],
        oblack: ["Onest-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}