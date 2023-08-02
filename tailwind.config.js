/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      green:{
        dark: '#0D1610',
        prime: '#00FFAB',
        secon: '#14C38E',
        black: '#000000',
        white: '#fff',
        white_green: '#99F3BD',
        card :'#018383'
      }
    },
    extend: {
      fontFamily: {
        Rampart: ["Poppins", "sens"],
       },
    },
  },
  plugins: [],
}

