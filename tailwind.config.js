/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "767px",
        lg: "1100px",
        xl: "1400px",
      },
      colors: {
        background: "#F6F8FA",
      },
      width: {
        "max-app": "1000px",
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
      height: {
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
    },
  },
  plugins: [],
};
