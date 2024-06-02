/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#b3b3b3", // Light Gray
          100: "#999999",
          200: "#808080",
          300: "#666666",
          400: "#4d4d4d",
          500: "#333333", // Default Dark
          600: "#292929",
          700: "#1f1f1f",
          800: "#141414",
          900: "#09090b", // Almost Black
          950: "#000000", // Black
        },
        light: {
          50: '#ffffff',  // White
          100: '#f7f7f7',
          200: '#efefef',
          300: '#e7e7e7',
          400: '#dfdfdf',
          500: '#d7d7d7',  // Default Light Gray
          600: '#cfcfcf',
          700: '#c7c7c7',
          800: '#bfbfbf',
          900: '#b7b7b7',
          950: '#a7a7a7',  // Light/Dark Gray
        },
        wool: {
          50: "#E2E4EE",
          100: "#D5D9E7",
          200: "#B8BED6",
          300: "#9EA7C7",
          400: "#808CB7",
          500: "#6372A6",
          600: "#505D8C",
          700: "#414B72",
          800: "#303854",
          900: "#202537",
          950: "#181C2A",
        },
        mauve: {
          50: "#EBECF4",
          100: "#D8D8E9",
          200: "#aaafc8",
          300: "#8C8EBF",
          400: "#6567A9",
          500: "#4B4D86",
          600: "#53546b",
          700: "#21223B",
          800: "#161727",
          900: "#050520",
          950: "#05060A",
        },
        de: {
          50: "#E7E7F9",
          100: "#D3D3F3",
          200: "#A2A2E6",
          300: "#7676DB",
          400: "#4646CE",
          500: "#2E2EAD",
          600: "#21217D",
          700: "#151551",
          800: "#090922",
          900: "#040410",
          950: "#020208",
        },
        // light: "#fafafa",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          lg: "45px",
          xl: "5rem",
          "2xl": "13rem",
        },
        maxWidth: {
          xl: "1100px",
          "2xl": "1100px",
        },
      },
      maxWidth: {
        container: "85rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          "@screen 2xl": {
            maxWidth: "1100px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      });
    },
  ],
};
