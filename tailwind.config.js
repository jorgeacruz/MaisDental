/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary":"#1f00be",
        "secondary":"#2bcfdb",
        "third":"#f6f6f6",
        "forth":"#0046fe"
      },
     fontFamily:{
        single:['WindDoomsday','sans-serif'],
        Metropolis:['Metropolis','sans-serif'],
        Metropolis_bold:['Metropolis_bold','sans-serif'],
        Metropolis_semibold:['Metropolis_semibold','sans-serif']
      } 
    },
  },
  plugins: [],
}

