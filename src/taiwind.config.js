/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1200px',
    xl: '1280px',
  },
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },

  
};
export const plugins = [];
