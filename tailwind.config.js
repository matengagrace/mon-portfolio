/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C4DEFD",
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1152px',
        'xl': '1300px',
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}
