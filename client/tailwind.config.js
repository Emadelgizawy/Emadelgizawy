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
        accent: {
          50: '#fffbf0',
          100: '#fff8e1',
          200: '#fff4cc',
          300: '#fff0b3',
          400: '#ffed99',
          500: '#ffeb80',
          600: '#ffe666',
          700: '#ffe14d',
          800: '#ffdc33',
          900: '#ffd700',
        }
      },
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
      },
      direction: 'rtl',
    },
  },
  plugins: [],
}
