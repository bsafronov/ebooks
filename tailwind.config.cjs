/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      base: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      
    },
  },
  plugins: [],
}
