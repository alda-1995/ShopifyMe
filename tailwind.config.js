/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
    './terminos.html',
    './aviso-privacidad.html',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2.5rem',
          lg: '3rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      },
      fontFamily: {
        'montse': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'main': '#021e5b',
        'grayOpacity': "#6a9cde",
        'grayBorder': "#d2d5d9",
        'greenMe': '#4674f2',
        'yellowMe': '#f49600'
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1, .h1': {
          fontSize: "calc(38px + (110 - 38) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1
        },
        'h2, .h2': {
          fontSize: "calc(30px + (56 - 30) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1,
        },
        'h3, .h3': {
          fontSize: "calc(18px + (36 - 18) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2,
        },
        'h4, .h4': {
          fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1,
        },
        'h5, .h5': {
          fontSize: "calc(9px + (16- 9) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.5
        },
        'p, .p': {
          fontSize: "calc(14px + (16 - 14) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        '.p-small': {
          fontSize: "calc(12px + (14 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
      })
    })
  ],
}
