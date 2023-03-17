/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
    "./pages/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xss': {'max': '500px'},
        'smm': {'max': '640px',"min":"501px"},
        'mdd': {'max': '768px',"min":"641px"},
        'lgg': {'max': '1024px',"min":"769px"},
        'xll': {'max': '1280px',"min":"1025px"},
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}