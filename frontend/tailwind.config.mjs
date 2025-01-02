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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        light: ['var(--font-chesnaLight)'],        
        regular: ['var(--font-chesnaRegular)'],
        medium: ['var(--font-chesnaMedium)'],
        semibold: ['var(--font-chesnaSemibold)'],
        bold: ['var(--font-chesnaBold)'],
      }
    },
  },
  plugins: [],
};
