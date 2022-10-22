/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tanpearl: ['Tan Pearl', ...defaultTheme.fontFamily.sans],
        tenor: ['Tenor Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}