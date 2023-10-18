/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

