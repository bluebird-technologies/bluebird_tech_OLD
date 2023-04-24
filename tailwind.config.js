// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1850px',
      },
      fontFamily: {
        main: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        primary: '#1E2B3B',
        highlight: '#E97724',
        secondary: '#3D6895',
        grey: '#F1F1F1',
        lightGrey: '#AFAFAF',
        light: '#E0E0E0',
        darkGrey: '#B9B9B9',
        orange: '#DA7D3B',
      },
    },
  },
  plugins: [],
};
