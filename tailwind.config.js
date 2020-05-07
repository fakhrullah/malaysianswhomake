module.exports = {
  purge: false,
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    colors: {
      'primary': '#202020',
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'dark': '#202020',
      'lightgray': '#404040'
    },
    fontFamily: {
      'sans': '"Work Sans", Arial, sans-serif',
    },
    fontSize: {
      'xxs': '0.6875rem', //11px
      'xs': '0.75rem', //12px
      's': '0.875rem', //14px
      'base': '1rem',
      'l': '1.25rem', //20px
      '24': '1.5rem', //24px
      'xl': '2rem', //32px
      'xxl': '2.8rem' //44px
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    inset: {
      '6': '6rem'
    },
    maxWidth: {
      '14': '14rem',
      '48': '48rem'
    },
    height: {
      '28': '7rem'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}