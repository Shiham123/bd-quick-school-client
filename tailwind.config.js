export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cardBg: '#6e476b',
        textColorOne: '#1CAB55',
        borderColorOne: '#2c122e',
        servicesBg: '#654168',
        backgroundColor1: '#2A9D8F',
        backgroundColor2: '#363A59',
        darkGreen: '#07bc0c',
      },
      screens: {
        'xs': '320px', // 320px width
        'sm': '375px', // 375px width
      },
    },
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      cinzel: ['Cinzel', 'sans-serif'],
    },
  },

  plugins: [require('daisyui')],
};
