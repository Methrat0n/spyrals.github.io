/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.js"
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}
