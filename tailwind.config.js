/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}