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
        paper: '#FFFFFF',   // background paper
        primary: '#11B98E', //icon color
        secondary: '#ededed' //bg color
      },
    },
  },
  plugins: [daisyui],
}

