/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/header_img.png')",
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out', // Specify duration directly
      },
      keyframes:{
        fadIn :{
          '0%':
            {opacity:0},
          
          '100%': 
            {opacity:1}
          
        }
      },
      fontSize:{
        'responsive': 'max(1.4vw, 16px)',
      }
    },
  },
  plugins: [],
}