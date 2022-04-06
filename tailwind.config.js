module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Josefin Sans', "sans-serif"]
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
