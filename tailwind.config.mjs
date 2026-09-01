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
      }
    }
  },
  plugins: []
};
