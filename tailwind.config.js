const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Update your paths
  theme: {
    extend: {
      animation: {
        liquid: 'liquidAnimation 10s linear infinite',
        marquee: 'marquee 20s linear infinite',
        'bounce-slow': 'bounce 4s infinite',
      },
      keyframes: {
        liquidAnimation: {
          '0%': { transform: 'translate(-50%, -75%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -75%) rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn--liquidBtn': {
          overflow: 'hidden',
          position: 'relative',
          span: {
            position: 'relative',
            zIndex: '1',
          },
          '&:hover div': {
            top: '-120px',
          },
        },
      });
    }),
  ],
};
