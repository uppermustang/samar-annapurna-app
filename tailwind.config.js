/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: { DEFAULT: '#c65d3b', light: '#d97d5c', dark: '#a04a2e' },
        beige: { DEFAULT: '#e8dcc4', light: '#f5efe6', dark: '#c4b896' },
        deepblue: { DEFAULT: '#2c3e50', light: '#3d5a73', dark: '#1a252f' },
        saffron: { DEFAULT: '#e67e22', light: '#f39c12', dark: '#d35400' },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
