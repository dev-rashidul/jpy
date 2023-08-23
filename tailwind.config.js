/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2rem',
      },
      colors: {
        brown:{
          400: "#F7941D",
          600: "#B7660D",
        },
        light:{
          400: "#ffffff",
          600: "#FAFAFA",
        },
        dark:{
          300: "#58595B",
          400: "#535353",
          500: "#3A3A3A",
          600: "#1E1E1E",
        },
      },
    },
    fontFamily:{
      Comfortaa: ['Comfortaa', 'cursive'],
      Inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}