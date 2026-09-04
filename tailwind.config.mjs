/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"Work Sans"', 'sans-serif']
      },
      colors: {
        cream: '#F7F1E7',
        'cream-2': '#EFE6D6',
        paper: '#FFFCF7',
        burgundy: {
          DEFAULT: '#6B2737',
          dark: '#4A1B27'
        },
        mustard: {
          DEFAULT: '#C98A2C',
          dark: '#9C6A1E'
        },
        terracotta: '#A8452F',
        ink: {
          DEFAULT: '#2E211C',
          soft: '#5A4C43'
        },
        sage: '#7C8363',
        borderc: '#DCCFB8'
      },
      boxShadow: {
        cozy: '0 10px 30px -12px rgba(46, 33, 28, 0.18)',
        'cozy-lg': '0 25px 60px -20px rgba(46, 33, 28, 0.25)'
      }
    }
  },
  plugins: []
};
