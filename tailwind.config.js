module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-rgba-0': 'rgba(0, 0, 0, 0)',
        'black-rgba-1': 'rgba(0, 0, 0, 0.1)',
        'black-rgba-5': 'rgba(0, 0, 0, 0.5)',
      }
    },
    fontFamily: {
      sans: ['Josefin Sans', "sans-serif"]
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
