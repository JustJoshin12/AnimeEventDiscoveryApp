/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#bb29bb', 
        'dark': '#000', 
      },
    },
  },
  plugins: [
    require('autoprefixer')
  ],
}