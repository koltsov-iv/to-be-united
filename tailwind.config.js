/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // colors: {
    //   primary: "#261A8F",
    //   secondary: "#FFEC54"
    // },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

