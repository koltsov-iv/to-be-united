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
    extend: {
      lineClamp: {
        10: '10',
        20: '20',
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('@tailwindcss/line-clamp'),
  ],
}

