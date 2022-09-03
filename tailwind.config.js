/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#FEF9F9',
        },
        moosered: '#BD0000',
        moosebrown: '#AD5618',
        mooseyellow: '#FDE467',
      },
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
