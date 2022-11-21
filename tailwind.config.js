/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx',"./pages/**/*.{js,ts,jsx,tsx}",],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      "red-1": "#DB284E",
      "red-2": "#FDDAE0",
      "green": "#50BF78"
    },
  boxShadow:{
    "card": "0px 2px 20px 0px #CBCBCB0D"
  }},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')],
}