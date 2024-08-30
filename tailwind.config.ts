module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // add other paths if necessary
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
