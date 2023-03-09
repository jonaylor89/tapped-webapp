/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'affiliate': "url('/images/affiliate.png')"
      },
      colors: {
        'tapped-blue': '#0086CC',
      },
    },
  },
  plugins: [],
}
