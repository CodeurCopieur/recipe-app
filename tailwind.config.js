/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "dodgeroll": '#F79F1A',
        "apple-green": '#046E1B',
        "dire-wolf": "#292727"
      }
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
      }
    }
  },
  plugins: [],
} 