module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-orange": "#e7ae7d",
        "medium-orange": "#da804f",
        "medium-blue": "#7cc2e7",
        "soft-yellow": "#ffe39f",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
