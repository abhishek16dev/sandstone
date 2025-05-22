/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
