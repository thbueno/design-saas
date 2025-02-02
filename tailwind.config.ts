import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        vermilion: {
          "50": "#fff6ec",
          "100": "#ffead3",
          "200": "#ffd2a5",
          "300": "#ffb26d",
          "400": "#ff8532",
          "500": "#ff630a",
          "600": "#fd4800",
          "700": "#cc3102",
          "800": "#a1270b",
          "900": "#82230c",
          "950": "#460e04",
        },

        thunderbird: {
          "50": "#fff4ec",
          "100": "#ffe7d3",
          "200": "#ffcba5",
          "300": "#ffa66c",
          "400": "#ff7431",
          "500": "#ff4f09",
          "600": "#f63200",
          "700": "#d42202",
          "800": "#a21b0a",
          "900": "#821a0c",
          "950": "#460904",
        },

        diesel: {
          "50": "#fff4ec",
          "100": "#ffe7d2",
          "200": "#ffcba4",
          "300": "#ffa66b",
          "400": "#ff752f",
          "500": "#ff4f06",
          "600": "#f93200",
          "700": "#cf2000",
          "800": "#a31a09",
          "900": "#83190b",
          "950": "#190301",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
