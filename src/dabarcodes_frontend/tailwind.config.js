// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         butler: ['Butler', 'serif'],
//       },
//       fontSize: {
//         'hero-heading': '61px',
//       },
//       lineHeight: {
//         'hero-heading': '73.2px',
//       },
//       fontWeight: {
//         'extra-bold': 800,
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        butler: ['Butler', 'serif'], // Adding Butler font
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

