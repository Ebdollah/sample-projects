/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1024px', // Example custom media query for screens larger than 1024px
      },
    },
  },
  plugins: [],
}

