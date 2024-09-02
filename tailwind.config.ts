// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // add other paths if necessary
  ],
  theme: {
    extend: {
      // Extend the theme if needed
      boxShadow: {
        lg: "1px 1px 12px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        yekan: ["yekan"],
        abasan: ["abasan"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-2000": {
          perspective: "2000px",
        },
        ".transform-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".transform-origin-0": {
          transformOrigin: "0",
        },
        ".rotate-y-80": {
          transform: "rotateY(-80deg)",
        },
      });
    },
  ],
};
