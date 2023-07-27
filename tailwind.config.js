/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'gen-grey': '#303030',
      },
      screens: {
        sm: '480px',
        px600: '600px',
        px690: '690px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      height: {
        vw80: '75vw',
      },
      width: {
        vw80: '75vw',
        px660: '660px',
        px768: '768px',
        px924: '924px',
        px1024: '1024px',
      }
    },
  },
  plugins: [],
}

