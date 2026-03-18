/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a6fb5',
        'primary-dark': '#145a94',
        secondary: '#0dcd7b',
        dark: '#1a1a2e',
        'dark-light': '#16213e',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
