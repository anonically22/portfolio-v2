/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#f2f1ec',
        ink: '#1a1a1a',
        border: '#d8d7d3',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tightest: '-0.06em',
      },
      fontSize: {
        hero: 'clamp(60px, 11vw, 200px)',
      }
    },
  },
  plugins: [],
}
