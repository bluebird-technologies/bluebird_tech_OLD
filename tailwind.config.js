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
      fontFamily: {
        main: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        primary: '#1E2B3B',
        highlight: '#E97724',
        secondary: '#3D6895',
        gray: '#AFAFAF',
      },
    },
  },
  plugins: [],
};
