module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      // colors: {
      //   'turquoise': {
      //     50: '#F5FDFD',
      //     100: '#ECFCFA',
      //     200: '#CFF7F3',
      //     300: '#B3F3EC',
      //     400: '#79E9DE',
      //     500: '#40E0D0',
      //     600: '#3ACABB',
      //     700: '#26867D',
      //     800: '#1D655E',
      //     900: '#13433E',
      //     },
      // },
      backgroundImage: theme => ({
        'circuit-pattern': "url('/public/circuit-pattern.svg')",
        'texture-pattern': "url('/public/texture-pattern.png')",
       }),
       boxShadow: {
         url: "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #bae6fd",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
