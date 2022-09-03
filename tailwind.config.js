/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
              fontFamily: {
                balonku: ['Balonku'],
                pacifico: ['Pacifico'],

            },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
