/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#828770",
        "darkGreen": "#273120",
        "beige": "#ebeae6",
        "offwhite": "#f5f5f5",
        "darkGray": "#292524",
      },
      fontFamily: {
        "hind": ['Hind Siliguri', 'sans-serif'],
        "cantata": ['Cantata One', 'serif'],
        "kameron": ['Kameron', 'serif'],
        //TODO Add fallback options for the fonts above (or is it done automatically, using font-sans for Hind, and so on?)
      }
    },
  },
  plugins: [],
}
