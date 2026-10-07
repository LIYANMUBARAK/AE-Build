/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hyrox: {
          50: '#FFE5E8',
          100: '#FFB8C0',
          200: '#FF8A96',
          300: '#FA5C6C',
          400: '#F02338',
          500: '#E4002B', // Primary HYROX red
          600: '#BE0024',
          700: '#97001D',
          800: '#710015',
          900: '#4A000E',
        },
        black: {
          DEFAULT: '#000000',
          light: '#141414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Anton', '"League Gothic"', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};