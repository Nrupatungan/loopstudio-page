/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)',
        Dark_Gray: 'hsl(0, 0%, 55%)',
        Very_Dark_Gray: 'hsl(0, 0%, 41%)', 
      },

      fontFamily: {
        Alata: '"Alata", sans-serif',
        Josefin: '"Josefin Sans", sans-serif',
      },

      backgroundImage: {
        'hero-img-mobile': 'url(./assets/images/mobile/image-hero.jpg)',
        'hero-img-desktop': 'url(./assets/images/desktop/image-hero.jpg)',
      },

      height: {
        'header-ht': '100svh',
      },

      boxShadow: {
        'incest': '0px 0px 74px -1px rgba(0,0,0,0.6) inset',
        'wicest': '0px 0px 74px -1px rgba(255,255,255,0.6) inset'
      }
    },
  },
  plugins: [],
}

