/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'text-gradient': {
          '0%, 100%': { color: '#D8C4B6' },
          '50%': { color: '#F5EFE7' },
        },
        'zoom-rotate': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        'text-gradient': 'text-gradient 3s ease-in-out infinite',
        'zoom-rotate': 'zoom-rotate 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
