/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primario: ['Poppins', 'sans-serif'],
        secundario: ['Playfair Display', 'sans-serif'],
        tercero: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

