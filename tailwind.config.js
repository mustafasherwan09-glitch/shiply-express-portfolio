/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./404.html",
    "./email-template.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        royal: "#2E1675",
        night: "#1D1240",
        violet: "#5B3CC4",
        lime: "#C6F16A",
        paper: "#F6F5FA",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Vazirmatn"', 'sans-serif'],
        kurdish: ['"Vazirmatn"', '"Plus Jakarta Sans"', 'sans-serif'],
        english: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
