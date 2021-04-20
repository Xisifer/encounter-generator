const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: colors.white,
      red: colors.red,
      gray: colors.blueGray,
      indigo: colors.indigo,
      cyan: { ...colors.cyan, 500: "#89e4fd" },
    },
    boxShadow: { checkbox: "inset 20px 0 0 0 rgb(59, 130, 246)" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
