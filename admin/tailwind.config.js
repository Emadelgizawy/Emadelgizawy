module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f5ebe2',
          200: '#ead7c5',
          300: '#dfc3a8',
          400: '#d4af8b',
          500: '#c99b6e',
          600: '#b8865c',
          700: '#a2724d',
          800: '#8c5e3e',
          900: '#764a32',
        },
      },
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
