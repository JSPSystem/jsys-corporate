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
        148: "37rem" /* 592px */,
        172: "43rem" /* 688px */,
      },
      height: {
        124: "31rem" /* 496px */,
        128: "32rem" /* 512px */,
      },
      backgroundImage: {
        "img-top": "url('/jspsystem/images/bg_top.png')",
        "img-top-mb": "url('/jspsystem/images/bg_top_mb.png')",
        "color-about": "linear-gradient(to bottom, #eee 85% , #0f766d 15%)",
        "color-service": "linear-gradient(to bottom, #0f766d 85% , #eee 15%)",
      },
    },
  },
  plugins: [],
};
