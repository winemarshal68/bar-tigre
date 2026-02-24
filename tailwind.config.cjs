/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso:  '#1a0a06',
        mahogany:  '#2c1810',
        oxblood:   '#8b1a1a',
        rust:      '#a0341e',
        gold:      '#c9975a',
        cream:     '#f5efe6',
        parchment: '#ede4d3',
        tile:      '#d4c4b0',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
