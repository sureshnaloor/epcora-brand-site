/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#074E84',
        secondary: '#2380C6',
        gold: '#FCBC45',
        golddeep: '#E8A020',
        ink: '#05052D',
        navy: '#0A1B33',
        body: '#505E6B',
        mist: '#F6F4FF',
        line: '#E7E3F5',
      },
      fontFamily: {
        display: ['Heebo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(7, 78, 132, 0.18)',
        cardhover: '0 24px 60px -16px rgba(7, 78, 132, 0.32)',
      },
    },
  },
  plugins: [],
};
