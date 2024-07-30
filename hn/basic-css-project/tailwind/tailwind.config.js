/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // 전역으로 관리하는
    extend: {
      colors: {
        mybrowy: '#666666',
      }
    },
  },
  plugins: [],
}

