export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        cardBg: '#6e476b',
        textColorOne: '#1CAB55',
        borderColorOne: '#2c122e',
        servicesBg: '#654168',
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
