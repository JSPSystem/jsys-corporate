module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansjp: ["Noto Sans JP", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      width: {
        148: "37rem" /* 592px */,
        172: "43rem" /* 688px */,
      },
      height: {
        88: "22rem" /* 352px */,
        116: "29rem" /* 464px */,
        124: "31rem" /* 496px */,
        252: "63rem" /* 1008px */,
        "11/12": "91.666667%",
      },
      backgroundImage: {
        "img-top": "url('/jspsystem/images/bg_top.png')",
        "img-top-mb": "url('/jspsystem/images/bg_top_mb.png')",
        "color-about": "linear-gradient(to bottom, #eee 85% , #0f766d 15%)",
        "color-service": "linear-gradient(to bottom, #0f766d 85% , #eee 15%)",
        "color-service-mb": "linear-gradient(to bottom, #0f766d 92% , #eee 8%)",
      },
    },
  },
  plugins: [],
};
