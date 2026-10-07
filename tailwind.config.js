/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hyrox: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EEEEEE',
          400: '#E5E5E5',
          500: '#FFFFFF', // Primary accent (HYROX-style black & white)
          600: '#D4D4D4',
          700: '#A3A3A3',
          800: '#737373',
          900: '#404040',
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