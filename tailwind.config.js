/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        rubik: [ 'Passion One',"sans-serif"],
        lobster:["Lobster Two","sans-serif"],
        cinzel:["Cinzel","serif"],
        exo:['Exo', "sans-serif"],
        kaushan:['Poltawski Nowy', 'serif'],
        parameter:["Permanent Marker", "cursive"],
        merienda:["Merienda", 'cursive'],
      },
    },
  },
  plugins: [],
}

