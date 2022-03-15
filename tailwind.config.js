module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansjp: ["Noto Sans JP", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      width: {
        112: "28rem" /* 448px */,
        172: "43rem" /* 688px */,
      },
      height: {
        128: "32rem" /* 512px */,
      },
      backgroundImage: {
        "img-top": "url('/images/bg_top.png')",
        "img-top-mb": "url('/images/bg_top_mb.png')",
      },
    },
  },
  plugins: [],
};
