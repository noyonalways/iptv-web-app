/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: '100%',
          sm: "640px",
          lg: "768px",
          xl: "1100px",
          '2xl': '1400px'
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '5.5rem',
        },
      },
      colors: {
        lightBlack: '#222222'
      },
      fontFamily: {
        hindSiliguri: ['Hind Siliguri', 'sans-serif'],
      }
    },
  },
  plugins: [],
}