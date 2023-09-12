/** @type {import("tailwindcss").Config} */

// to use tailwind colors
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "scepter-c60": "#f4dcda",
        "scepter-c30": "#f3be98",
        "scepter-c10": "#e67d24",
        "scepter-c10-active": "#ec9756",
        "scepter-c10-text": "#ffffff"
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "wiggle": "wiggle 1s ease-in-out infinite"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        }
      }
    },
  },
  plugins: [],
}
