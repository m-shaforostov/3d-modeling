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
      width: {
        px660: '660px',
        px768: '768px',
        px924: '924px',
        px1024: '1024px',
      },
      screens: {
        sm: '480px',
        px600: '600px',
        px690: '690px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}

