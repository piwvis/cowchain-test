/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        "2xl": "1220px"
      }
    },
    extend: {
      fontFamily: {
        roc: ["roc-grotesk", "sans-serif"]
      },
      colors: {
        "th-fade": "#ffffff41",
        "th-grey": "#ffffff71",
        "th-violet": "#EABBFF",
        secondary: "#BBBBBB"
      },
      backgroundImage: {
        credo: 'url("/assets/credo_bg.jpg")'
      }
    }
  },
  plugins: [require("tailwindcss/nesting")]
};
