/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      limitxs: { max: "375px" },
      limitsm: { min: "376px", max: "640px" },
      limitmd: { min: "641px", max: "768px" },
      limitlg: { min: "769px", max: "1024px" },
      limitxl: { min: "1025px", max: "1280px" },
      xs: { max: "375px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { min: "1281px" },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1920px",
      },
      padding: "7.5vw",
    },
  },
  plugins: [],
};
