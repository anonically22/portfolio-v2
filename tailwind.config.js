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
        background: {
          light: '#FAFAFA',
          dark: '#0A0A0A',
        },
        text: {
          light: '#111111',
          dark: '#EAEAEA',
        }
      }
    },
  },
  plugins: [],
}

