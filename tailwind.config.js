/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      maxWidth: {
        'screen-5/8' : '1860px'
      },
      fontWeight: {
        'font-size':'1.2rem',
      },
      screens: {
        'mobile':'360px'
      },
    },
  },
  plugins: [],
}

