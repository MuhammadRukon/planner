/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: "'Dancing Script', cursive",
        primary: "'Courgette', cursive;",
        secondary: "'Roboto Serif', serif;",
      },

      backgroundImage: {
        hero: "url('https://i.ibb.co/7z6DpH5/banner-Image.jpg')",
      },
      colors: {
        primary: "#ffcffd",
      },
    },
  },
  plugins: [require("daisyui")],
};
