/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGreen: "#F1F5EB",
        darkGReen: "#034833",
        lightGreen: "#83CD20",
        textGray: "#727272",
        borderGray: "#E3DBD8",
        borderLight: "#D9D9D9",
        diffBlack: "#16171A",
      },
      screens: {
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
