/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#798C8C",
        secondary: "#AEBFBE",
        accent: "#F2EFDF",
        "accent-dark": "#59554C",
        "accent-light": "#D0D9D4",
        "accent-lighter": "#E8ECEC",
      },
      width: {
        "0/10": "0%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
}

