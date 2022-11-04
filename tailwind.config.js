/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

//A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
// require('@tailwindcss/forms'),