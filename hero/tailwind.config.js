/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1190px',
        'custom-md': '1000px',
         // Example custom media query for screens larger than 1024px
      },
    },
  },
  plugins: [],
}

