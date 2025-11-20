/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   container:{
    padding:{
      default: '15px',
      sm:'640px',
      md:'765px',
      lg:'1025px',
      xl:'1280px',
    },
    center:true,
   },
    extend: {},
    
  },
  plugins: [],
}

