/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#0E84C1",
    //   white: "#ffffff",
    //   black: "#000000",
    //   secondary: "#F9ED3A",
    //   blue: "#1e3a8a",
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      screens: {
        xs: "350px",
        ss: "375px",
        ls: "410px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}
