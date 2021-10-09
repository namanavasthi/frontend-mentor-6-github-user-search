module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [],
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        11: "11px",
        13: "13px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
      },
      lineHeight: {
        16: "16px",
        20: "20px",
        22: "22px",
        24: "24px",
        25: "25px",
        33: "33px",
        38: "38px",
      },
      letterSpacing: { 0: "0px", 2.5: "2.5px" },
      colors: {
        primary: {
          100: "#0079ff",
          200: "#697c9a",
          300: "#4b6a9b",
          400: "#2b3442",
          500: "#f6f8ff",
          600: "#fefefe",
          700: "#141D2F",
          800: "#1e2a47",
          900: "#F74646",
          1000: "#60abff",
          1100: "#90A4D4",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
