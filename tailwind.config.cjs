/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "true-white": "#FFFFFF",
        white: "#fcf9f0",
        "lightest-grey": "#e9ecf0",
        "light-grey": "#b8bbbf",
        "mid-grey": "#7c7e80",
        grey: "#3f4041",
        black: "#1B1B1B",
        "true-black": "#000000",
        red: "#FB4247",
        "dark-red": "#912629",
        blue: "#4299BC",
        "dark-blue": "#2d6880",
        yellow: "#FFD063",
        "dark-yellow": "#c7a24e",
        green: "#2BA866",
        "dark-green": "#1e7547",
        "subtle-green": "#95edbf22",
        "dark-subtle-green": "#95edbf05",
      },
    },
    transitionProperty: { width: "width", stroke: "stroke" },

    boxShadow: {
      default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
      card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
      "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
      switcher:
        "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
