/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "*.html"
  ],
  theme: {
    extend: {
      animation: {
        'slide-track': 'scroll 40s linear infinite',
        'fadeOut': 'fadeOut ease 2s',
        'bounceFadeAppear1': 'bounceFadeAppear ease 2s forwards',
        'bounceFadeAppear2': 'bounceFadeAppear ease 2s 0.5s forwards',
        'bounceFadeAppear3': 'bounceFadeAppear ease 2s 1s forwards',
        'bounceFadeAppear4': 'bounceFadeAppear ease 2s 1.5s forwards',
        'leftFadeAppear': 'leftFadeAppear ease 1.25s forwards'
      },
      fontFamily: {
        'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
        'menu': ['ChakraPetch', ...defaultTheme.fontFamily.sans],
        'title': ['Furore', ...defaultTheme.fontFamily.sans],
        'card': ['Oswald', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        yellow: '#FFBD59',
        black: '#10002B',
        blueLagoon: '#5f03b1ff',
        purple: {
          spyrals: '#8C53FF',
          dark: '#8C0CB7',
          darkest: '#6F0D91',
          void: '#10002B'
        },
        redish: '#FF0054',
        orange: '#f96810ff',
        pink: '#B909B4',
        miamiPink: '#c72bdfff',
        aliceblue: '#f6f7fcff'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
	        '100%': { transform: 'translateX(-100%)' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        bounceFadeAppear: {
          '0%': { 
                  opacity: '0',
                  transform: 'translateY(50%)' 
                },
          '60%': {transform: 'translateY(-10%)'},
          '80%': {transform: 'translateY(5%)'},      
          '100%': { 
                    opacity: '1',
                    transform: 'translateY(0%)'
                  }
        },
        leftFadeAppear: {
          '0%': { 
                  opacity: '0',
                  transform: 'translateX(-50%)' 
                },
          '100%': { 
                    opacity: '1',
                    transform: 'translateX(0%)'
                  }
        }
      },
      rotate: {
        '4': '4deg',
        '7': '7deg',
        '8': '8deg',
        '9': '9deg',
        '20': '20deg'
      },
      screens: {
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}
