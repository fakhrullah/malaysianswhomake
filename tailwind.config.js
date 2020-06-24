module.exports = {
  purge: false,
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    fontFamily: {
      display: ['Karla', 'sans-serif'],
      body: ['Karla', 'sans-serif']
    },
    colors: {
      'white': '#FFFFFF',
      'dark': '#000',
      'lightgray': '#404040',
      'blue': '#010066'
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', //20px
      '24': '1.4rem',
      'xl': '2rem', //32px
      'xxl': '2.25rem' //36px
    },
    fontWeight: {
      normal: 400,
      semibold: 700,
      bold: 700,
    },
    inset: {
      '8': '7rem',
      '11': '9rem'
    },
    maxWidth: {
      '14': '14rem',
      '48': '48rem'
    },
    height: {
      '28': '7rem',
      'imgmd': '11rem', //makerImage height
      'imglg': '13rem',
      'imgsm': '18rem'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}