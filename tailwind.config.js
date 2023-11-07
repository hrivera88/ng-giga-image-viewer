/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        "80vw": "80vw",
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};

