import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'], // Add Roboto Slab
        roboto: ['Roboto', 'serif'],  // Add Roboto
        fuggles: ["Fuggles", "serif"] //Fuggles
      },
      colors: {
        background: '#E4EFE7',   // background color
        primary: '#11B98E', //icon color
        secondary: '#D0E0D9' // section bg color
      },
    },
  },
  plugins: [daisyui],
}

