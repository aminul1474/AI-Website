/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        screen:'100dvh'
      },
      keyframes: {
        slideUpfadeIn: {
          '0%': { transform: 'translateY(30px)' , opacity:'0'},
          '100%': { transform: 'translateY(0)' , opacity:'1'},
        }
      },
      animation: {
        wiggle: 'slideUpfadeIn 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

