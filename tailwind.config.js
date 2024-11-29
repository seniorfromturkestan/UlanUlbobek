/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        md: "1024px",
      },
      backgroundImage: {
        'custom-bg': "url('/src/images/back3.jpg')", // Укажите ваш путь
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulseGrow: 'pulseGrow 2s ease-in-out infinite',
      },
      keyframes: {
        ping: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "75%, 100%": { transform: "scale(2)", opacity: 0 },
        },
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
        },
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0, 8%)",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'], 
      },
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '300',
            src: 'url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format("woff2")',
            unicodeRange:
              'U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          },
          {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            src: 'url(https://fonts.gstatic.com/s/montserrat/v29/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format("woff2")',
            unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          },
        ],
      });
    }),
  ],
};
