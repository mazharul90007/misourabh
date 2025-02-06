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
      },
      colors: {
        paper: '#F9F4DA',   // background paper
        primary: '#F6A98F', //icon color
        secondary: '#FAF6F3' //bg color
      },
    },
  },
  plugins: [daisyui],
}

