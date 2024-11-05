/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
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
        pthin: ["Onest-Thin", "sans-serif"],
        pextralight: ["Onest-ExtraLight", "sans-serif"],
        plight: ["Onest-Light", "sans-serif"],
        pregular: ["Onest-Regular", "sans-serif"],
        pmedium: ["Onest-Medium", "sans-serif"],
        psemibold: ["Onest-SemiBold", "sans-serif"],
        pbold: ["Onest-Bold", "sans-serif"],
        pextrabold: ["Onest-ExtraBold", "sans-serif"],
        pblack: ["Onest-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}