/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#202124",
          steel: "#48515a",
          safety: "#d97706",
          plaster: "#f3f1ec",
          board: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
