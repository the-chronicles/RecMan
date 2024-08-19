/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fonts: {
        custom: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        regular: 400, // Figtree-Regular.ttf
        medium: 500, // Figtree-Medium.ttf
        semibold: 600, // Figtree-Semibold.ttf
        bold: 700, // Figtree-Bold.ttf
        extrabold: 800, // Figtree-ExtraBold.ttf
        black: 900, // Figtree-Black.ttf
      },
    },
  },
  plugins: [],
};
