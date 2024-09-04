/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fading: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'crimson-text': ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [],
}

