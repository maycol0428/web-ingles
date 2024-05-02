/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      midnightBlue: 'rgb(var(--color-midnight-blue) / <alpha-value>)',
      deepOceanBlue: 'rgb(var(--color-deep-ocean-blue) / <alpha-value>)',
      midnightBlack: 'rgb(var(--color-midnight-black) / <alpha-value>)',
      navyBlue: 'rgb(var(--color-navy-blue) / <alpha-value>)',
      aquaskyBlue: 'rgb(var(--color-aqua-sky-blue) / <alpha-value>)',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({ defaultTheme: "dark" })],
}