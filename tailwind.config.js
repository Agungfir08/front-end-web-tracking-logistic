/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      height: {
        13: "3.25rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      width: {
        13: "3.25rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      padding: {
        13: "3.25rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
    },
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 320px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
});
