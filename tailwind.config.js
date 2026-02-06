/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.html",
  ],
  theme: {
    fontFamily: {
      sans: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}
