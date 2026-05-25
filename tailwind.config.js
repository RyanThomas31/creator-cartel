/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark': '#000000',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
        'gray-primary': '#555555',
        'gray-secondary': '#888888',
        'gray-tertiary': '#aaaaaa',
        'gray-quaternary': '#cccccc',
      }
    },
  },
  plugins: [],
}
