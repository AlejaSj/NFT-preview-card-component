/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        veryDarkBlue: 'hsl(217, 54%, 11%)',
        veryDarkBlue2: 'hsl(216, 50%, 16%)',
        veryDarkBlue3: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily:{
        outfit: ["Outfit", "serif"]
      }
    },
  },
  plugins: [],
}

