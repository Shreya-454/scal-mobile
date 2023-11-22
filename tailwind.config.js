/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': '"Rubik"'
      },
      backgroundImage: {
        'bluegreen': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',
        'blueellipse': 'linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%)',
        'bluesec': ' linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)',
      },

    },
  },
  plugins: [],
}

