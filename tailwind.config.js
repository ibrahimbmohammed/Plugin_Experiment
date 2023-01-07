/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/hoc/**/*.{js,ts,jsx,tsx}",
    "./lib/layout/**/*.{js,ts,jsx,tsx}",
    "./lib/hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/utils/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#18D8C8", // this is Peddlesoft primary green colour, this green is shouty
        peddlesoftColor: "#1d857c", // this seems better
        primaryColor: "var(--color-primaryColor)",
        secondaryColor: "var(--color-secondaryColor)",
        primaryText: "var(--color-primaryText)",
        secondaryText: "var(--color-secondaryText)",
        primaryBtn: "var(--color-primaryBtn)",
        secondaryBtn: "var(--color-secondaryBtn)",
        backgroundPrimary: "var(--color-backgroundPrimary)",
        backgroundSecondary: "var(--color-backgroundSecondary)",
        sky: colors.sky,
        cyan: colors.cyan,
      },

      spacing: {
        25: "6.25rem",
        98: "24.5 rem",
        100: "25rem",
        104: "26rem",
        106: "28rem",
        108: "30rem",
        110: "34rem",
      },
      screens: {
        "1xl": "1440px",
        "1.5xl": "1500px",
        "3xl": "1700px",
      },
    },
    fontFamily: {
      theme: "'Montserrat', sans-serif",
      Theme: "var(--font-name), var(--font-family)",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/custom-forms"),
  ],
};
