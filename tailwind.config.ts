export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      adaptive: { max: '375px' },
      mobile: { max: '375px' },
      tablet: { max: '768px' },
      desktop: { max: '1024px' },
    },
    colors: {
      black: '#121417',
    },
  },
};
