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
    fontSize: {
      '9xl': ['10rem', {
        lineHeight: '1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      }],
    }
  },
  plugins: [],
}
