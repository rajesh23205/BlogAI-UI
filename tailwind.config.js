/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ai: {
            primary: '#6366f1', // Indigo for that "AI" feel
            secondary: '#a855f7'
          }
        }
      },
    },
    plugins: [],
  }