/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'group-hover:brightness-125',
    'group-hover:opacity-100',
    'md:group-hover:brightness-125',
    'md:group-hover:opacity-100',
    'md:opacity-10',
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
};
