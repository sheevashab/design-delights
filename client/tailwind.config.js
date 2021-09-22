module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-orange": "#e7ae7d",
        "medium-orange": "#da804f",
        "soft-yellow": "#ffe39f",
        "light-yellow": "#fff7dc",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
