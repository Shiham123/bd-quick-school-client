export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { cardBg: '#6e476b' } } },
  
  plugins: [require('daisyui')],
};
