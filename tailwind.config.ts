const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        parastoo: ["parastoo"],
        abasan: ["abasan"],
        aref: ["aref"],
        arshia: ["arshia"],
        yekan: ["yekan"],
        tanha: ["tanha"],
      },
    },
  },
  plugins: [],
};
