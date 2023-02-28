/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./dist/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'slide-track': 'scroll 20s linear infinite'
      },
      fontFamily: {
        'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
        'menu': ['ChakraPetch', ...defaultTheme.fontFamily.sans],
        'title': ['Furore', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        yellow: '#FFBD59',
        black: '#10002B',
        purple: {
          spyrals: '#8C53FF',
          dark: '#8C0CB7',
          darkest: '#6F0D91',
          void: '#10002B'
        },
        redish: '#FF0054',
        orange: '#FF5400',
        pink: '#B909B4'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
	        '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}
