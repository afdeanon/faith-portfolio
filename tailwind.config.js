/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f8f8f8',
        'peachy-coral': '#f3a281',
        'tangerine': '#e76752',
        'warm-sand': '#f4ebdc',
        'light-maroon': '#ce7f85',
        'soft-blush': '#d9c0c9',
        'dusty-lavendar': '#a7a5c2',
        'rosy-clay': '#9f607b',
        'pale-periwinkle': '#d5d5ed',
        'muted-amethyst': `#826f8c`
      },
    },
  },
  plugins: [],
}

