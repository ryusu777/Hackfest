/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0f172a'
      }
    },
  },
  plugins: [require("daisyui")],
}
