/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'accent': {
        50: '#e6f5ff',
        100: '#d2ecff',
        200: '#addbff',
        300: '#7dbfff',
        400: '#4a93ff',
        500: '#2167ff',
        600: '#003cff',
        700: '#0040ff',
        800: '#0036d8',
        900: '#072d9e',
        950: '#051a61',
    },
    'primary': {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000',
    },
    }
  },
  plugins: [],
}
