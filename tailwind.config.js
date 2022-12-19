/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dnb-green': '#007272',
        status: {
          'danger': '#FF5400',
          'warning': '#FDBB31',
          'success': '#28B482'
        }
      },
    },
  },
  plugins: [],
}
