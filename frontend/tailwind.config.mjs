/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#F92E43",
        background: "var(--background)",
        foreground: "var(--foreground)",
        strokes: "#EDEDED",
        subtitle: "#8A8A8A",
        tile: "#F8F8F8"
      },
      fontFamily: {
        dmSans : ['var(--font-dmSans)']
      }
    },
  },
  plugins: [],
};
