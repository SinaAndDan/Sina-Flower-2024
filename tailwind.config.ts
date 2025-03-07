// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: "#e2e2e2",
      darkGray: "#3E3C37",
      bgpic: "#E4E4E4",
      white: "#F5F5F5",
      green: "#2EA206",
      greenlogIn: "#3D7049",
      loginInput: "#D0DED5",
      black: "black",
      red: "#B60000",
      blue: "#0074e8",
    },
    extend: {
      // Extend the theme if needed
      boxShadow: {
        lg: "1px 1px 12px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        yekan: ["yekan"],
        abasan: ["abasan"],
        notSelected: ["notSelected"],
        parastoo: ["parastoo"],
        sahel: ["sahel"],
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
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
