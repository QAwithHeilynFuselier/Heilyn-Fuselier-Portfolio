/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#09090b',
          raised: '#111113',
          border: '#27272a',
        },
      },
      maxWidth: {
        content: '68rem',
      },
    },
  },
  plugins: [],
};
