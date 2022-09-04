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
        moosebrown: '#e66001',
        mooseyellow: '#FDE467',
        moosepink: "#fbc4cd",
        moosegreen: "#00ac35",
        moosepurple: "#dd75f0",
        mooseltblue: "#64dcc9",
        moosedkblue: "#096790",


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
