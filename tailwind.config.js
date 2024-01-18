export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { cardBg: '#6e476b', textColorOne: '#1CAB55' },
    },
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      cinzel: ['Cinzel', 'sans-serif'],
    },
  },

  plugins: [require('daisyui')],
};
