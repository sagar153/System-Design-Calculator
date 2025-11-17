/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'logo-blue': '0 0 2em #646cffaa',
        'logo-react': '0 0 2em #61dafbaa',
      },
      animation: {
        'spin': 'spin 20s linear infinite',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}