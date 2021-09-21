module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-orange": "#DB682D",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
