/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyGray: "#f0f0f0",
      },
      screens: {
        sm: "500px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      height: {
        almost: "calc(100% - 72px)",
        almostsm: "calc(100vh - 72px)",
        fill: "100%",
      },
      padding: {
        top: "130px",
        topSm: "72px",
      },
      width: {
        form: "60%",
        skills: "calc(100vw - 250px)",
        project: "80%",
      },
    },
  },
  plugins: [],
}
