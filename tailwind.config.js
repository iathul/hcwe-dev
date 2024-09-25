/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss,sass}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01AFA0',
        'dark': "#454D54",
        'primary-light': "#D8EEEC",
        'light': "#F1F2F3",
        'secondary': "#127FA8",
        'ternary': "#E6B554",
        'ternary-light': "#E6B55425",
      }
    },
  },
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-ternary',
    'bg-test-color',
    'bg-new-color',
    'bg-trial',
    'text-primary',
    'text-secondary',
    'text-ternary',
    'primary-light',
    'ternary-light'
  ],
  plugins: [],
}